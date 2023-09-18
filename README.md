
# User Registration with OTP Verification

This Node.js application provides a user registration system with OTP (One-Time Password) verification using MongoDB as the database and Twilio for sending OTPs via SMS.

## Features

- User registration with validation based on IP address.
- Sending OTP to the user's phone number.
- OTP validation for user registration.
- MongoDB for storing user data.
- Twilio for sending SMS with OTPs.

## Prerequisites

Before running this application, make sure you have the following:

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running
- [Twilio](https://www.twilio.com/) account with Account SID, Auth Token, and a Twilio phone number
- `.env` file with the following environment variables:

   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/rizwank123/Cuvette-Assignment.git
   cd Cayvette-Assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of your project and add the environment variables mentioned in the Prerequisites section.

## Usage

Start the server:

```bash
node server.js
```

The server will be running on port 3000 by default. You can access the API endpoints as follows:

- User Registration: `POST /auth/register`
- OTP Verification: `POST /otp/verify`

## API Documentation

For detailed API documentation and usage examples, refer to the API documentation file [here](api-documentation.md).

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Twilio](https://www.twilio.com/)

## Authors

- [Mohammad Rizwan](https://github.com/rizwank123)

```

This template includes sections for features, prerequisites, installation steps, usage instructions, API documentation, contributing guidelines, licensing information, acknowledgments, and author information. You can customize it further to match the specifics of your project and add more details as needed.