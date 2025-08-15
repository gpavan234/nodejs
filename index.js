import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes.js';
import userController from './controllers/userController.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Core middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Views (if you use EJS)
app.set('view engine', 'ejs');

// Routes
app.use('/api/auth', authRoutes);
app.get('/', userController?.index ?? ((_, res) => res.send('Home')));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Central error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({
    message: err.message || 'Something went wrong',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
