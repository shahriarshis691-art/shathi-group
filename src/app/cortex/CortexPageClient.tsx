"use client";

import { CortexShowcaseBanner } from "@/components/cortex/CortexShowcaseBanner";
import { CortexAbout } from "@/components/cortex/CortexAbout";
import { CortexGallery } from "@/components/cortex/CortexGallery";
import { CortexSlider } from "@/components/cortex/CortexSlider";
import { CortexProjectSlider } from "@/components/cortex/CortexProjectSlider";

export function CortexPageClient() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 lg:pt-28 bg-[#F7F8FA] text-[#0A0A0A]">
      <CortexShowcaseBanner />
      <CortexAbout />
      <CortexProjectSlider />
      <CortexGallery />
      <CortexSlider />
    </main>
  );
}
