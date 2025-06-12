import transporter from "../mail.js";

const sendForgetPasswordCode = async (email, type, unicode) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Password reset code',
        text: `The reset code for resetting your password is\n\n ${unicode}\n\n for your ${type.toUpperCase()} Account`,
    }

    await transporter.sendMail(mailOptions);
}

export default sendForgetPasswordCode;