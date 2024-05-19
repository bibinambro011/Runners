
const nodemailer = require('nodemailer');

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


const generateMail = async (email) => {
    const otp = generateOtp();
    console.log("otp is =>", otp);
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'bibindasmessi@gmail.com',
            pass: 'amyq ipki zrkl vmtn', // Use application-specific password or OAuth2 for better security
        }
    });
    
    // Email data including the OTP
    const mailOptions = {
        from: 'bibindasmessi@gmail.com',
        to: email, // Using the provided email parameter
        subject: 'Gmail Verification',
        text: `Your OTP for verification is: ${otp}`, // Include the OTP in the email text
    };
    
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error.message); // Reject the promise with the error message
            } else {
                resolve(otp); // Resolve the promise with the OTP
            }
        });
    });
};

// To test the function
// Replace 'recipient@example.com' with a valid email address for testing
const testEmail = 'recipient@example.com';

generateMail(testEmail).then(otp => {
    console.log('OTP sent:', otp);
}).catch(error => {
    console.error('Error sending email:', error);
});

module.exports = generateMail;
