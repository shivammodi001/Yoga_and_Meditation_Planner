import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Yoga Planner" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: message,
    });

    console.log("✅ Email sent successfully to:", to);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
};
