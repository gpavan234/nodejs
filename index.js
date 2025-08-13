import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import userController from './controllers/userController.js';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  ssl: true,
  tlsAllowInvalidCertificates: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));


// Routes
app.use('/api/auth', authRoutes);
app.get('/', userController.index);

// Set view engine
// app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
