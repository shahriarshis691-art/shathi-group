"use client";

import { useInquiryButton } from "@/hooks/useInquiryButton";
import { CeravoTopBar } from "@/components/ceravo/CeravoTopBar";
import { CeravoHero } from "@/components/ceravo/CeravoHero";
import { CeravoMaterialTriptych } from "@/components/ceravo/CeravoMaterialTriptych";
import { CeravoConsultationFloat } from "@/components/ceravo/CeravoConsultationFloat";

export function CeravoPageClient() {
  const openInquiry = useInquiryButton({
    id: "ceravo-tiles",
    name: "CE R A VO Building Materials",
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F9F9FB] text-neutral-950 selection:bg-neutral-900 selection:text-white">
      <div className="border-l border-neutral-200">
        <div className="border-t border-neutral-200">
          <CeravoTopBar />
        </div>
        <div className="border-t border-neutral-200">
          <CeravoHero onInquiry={openInquiry} />
        </div>
        <div className="border-t border-neutral-200">
          <CeravoMaterialTriptych />
        </div>
      </div>

      <CeravoConsultationFloat onInquiry={openInquiry} />
    </main>
  );
}
