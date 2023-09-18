// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  otp: String,
  isVerified: Boolean,
});

module.exports = mongoose.model('User', userSchema);
