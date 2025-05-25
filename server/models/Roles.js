import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserData' },
    course: String,
    completedCourses: [String]

});

const GIGWorkerSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserData' },
    wage: Number,
    projectName: String,
    projectCompletionRate: Number,
    completedProjects: [String],
    appliedProjects: [String],

});

export const Student = mongoose.model('Student', StudentSchema);
export const GIGWorker = mongoose.model('Freelancer', GIGWorkerSchema);