// controllers/otpController.js
import { getTwilioClient } from '../services/twilioVerify.js';

// Send OTP
export const sendOtp = async (req, res) => {
  try {
    const client = getTwilioClient();
    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: req.body.phone, channel: 'sms' });

    res.status(200).json({ message: 'OTP sent', sid: verification.sid });
  } catch (err) {
    console.error('OTP send error:', err);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
};

// Verify OTP
export const verifyOtp = async (req, res) => {
  const { phone, code } = req.body;

  if (!phone || !code) {
    return res.status(400).json({ error: 'Phone and OTP code are required.' });
  }

  try {
    const client = getTwilioClient();
    const check = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: phone, code });

    if (check.status === 'approved') {
      return res.status(200).json({ success: true, message: 'OTP verified!' });
    } else {
      return res.status(401).json({ success: false, message: 'Incorrect or expired OTP.' });
    }
  } catch (err) {
    console.error('OTP verify error:', err.message);
    return res.status(500).json({ error: 'Verification failed.' });
  }
};
