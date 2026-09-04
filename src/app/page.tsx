import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { BusinessGrid } from "@/components/BusinessGrid";
import { FounderSection } from "@/components/FounderSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-transparent">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <BusinessGrid />
      <FounderSection />
      <ContactSection />
    </main>
  );
}
