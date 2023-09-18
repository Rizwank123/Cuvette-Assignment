// utils/sendOTP.js
const twilio = require('twilio');

const accountSid = 'ACfd5b5ede738c7fb3f78b8533472dc35d';
const authToken = 'dcbb32287a3c420936a0a28985f5de9d';
const twilioPhoneNumber = '+13346058603';

const client = twilio(accountSid, authToken);

async function sendOTP(phoneNumber) {
  try {
    const otp = generateOTP();

    // Send the OTP via SMS using Twilio
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    });

    console.log(`OTP sent to ${phoneNumber}: ${otp}`);

    return otp;
  } catch (error) {
    throw error;
  }
}

function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

module.exports = sendOTP;
