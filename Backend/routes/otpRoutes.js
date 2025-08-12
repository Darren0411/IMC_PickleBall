import express from 'express';
import rateLimit from 'express-rate-limit';
import { sendOtp, verifyOtp } from '../Controllers/otpController';

const router = express.Router();

// Rate limit: Max 3 OTPs per 10 minutes per IP
const sendLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3,
});

// Routes
router.post('/send', sendLimiter, sendOtp);
router.post('/verify', verifyOtp);

export default router;