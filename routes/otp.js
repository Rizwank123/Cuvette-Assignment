// routes/otp.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// OTP validation
router.post('/verify', async (req, res) => {
  try {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.otp === req.body.otp) {
      // OTP is valid, register the user
      user.isVerified = true;
      await user.save();
      return res.status(200).json({ message: 'User registered successfully' });
    } else {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
