"use client";

import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { CorporateProfileButton } from "./CorporateProfileButton";
import Image from "next/image";
import { SlideIn } from "@/components/ui/ScrollReveal";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-transparent pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-36"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-corporate relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <SlideIn direction="left" className="lg:col-span-6">
            <div className="flex items-center gap-3 text-slate-300">
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

            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-lg text-balance">
              A diversified portfolio of trusted businesses — built on integrity,
              driven by innovation, and focused on long-term value.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-lg transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
          </SlideIn>

          <SlideIn direction="right" delay={0.1} className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-white/5 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-slate-800 shadow-2xl aspect-[4/3] md:aspect-[5/4]">
                <Image
                  src="/founder-image/founder.png"
                  alt="SHATHI Group executive leadership"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
