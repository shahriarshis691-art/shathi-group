import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { BusinessGrid } from "@/components/BusinessGrid";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <BusinessGrid />
      <ContactSection />
    </main>
  );
}