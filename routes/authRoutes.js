import express from 'express';
import { signup, login,profile  } from '../controllers/authController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('/register', signup);
router.post('/login', login);
router.get('/profile', auth, profile);

export default router;
