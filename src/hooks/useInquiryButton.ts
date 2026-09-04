"use client";

import { useCallback } from "react";
import { openInquiry } from "@/components/InquiryProvider";

export function useInquiryButton(company?: { id: string; name: string } | null) {
  return useCallback(() => openInquiry(company), [company]);
}
