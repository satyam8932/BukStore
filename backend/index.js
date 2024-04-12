import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './config/connectDB.js';
import bookRouter from './routes/bookRoute.js';
import userRouter from './routes/userRoute.js';
import cors from 'cors'
import corsOptions from './config/corsOptions.js'

// Initialize Express
const app = express();

// Using Environment Variables
dotenv.config()
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
connectMongoDB(MONGODB_URI);

// Setting Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Testing
app.get('/', (req, res) => {
  res.send('Welcome to BukStore! backend');
});


// Defining Routes

// Book routes
app.use('/api/v1/', bookRouter);

// Login and Signup routes
app.use('/api/v1/', userRouter);



// Server Start
app.listen(PORT);
