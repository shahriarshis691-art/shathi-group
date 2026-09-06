import { NextResponse } from "next/server";
import { directContacts } from "@/data/contact";
import { resend } from "@/lib/resend";
import { renderAdminNotification, renderClientConfirmation } from "@/lib/email-renderer";

export interface B2BInquiryPayload {
  fullName: string;
  email: string;
  message: string;
  phone?: string;
  companyName?: string;
  targetSubsidiary?: string;
  inquiryCategory?: string;
}

function readText(
  payload: Partial<B2BInquiryPayload>,
  field: keyof B2BInquiryPayload
) {
  const value = payload[field];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body. Please submit valid JSON." },
      { status: 400 }
    );
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json(
      { success: false, message: "Invalid request body. Please submit an inquiry object." },
      { status: 400 }
    );
  }

  const payload = body as Partial<B2BInquiryPayload>;
  const missingFields = (["fullName", "email", "message"] as const).filter(
    (field) => !readText(payload, field)
  );

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        success: false,
        message: `Missing required field${missingFields.length > 1 ? "s" : ""}: ${missingFields.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(readText(payload, "email"))) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();

  if (!process.env.RESEND_API_KEY || !resend) {
    return NextResponse.json(
      {
        success: false,
        message: `Inquiry delivery is temporarily unavailable. Please email ${directContacts.corporate.email} directly.`,
      },
      { status: 503 }
    );
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || "SHATHI Group <onboarding@resend.dev>";
  const adminTo = process.env.CONTACT_TO_EMAIL || directContacts.corporate.email;

  const validatedPayload = payload as B2BInquiryPayload;

  const adminHtml = renderAdminNotification(validatedPayload, timestamp);

  const clientHtml = renderClientConfirmation(
    validatedPayload.fullName,
    validatedPayload.email,
    validatedPayload.targetSubsidiary || "General Inquiry",
    timestamp
  );

  try {
    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: adminTo,
        subject: `New B2B Inquiry - ${payload.fullName}`,
        html: adminHtml,
      }),
      resend.emails.send({
        from: fromEmail,
        to: validatedPayload.email,
        subject: "Inquiry Received - SHATHI Group",
        html: clientHtml,
      }),
    ]);
  } catch {
    console.error("[Email Send Failed]");
    return NextResponse.json(
      {
        success: false,
        message: "We could not deliver your inquiry. Please try again or email us directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { success: true, message: "Inquiry processed successfully." },
    { status: 200 }
  );
}
