"use client";

import { useEffect, useState } from "react";

type InquiryListener = (data: { company?: { id: string; name: string } | null }) => void;

const listeners = new Set<InquiryListener>();

export function openInquiry(company?: { id: string; name: string } | null) {
  listeners.forEach((fn) => fn({ company }));
}

export function closeInquiry() {
  listeners.forEach((fn) => fn({ company: null }));
}

export function useInquiryState() {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedCompany, setPreselectedCompany] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    const handler: InquiryListener = ({ company }) => {
      setPreselectedCompany(company ?? null);
      setIsOpen(Boolean(company));
    };

    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, []);

  return { isOpen, preselectedCompany };
}

export { useInquiryButton } from "@/hooks/useInquiryButton";
