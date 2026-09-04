import { NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  companyName: string;
  message: string;
  inquiryType: string;
  concern: string;
}

export interface ContactErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

export interface ContactSuccessResponse {
  success: true;
  message: string;
  submissionId?: string;
}

type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Record<string, string>; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: unknown): ValidationResult {
  if (typeof body !== "object" || body === null) {
    return {
      ok: false,
      errors: {},
      message: "Invalid request body. Expected a JSON object.",
    };
  }

  const b = body as Record<string, unknown>;
  const errors: Record<string, string> = {};

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const companyName = typeof b.companyName === "string" ? b.companyName.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  const inquiryType = typeof b.inquiryType === "string" ? b.inquiryType.trim() : "";
  const concern = typeof b.concern === "string" ? b.concern.trim() : "";

  if (!name) {
    errors.name = "Full name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name must be under 80 characters.";
  }

  if (!email) {
    errors.email = "Corporate email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!companyName) {
    errors.companyName = "Company name is required.";
  }

  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 2000) {
    errors.message = "Message must be under 2000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
      message: "Validation failed. Please correct the fields below.",
    };
  }

  return {
    ok: true,
    data: { name, email, phone, companyName, message, inquiryType, concern },
  };
}

async function sendEmail(data: ContactPayload) {
  const provider = process.env.EMAIL_PROVIDER;

  if (provider === "resend") {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM ?? "SHATHI Group <noreply@shathigroup.com>",
        to: process.env.EMAIL_TO ?? "info@shathigroup.com",
        replyTo: data.email,
        subject: `New B2B Inquiry: ${data.inquiryType} — ${data.companyName}`,
        html: `
          <h1>New Corporate Inquiry</h1>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
          <p><strong>Company:</strong> ${escapeHtml(data.companyName)}</p>
          <p><strong>Inquiry Type:</strong> ${escapeHtml(data.inquiryType)}</p>
          <p><strong>Subsidiary:</strong> ${escapeHtml(data.concern)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(data.message)}</p>
        `,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Resend error ${res.status}: ${text}`);
    }
  } else if (provider === "nodemailer") {
    // Optional: install `npm install nodemailer @types/nodemailer` and configure SMTP env vars.
    // const nodemailer = await import("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? "587"),
    //   secure: process.env.SMTP_SECURE === "true",
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM ?? "SHATHI Group <noreply@shathigroup.com>",
    //   to: process.env.EMAIL_TO ?? "info@shathigroup.com",
    //   replyTo: data.email,
    //   subject: `New B2B Inquiry: ${data.inquiryType} — ${data.companyName}`,
    //   text: `...`,
    // });
    throw new Error("nodemailer provider selected but package is not installed");
  } else {
    console.info("[contact] mock email delivery", {
      concern: data.concern,
      inquiryType: data.inquiryType,
      companyName: data.companyName,
      name: data.name,
      email: data.email,
    });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      const response: ContactErrorResponse = {
        success: false,
        message: "Request body must be valid JSON.",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const result = validate(body);

    if (!result.ok) {
      console.warn("[contact] validation failed", {
        errors: result.errors,
        ip: request.headers.get("x-forwarded-for") ?? "unknown",
      });
      const response: ContactErrorResponse = {
        success: false,
        message: result.message,
        errors: result.errors,
      };
      return NextResponse.json(response, { status: 400 });
    }

    const data = result.data;
    const submissionId = crypto.randomUUID();

    console.info("[contact] inquiry received", {
      id: submissionId,
      concern: data.concern,
      inquiryType: data.inquiryType,
      companyName: data.companyName,
      name: data.name,
      email: data.email,
      ip: request.headers.get("x-forwarded-for") ?? "unknown",
      userAgent: request.headers.get("user-agent") ?? "unknown",
    });

    try {
      await sendEmail(data);
    } catch (mailErr) {
      console.error("[/api/contact] email delivery failed", mailErr);
      const response: ContactErrorResponse = {
        success: false,
        message:
          "Your details were received, but we could not queue your message. Please try again later.",
      };
      return NextResponse.json(response, { status: 500 });
    }

    const response: ContactSuccessResponse = {
      success: true,
      message: "Inquiry received. Our team will reach out within one business day.",
      submissionId,
    };
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error("[/api/contact] unhandled error", err);
    const response: ContactErrorResponse = {
      success: false,
      message:
        "Something went wrong while submitting your inquiry. Please try again later.",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
