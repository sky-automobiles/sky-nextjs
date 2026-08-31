import nodemailer from "nodemailer";

export const sendEmail = async ({ subject, to, text, phone }: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      await transporter.verify();
      console.log("Server is ready to send emails");
    } catch (error) {
      console.error("Error connecting to email server:", error);
      return { status: false, message: "Failed to connect to email server" };
    }

    const mailOptions = {
      from: `Sky Automibiles <${process.env.GMAIL_USER}>`,
      to: `${process.env.GMAIL_USER}, ${to}`,
      subject: `${subject} -  ${phone}`,
      html: `${text}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      return { status: true, message: "Email sent successfully" };
    } catch (error) {
      console.error("Error sending email:", error);
      return { status: false, message: "Failed to send email" };
    }
  } catch (err: any) {
    console.error("Error sending email:", err);
    throw new Error(err.message);
  }
};
