import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.error("[Resend] Missing RESEND_API_KEY environment variable.");
}

let resendInstance: Resend | null = null;

try {
  resendInstance = new Resend(RESEND_API_KEY);
} catch (error) {
  console.error("[Resend] Failed to initialize client:", error);
}

export { resendInstance as resend };
