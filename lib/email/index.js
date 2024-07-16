import {
  MAIL_FROM,
  SMTP_HOST,
  SMTP_PASSWORD,
  SMTP_PORT,
  SMTP_USER,
  WEBAPP_URL,
} from "@/constants";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { createToken } from "../jwt";
import { ForgotPasswordEmail } from "./components/forgot-password-email";
import { EmailTemplate } from "./components/general/email-template";

export const IS_SMTP_CONFIGURED = Boolean(SMTP_HOST && SMTP_PORT);

/**
 * 
 * data = {
 * to: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html: string;
 * } 
 */
export const sendEmail = async (data) => {
  if (IS_SMTP_CONFIGURED) {
    const transproter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
      logger: true, // TODO: remove this in production
      debug: true, // TODO: remove this in production
    });

    const emailDefaults = {
      from: `Fashion Store <${MAIL_FROM}>`,
    };

    await transproter.sendMail({ ...emailDefaults, ...data });
  } else {
    console.error(
      `Could not Email :: SMTP not configured :: ${emailData.subject}`
    );
  }
};

export const sendForgotPasswordEmail = async (user) => {
  const token = createToken(user.id, user.email, { expiresIn: "1d" });
  const verifyLink = `${WEBAPP_URL}/forgot-password/reset?token=${encodeURIComponent(
    token
  )}`;
  await sendEmail({
    to: user.email,
    subject: "Reset your password",
    html: render(
      EmailTemplate({ content: ForgotPasswordEmail({ verifyLink }) })
    ),
  });
};
