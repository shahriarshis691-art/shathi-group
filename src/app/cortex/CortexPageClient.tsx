"use client";

import { useInquiryButton } from "@/hooks/useInquiryButton";
import { CortexHero } from "@/components/cortex/CortexHero";
import { CortexShowcaseBanner } from "@/components/cortex/CortexShowcaseBanner";
import { CortexAbout } from "@/components/cortex/CortexAbout";
import { CortexGallery } from "@/components/cortex/CortexGallery";
import { CortexSlider } from "@/components/cortex/CortexSlider";
import { CortexProjectSlider } from "@/components/cortex/CortexProjectSlider";

export function CortexPageClient() {
  const openInquiry = useInquiryButton({
    id: "cortex-softsolutions",
    name: "CORTEXIO Softsolutions",
  });

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A0A0A]">
      <CortexHero onInquiry={openInquiry} />
      <CortexShowcaseBanner />
      <CortexAbout />
      <CortexProjectSlider />
      <CortexGallery />
      <CortexSlider />
    </main>
  );
}
