// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const sendOTP = require('../utils/sendOTP');

// User registration
router.post('/register', async (req, res) => {
  try {
    // Validate IP address here (you can use middleware for this)
    
    // Generate and send an OTP to the user's phone number
    const otp = await sendOTP(req.body.phoneNumber);

    // Save user data and OTP in the database
    const newUser = new User({
      username: req.body.username,
      phoneNumber: req.body.phoneNumber,
      otp: otp,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
