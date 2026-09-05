import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resendInstance = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export { resendInstance as resend };
