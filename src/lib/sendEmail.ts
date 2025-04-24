// lib/sendEmail.ts
import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from './constants';

export async function sendEmail(to: string, subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or use 'hotmail', 'yahoo', or custom SMTP
    auth: {
      user: EMAIL_USER,          // your Gmail address
      pass: EMAIL_PASS,          // your Gmail app password
    },
  });

  const mailOptions = {
    from: `"Fit Mafia" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent: ', info.response);
  return info;
}
