import { NextResponse } from "next/server";

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
  console.log("[B2B Inquiry Received]:", payload);

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

  return NextResponse.json(
    {
      success: true,
      message: "Inquiry received successfully. Our corporate team will reach out shortly.",
    },
    { status: 200 }
  );
}
