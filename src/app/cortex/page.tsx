"use client";

import { useInquiryButton } from "@/hooks/useInquiryButton";
import { CortexHero } from "@/components/cortex/CortexHero";
import { CortexAbout } from "@/components/cortex/CortexAbout";
import { CortexGallery } from "@/components/cortex/CortexGallery";
import { CortexSlider } from "@/components/cortex/CortexSlider";

export default function CortexPage() {
  const openInquiry = useInquiryButton({
    id: "cortex-softsolutions",
    name: "CORTEX Soft Solutions",
  });

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A0A0A]">
      <CortexHero onInquiry={openInquiry} />
      <CortexAbout />
      <CortexGallery />
      <CortexSlider />
    </main>
  );
}
