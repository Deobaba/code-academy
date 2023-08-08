const nodemailer = require('nodemailer');

const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
     auth: {
       user: process.env.FROM_EMAIL,
       pass: process.env.FROM_PASSWORD
     }
   });

      let info = await transporter.sendMail({
        from: process.env.FROM_SENDER, // sender address
        to: options.email, // list of receivers
        subject: 'Password reset token', // Subject line
        text: options.message, // plain text body
      });

      console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;


