import mongoose from 'mongoose';

const connectMongoDB = async (MONGODB_URI) => {
    try {      
        // Connect to MongoDB using mongoose
        await mongoose.connect(MONGODB_URI);

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}

export default connectMongoDB; 
