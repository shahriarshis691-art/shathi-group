"use client";

import { openInquiry } from "@/components/InquiryProvider";
import type { InquiryCategory } from "@/components/InquiryModal";

interface CorporateInquiryButtonProps {
  category?: InquiryCategory;
  className?: string;
  label: string;
}

/** Opens the shared B2B inquiry dialog with an optional, relevant category. */
export function CorporateInquiryButton({
  category = "General Inquiry",
  className,
  label,
}: CorporateInquiryButtonProps) {
  return (
    <button
      type="button"
      onClick={() =>
        openInquiry({
          id: "shathi-group-corporate",
          name: "SHATHI Group — Corporate",
          category,
        })
      }
      className={className}
    >
      {label}
    </button>
  );
}
