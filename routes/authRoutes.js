import express from 'express';
import { signup, login, profile, adminOnly, updateUserProfile } from "../controllers/authController.js";
import auth from '../middlewares/authMiddleware.js';
import authorize from '../middlewares/authorize.js';    
import validate from '../middlewares/validate.js';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6+ chars'),
    body('role').optional().isIn(['user', 'admin']).withMessage('Invalid role'),
  ],
  validate,
  signup   // ✅ use signup here instead of register
);
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate,
  login
);

router.route("/profile").get(auth, profile).put(auth, updateUserProfile);
router.get('/admin', auth, authorize(['admin']), adminOnly);

export default router;
