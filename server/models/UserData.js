import mongoose from "mongoose";

// education details
const EducationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startYear: Number,
    endYear: Number,
    grade: String,
});

// coding details
const CodingProfileSchema = new mongoose.Schema({
    platform: String,
    url: String,
});

const UserDataSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    fullName: { type: String, required: true },
    dateOfBirth: Date,
    gender: { type: String, enum: ['Male', 'Female', 'Other'], default: 'Other' },
    phone: String,
    address: String,

    education: [EducationSchema],

    codingProfiles: [CodingProfileSchema],

    portfolioLink: String,

    bio: String,

    skills: [String],

    certificates: [String],
    certificateCount: Number,
});


export const UserData = mongoose.model("UserData", UserDataSchema);