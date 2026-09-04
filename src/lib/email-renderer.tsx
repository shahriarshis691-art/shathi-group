"use client";

import { renderToStaticMarkup } from "react-dom/server";
import type { B2BInquiryPayload } from "@/app/api/contact/route";
import { AdminInquiryNotification } from "@/components/emails/AdminInquiryNotification";
import { ClientConfirmationEmail } from "@/components/emails/ClientConfirmationEmail";

export function renderAdminNotification(
  payload: B2BInquiryPayload,
  timestamp: string
) {
  return renderToStaticMarkup(
    <AdminInquiryNotification payload={payload} timestamp={timestamp} />
  );
}

export function renderClientConfirmation(
  clientName: string,
  clientEmail: string,
  subsidiary: string,
  timestamp: string
) {
  return renderToStaticMarkup(
    <ClientConfirmationEmail
      clientName={clientName}
      clientEmail={clientEmail}
      subsidiary={subsidiary}
      timestamp={timestamp}
    />
  );
}
