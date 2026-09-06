"use client";

import { useRef } from "react";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { CorporateProfileButton } from "./CorporateProfileButton";
import Image from "next/image";
import { SlideIn } from "@/components/ui/ScrollReveal";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
    >
      <ParallaxContainer
        target={heroRef}
        depth="background"
        className="pointer-events-none absolute inset-0 -z-10"
        planeClassName="h-full"
        contentClassName="relative h-full"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
          <Image
            alt="Shathi Group Corporate Overview"
            className="object-cover object-center scale-100"
            fill
            priority
            sizes="100vw"
            src="/hero-image/hero-architecture-v2.png"
          />

          {/* Balanced corporate scrim for high text contrast */}
          <div className="absolute inset-0 bg-neutral-950/50 backdrop-brightness-90" />
        </div>
      </ParallaxContainer>

      <div className="relative z-20 w-full">
        <div className="container-corporate">
          <SlideIn direction="left" className="max-w-3xl">
            <ParallaxContainer target={heroRef} depth="foreground" yRange={[-18, 32]}>
              <div className="flex items-center gap-3 text-neutral-300">
                <Building2 className="h-8 w-8" aria-hidden />
                <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                  SHATHI Group
                </span>
              </div>

              <h1
                id="hero-heading"
                className="mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
              >
                SHATHI Group of Companies
              </h1>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Partner With Us
                </a>
                <a
                  href="#businesses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900 bg-white px-8 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-neutral-950 backdrop-blur-sm transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                >
                  Explore Our Brands
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>

              <div className="mt-10">
                <CorporateProfileButton />
              </div>
            </ParallaxContainer>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
