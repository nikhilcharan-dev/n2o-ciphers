import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        default: 'user' },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    unicode: String,
    verified: {
        type: Boolean,
        default: false,
    },
    password: String,
    type: {
        type: String,
        enum: ['student', 'gig-worker'],
        default: 'student',
    },

});

export const User = mongoose.model("User", UserSchema);