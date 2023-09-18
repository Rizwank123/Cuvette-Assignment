// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Define routes
app.use('/auth', require('./routes/auth'));
app.use('/otp', require('./routes/otp'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
