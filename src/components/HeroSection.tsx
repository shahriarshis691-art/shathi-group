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
        <Image
          src="/download (70).jpg"
          alt="Shathi Group Corporate Architecture"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </ParallaxContainer>

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#080808] z-10" />

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

              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-300 sm:text-lg text-balance">
                A diversified portfolio of trusted businesses — built on integrity,
                driven by innovation, and focused on long-term value.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Partner With Us
                </a>
                <a
                  href="#businesses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
