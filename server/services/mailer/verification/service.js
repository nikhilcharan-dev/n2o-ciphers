import transporter from '../mail.js';

const sendVerificationMail = async (receiver, unicode) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: receiver,
        subject: 'Verification Mail',
        text: `${unicode} is your verification code to get verified in N2O Ciphers Bounty Nation`,
    }
    return await transporter.sendMail(mailOptions);
}

export default sendVerificationMail;