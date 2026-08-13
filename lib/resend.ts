import { Resend } from "resend";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email service is not configured.");
  return new Resend(apiKey);
}

export function getEmailConfig() {
  const from = process.env.RESEND_FROM_EMAIL;
  const replyTo = process.env.RESEND_REPLY_TO;
  if (!from || !replyTo) {
    throw new Error("Verified sender configuration is incomplete.");
  }
  return { from, replyTo };
}
