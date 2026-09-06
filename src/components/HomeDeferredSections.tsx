"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { DeferredSection } from "@/components/DeferredSection";

const XeroxiiShowcase = dynamic(
  () => import("@/components/XeroxiiShowcase").then((module) => module.XeroxiiShowcase),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[100svh] bg-neutral-100" />,
  }
);

const BusinessGrid = dynamic(
  () => import("@/components/BusinessGrid").then((module) => module.BusinessGrid),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[720px] bg-white" />,
  }
);

const FounderSection = dynamic(
  () => import("@/components/FounderSection").then((module) => module.FounderSection),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[620px] bg-white" />,
  }
);

const ContactSection = dynamic(
  () => import("@/components/ContactSection").then((module) => module.ContactSection),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[760px] bg-white" />,
  }
);

const CortexEntryModal = dynamic(
  () => import("@/components/CortexEntryModal").then((module) => module.CortexEntryModal),
  { ssr: false }
);

export function DeferredXeroxiiShowcase() {
  return (
    <DeferredSection className="min-h-[100svh] bg-neutral-100">
      <XeroxiiShowcase />
    </DeferredSection>
  );
}

export function DeferredBusinessGrid() {
  return (
    <DeferredSection className="min-h-[720px] bg-white">
      <BusinessGrid />
    </DeferredSection>
  );
}

export function DeferredFounderSection() {
  return (
    <DeferredSection className="min-h-[620px] bg-white">
      <FounderSection />
    </DeferredSection>
  );
}

export function DeferredContactSection() {
  return (
    <DeferredSection className="min-h-[760px] bg-white">
      <ContactSection />
    </DeferredSection>
  );
}

export function DeferredCortexEntryModal() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShouldMount(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return shouldMount ? <CortexEntryModal /> : null;
}
