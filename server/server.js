import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import connectDB from "./config/DB.js";
import authRoutes from "./routes/authRoutes/auth.js";
import transporter from "./services/mailer/mail.js";

// loading env
config();

// MiddleWare
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/oauth', authRoutes);

// checker
app.get('/ping', (req, res) => {
    return res.status(200).json({ message: 'pong'});
})

// Server origin
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});

/*
    type: tester
    email: tester@ciphers.com
    password: admin
 */