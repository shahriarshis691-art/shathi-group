"use client";

import { useCallback, useEffect, useState } from "react";
import {
  InquiryModal,
  type InquiryCategory,
} from "@/components/InquiryModal";

export interface InquiryTarget {
  id: string;
  name: string;
  category?: InquiryCategory;
}

type InquiryListener = (target?: InquiryTarget | null) => void;

const listeners = new Set<InquiryListener>();

/** Opens the site-wide B2B inquiry dialog, optionally preselecting a subsidiary or category. */
export function openInquiry(target?: InquiryTarget | null) {
  listeners.forEach((listener) => listener(target));
}

export function closeInquiry() {
  listeners.forEach((listener) => listener(null));
}

/** Mount once in the application shell to service inquiry calls from any CTA. */
export function InquiryProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultSubsidiary, setDefaultSubsidiary] = useState<string>();
  const [defaultCategory, setDefaultCategory] = useState<InquiryCategory>();

  useEffect(() => {
    const handleInquiry: InquiryListener = (target) => {
      setDefaultSubsidiary(target?.name);
      setDefaultCategory(target?.category);
      setIsOpen(target !== null);
    };

    listeners.add(handleInquiry);
    return () => {
      listeners.delete(handleInquiry);
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <InquiryModal
      isOpen={isOpen}
      onClose={handleClose}
      defaultSubsidiary={defaultSubsidiary}
      defaultCategory={defaultCategory}
    />
  );
}