const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  console.log("asdfdsfafghadsfladshfjadhsfljka mail sent")
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "api",
      pass: "2df05f209cbf05f6ed474eba1f68bc88",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log("Error while send mail to the user : ", err);
    } else {
      // console.log("Info Sent", info);
    }
  });
};



module.exports = sendEmail;
