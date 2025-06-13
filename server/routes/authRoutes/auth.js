import { Router } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import { User } from "../../models/User.js";
import { Student, GIGWorker } from '../../models/Roles.js';
import sendVerificationMail from "../../services/mailer/verification/service.js";
import sendForgetPasswordCode from "../../services/mailer/forgot-password/service.js";


// helper functions
async function addStudentDetails(userId, studentData) {
    let student = await Student.findById(userId);

    if (student) {
        // update data...
        await student.save();
    } else {
        student = new Student({
            _id: userId,
            ...studentData,
        });
        await student.save();
    }
    return student;
}

async function addGIGWorkerDetails(userId, GIGWorkerData) {
    let gigWorker = await GIGWorker.findById(userId);

    if (gigWorker) {
        gigWorker.skills = GIGWorkerData.skills;
        gigWorker.hourlyRate = GIGWorkerData.hourlyRate;
        gigWorker.portfolioLink = GIGWorkerData.portfolioLink;
        // update other fields...
        await gigWorker.save();
    } else {
        gigWorker = new gigWorker({
            _id: userId,
            ...GIGWorkerData,
        });
        await gigWorker.save();
    }
    return gigWorker;
}

const getId = () => {
    return new mongoose.Types.ObjectId();
}

const getUnicode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const router = new Router();

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email}).lean();
        if(user) {
            return res.status(409).json({
                error: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            _id: getId(),
            email: email,
            password: hashedPassword
        });

        await newUser.save();
        return res.status(200).send('User successfully registered');
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email}).lean();
        if(!user) {
            return res.status(404).json({
                error: 'User does not exist'
            });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) {
            return res.status(404).json({
                error: 'Passwords do not match'
            });
        }

        const studentExists = await Student.exists({ _id: user._id });
        const gigWorkerExists = await GIGWorker.exists({ _id: user._id });

        if (!studentExists && !gigWorkerExists) {
            return res.status(202).json({
                type: 'Not Associated',
                user
            });
        }

        if(studentExists) {
            const student = await Student.findOne({_id: user._id}).lean();
            return res.status(200).json({ type: 'Student', student });
        }

        if(gigWorkerExists) {
            const gigWorker = await GIGWorker.findOne({_id: user._id}).lean();
            return res.status(200).json({ type: 'GIGWorker', gigWorker });
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/send-verification-mail', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email});
        if(!user) {
            return res.status(404).json({
                error: 'User does not exist'
            });
        }
        if(user.verified === true) {
            return res.status(400).json({
                error: 'User already verified'
            });
        }
        const unicodeToken = getUnicode();
        await sendVerificationMail(email, unicodeToken);
        user.unicode = unicodeToken;
        await user.save();
        return res.status(200).send('Email sent successfully');
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// http://localhost:5000/api/oauth/verify-verification-email?userId=12345&verificationCode=12345
router.get('/verify-verification-email/', async (req, res) => {
    const { verificationCode, userId } = req.query;
    try {
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({
                error: 'User does not exist'
            })
        }
        if(user.verified===true) {
            return res.status(400).json({
                error: 'User already verified'
            })
        }
        if(verificationCode !== user.unicode) {
            return res.status(400).json({
                error: 'Verification Code does not match'
            })
        }
        user.verified = true;
        await user.save();
        return res.status(200).send('Email verified successfully');
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        })
    }
});

router.post('/change-password', async (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;
    try {
        const user = await User.findbyId(userId);
        if(!user) return res.status(404).json({ error: 'User does not exist' });
        if(!bcrypt.compare(oldPassword, user.password)) {
            return res.status(400).json({
                error: 'Wrong Password'
            });
        }
        user.password = await bcrypt.hash(newPassword, 12);
        await user.save();
        return res.status(200).send('Password successfully updated');
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('send-forgot-password-mail', async (req, res) => {
    const { email } = req.body;
    console.log(email)
    try {
        const user = await User.findOne({ email: email});
        if(!user) return res.status(404).json({
            error: 'User does not exist'
        })
        console.log(user)
        const unicodeToken = getUnicode();
        await sendForgetPasswordCode(email, user.type, unicodeToken);
        user.unicode = unicodeToken;
        await user.save();
        return res.status(200).send('Password reset code sent successfully');
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// http://localhost:5000/api/oauth/verify-reset-password?userId=12345&resetCode=12345
router.get('/verify-reset-password', async (req, res) => {
    const { userId, resetCode, password } = req.query;
    try {
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({
                error: 'User does not exist'
            });
        }
        const unicode = user.unicode;
        if(unicode !== resetCode) {
            return res.status(400).json({
                error: 'Invalid Reset Code'
            });
        }
        user.password = await bcrypt.hash(password, 12);
        await user.save();
        return res.status(200).send('Password reset successful');
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
})

router.get('/get-all-users', async (req, res) => {
    try {
        const users = await User.find().lean();
        res.status(200).json(users);
    } catch (err) {
        console.error('Failed to fetch users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;