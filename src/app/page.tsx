import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Story } from "@/components/Story";
import { Ventures } from "@/components/Ventures";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { CortexShowcase } from "@/components/CortexShowcase";
import { VelorixShowcase } from "@/components/VelorixShowcase";
import { ShisFashionShowcase } from "@/components/ShisFashionShowcase";
import { CeravoShowcase } from "@/components/CeravoShowcase";
import {
  DeferredBusinessGrid,
  DeferredContactSection,
  DeferredCortexEntryModal,
  DeferredFounderSection,
  DeferredXeroxiiShowcase,
} from "@/components/HomeDeferredSections";

export default function Home() {
  return (
    <>
      <Navbar homeOnly />
      <main className="overflow-x-clip bg-transparent">
        <Hero />
        <Ventures />
        <Story />
        <CortexShowcase />
        <VelorixShowcase />
        <ShisFashionShowcase />
        <DeferredXeroxiiShowcase />
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
        <DeferredBusinessGrid />
        <DeferredFounderSection />
        <DeferredContactSection />
        <DeferredCortexEntryModal />
      </main>
    </>
  );
}
