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
      <BusinessGrid />
      <FounderSection />
      <ContactSection />
      <CortexEntryModal />
    </main>
  );
}
