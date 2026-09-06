import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { BusinessGrid } from "@/components/BusinessGrid";
import { FounderSection } from "@/components/FounderSection";
import { ContactSection } from "@/components/ContactSection";
import { CortexEntryModal } from "@/components/CortexEntryModal";
import { CortexShowcase } from "@/components/CortexShowcase";
import { VelorixShowcase } from "@/components/VelorixShowcase";
import { ShisFashionShowcase } from "@/components/ShisFashionShowcase";
import { XeroxiiShowcase } from "@/components/XeroxiiShowcase";
import { CeravoShowcase } from "@/components/CeravoShowcase";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-transparent">
      <HeroSection />
      <CortexShowcase />
      <VelorixShowcase />
      <ShisFashionShowcase />
      <XeroxiiShowcase />
      <CeravoShowcase />
      <StatsSection />
      <AboutSection />
      <section id="businesses" className="w-full pt-20 pb-12 sm:pt-28 sm:pb-16 px-6 text-center bg-white flex flex-col items-center justify-center">
        <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3 block">
          Portfolio & Subsidiaries
        </span>
        <h2 id="businesses-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-neutral-900 tracking-tight">
          Our Businesses
        </h2>
        <div className="w-12 h-[1px] bg-neutral-300 mt-6" />
      </section>
      <BusinessGrid />
      <FounderSection />
      <ContactSection />
      <CortexEntryModal />
    </main>
  );
}
