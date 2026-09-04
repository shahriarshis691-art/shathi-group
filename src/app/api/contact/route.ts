import { NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  concern: string;
  message: string;
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
  const concern = typeof b.concern === "string" ? b.concern.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (!name) {
    errors.name = "Full name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name must be under 80 characters.";
  }

  if (!email) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!concern) {
    errors.concern = "Please select a subsidiary or service.";
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

  return { ok: true, data: { name, email, concern, message } };
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
      const response: ContactErrorResponse = {
        success: false,
        message: result.message,
        errors: result.errors,
      };
      return NextResponse.json(response, { status: 400 });
    }

    const data = result.data;

    // In production, deliver the email here (e.g. Resend / SMTP / SendGrid).
    // A delivery failure MUST resolve to 500 so the client can surface it.
    try {
      // await sendContactEmail(data);
      const submissionId = crypto.randomUUID();
      console.info("[contact] submission queued", {
        id: submissionId,
        name: data.name,
        email: data.email,
        concern: data.concern,
      });
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
      message:
        "Your message has been sent. We will be in touch within one business day.",
    };
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.error("[/api/contact] unhandled error", err);
    const response: ContactErrorResponse = {
      success: false,
      message:
        "Something went wrong while submitting your message. Please try again later.",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
