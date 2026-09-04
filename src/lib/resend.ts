import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.error("[Resend] Missing RESEND_API_KEY environment variable.");
}

export const resend = new Resend(RESEND_API_KEY);
