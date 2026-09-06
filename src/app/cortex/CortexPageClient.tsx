"use client";

import dynamic from "next/dynamic";
import { DeferredSection } from "@/components/DeferredSection";
import { CortexShowcaseBanner } from "@/components/cortex/CortexShowcaseBanner";

const CortexAbout = dynamic(
  () => import("@/components/cortex/CortexAbout").then((module) => module.CortexAbout),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[400px] bg-white" />,
  }
);

const CortexProjectSlider = dynamic(
  () =>
    import("@/components/cortex/CortexProjectSlider").then(
      (module) => module.CortexProjectSlider
    ),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[600px] bg-white" />,
  }
);

const CortexGallery = dynamic(
  () => import("@/components/cortex/CortexGallery").then((module) => module.CortexGallery),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[540px] bg-white" />,
  }
);

const CortexSlider = dynamic(
  () => import("@/components/cortex/CortexSlider").then((module) => module.CortexSlider),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[620px] bg-[#EAECEF]" />,
  }
);

export function CortexPageClient() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 lg:pt-28 bg-[#F7F8FA] text-[#0A0A0A]">
      <CortexShowcaseBanner />
      <DeferredSection className="min-h-[400px] bg-white">
        <CortexAbout />
      </DeferredSection>
      <DeferredSection className="min-h-[600px] bg-white">
        <CortexProjectSlider />
      </DeferredSection>
      <DeferredSection className="min-h-[540px] bg-white">
        <CortexGallery />
      </DeferredSection>
      <DeferredSection className="min-h-[620px] bg-[#EAECEF]">
        <CortexSlider />
      </DeferredSection>
    </main>
  );
}
