import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { googleLogin, getMe } from '../controllers/authController.js';

const router = express.Router();

router.post('/google', authMiddleware, googleLogin);

router.get('/me', authMiddleware, getMe);

export default router;