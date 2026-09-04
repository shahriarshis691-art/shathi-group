"use client";

import { useRef, useEffect, type RefObject } from "react";
import { openInquiry } from "@/components/InquiryProvider";

export function useInquiryButton(company?: { id: string; name: string } | null): RefObject<HTMLButtonElement> {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const handler = () => openInquiry(company);
    button.addEventListener("click", handler);
    return () => button.removeEventListener("click", handler);
  }, [company]);

  return ref;
}
