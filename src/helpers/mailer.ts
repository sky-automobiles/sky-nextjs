import nodemailer from "nodemailer";

export const sendEmail = async ({  subject, to, text, phone }: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.error("Error connecting to email server:", error);
        return {
          status: false,
          message: "Failed to connect to email server",
        };
      }
      console.log("Server is ready to send emails");
    });

    const mailOptions = {
      from: `Sky Automibiles <${process.env.GMAIL_USER}>`,
      to: `${process.env.GMAIL_USER}, ${to}`,
      subject: `${subject} -  ${phone}`,
      html: `${text}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return { status: false, message: "Failed to send email" };
      }
      console.log("Email sent:", info.response);
      return { status: true, message: "Email sent successfully" };
    });
    return { status: true, message: "Email sent successfully" };
  } catch (err: any) {
    console.error("Error sending email:", err);
    throw new Error(err.message);
  }
};
