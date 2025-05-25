import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'n2o-db'
        });
        console.log('Connected to DB server');
    } catch(err) {
        console.log("Error: MongoDB connection error: " + err);
        process.exit(1);
    }
};

export default connectDB;

