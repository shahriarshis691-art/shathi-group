import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { BusinessGrid } from "@/components/BusinessGrid";
import { FounderSection } from "@/components/FounderSection";
import { ContactSection } from "@/components/ContactSection";
import { CortexEntryModal } from "@/components/CortexEntryModal";
import { CortexShowcase } from "@/components/CortexShowcase";
import { ShisFashionShowcase } from "@/components/ShisFashionShowcase";
import { XeroxiiShowcase } from "@/components/XeroxiiShowcase";
import { VelorixShowcase } from "@/components/VelorixShowcase";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-transparent">
      <HeroSection />
      <CortexShowcase />
      <ShisFashionShowcase />
      <XeroxiiShowcase />
      <StatsSection />
      <AboutSection />
      <BusinessGrid />
      <VelorixShowcase />
      <FounderSection />
      <ContactSection />
      <CortexEntryModal />
    </main>
  );
}
