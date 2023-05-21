const nodeMailer = require("nodemailer");

const mailTransporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_URL,
    pass: process.env.EMAIL_PASS,
  },
});

const transferMail = async (
  emailDestination,
  titleMessage,
  bodyMessage,
  htmlBody
) => {
  try {
    const sent = await mailTransporter.sendMail({
      from: "study-partner",
      to: emailDestination,
      subject: titleMessage,
      text: bodyMessage,
      html: htmlBody,
    });
    return "email sent";
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

module.exports = {
  transferMail,
};
