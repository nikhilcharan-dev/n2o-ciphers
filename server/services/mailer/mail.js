import nodemailer from 'nodemailer';

// load env for transporter
import dotenv from 'dotenv';
dotenv.config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

transporter.verify((err, info) => {
    if (err) {
        console.error("Error verifying email verification", err);
    } else {
        console.log("Server is ready to sent/receive Messages");
    }
});

export default transporter;