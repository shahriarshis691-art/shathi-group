"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { openInquiry } from "@/components/InquiryProvider";
import { SlideIn } from "@/components/ui/ScrollReveal";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

export function FounderSection() {
  const founderRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={founderRef}
      aria-labelledby="founder-heading"
      id="founder"
      className="bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-20 md:py-28">
        <div className="grid grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-16 items-center">
          <SlideIn direction="left" className="lg:col-span-5">
            <ParallaxContainer
              target={founderRef}
              depth="midground"
              yRange={[-16, 16]}
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:mx-0">
                <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-neutral-300" aria-hidden="true" />
                <div className="relative h-full w-full overflow-hidden bg-neutral-100 shadow-md">
                  <Image
                    src="/founder-image/founder.png"
                    alt="S M SHAHRIAR WALID - Founder & CEO"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 40vw, 48vw"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </ParallaxContainer>
          </SlideIn>

          <SlideIn direction="right" delay={0.12} className="lg:col-span-7">
            <ParallaxContainer
              target={founderRef}
              depth="foreground"
              yRange={[24, -34]}
            >
              <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                <span className="h-[1px] w-6 bg-neutral-300" aria-hidden="true" />
                Meet the Founder &amp; CEO
              </div>

              <h2
                id="founder-heading"
                className="mb-4 font-serif text-[clamp(1.5rem,6vw,3rem)] font-normal leading-[1.02] tracking-tight text-neutral-950 sm:mb-6"
              >
                A visionary approach to building enduring enterprises and modern experiences.
              </h2>

              <p className="mb-6 max-w-xl font-sans text-[11px] leading-relaxed text-neutral-600 sm:mb-10 sm:text-sm md:text-base">
                S M Shahriar Walid is the founder and visionary steering SHATHI Group&apos;s
                diversified portfolio across software engineering, luxury fashion, precision
                horology, architectural ceramics, and automotive mobility. His leadership
                philosophy centers on stewardship, long-term value creation, and earning
                client trust through operational excellence and disciplined innovation.
              </p>

              <div className="grid grid-cols-3 gap-3 border-t border-neutral-200 pt-5 sm:gap-6 sm:pt-8">
                <div>
                  <p className="font-serif text-xl font-normal tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                    $10M+
                  </p>
                  <p className="mt-1 block font-mono text-[8px] uppercase tracking-[0.08em] text-neutral-500 sm:text-[10px] sm:tracking-[0.2em]">
                    Enterprise Volume
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl font-normal tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                    4+
                  </p>
                  <p className="mt-1 block font-mono text-[8px] uppercase tracking-[0.08em] text-neutral-500 sm:text-[10px] sm:tracking-[0.2em]">
                    Diversified Brands
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl font-normal tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                    100+
                  </p>
                  <p className="mt-1 block font-mono text-[8px] uppercase tracking-[0.08em] text-neutral-500 sm:text-[10px] sm:tracking-[0.2em]">
                    Clients &amp; Partners
                  </p>
                </div>
              </div>

              <a
                href="#founder-story"
                className="mt-6 inline-flex items-center gap-2 border-b border-neutral-950 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:text-neutral-600"
              >
                Read Full Leadership Story
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() =>
                    openInquiry({
                      id: "founder-desk",
                      name: "SHATHI Group — Founder Desk",
                      category: "Strategic Partnership",
                    })
                  }
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-950 px-4 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 sm:px-6 sm:text-[11px] sm:tracking-[0.16em] md:text-xs border border-neutral-900"
                >
                  Connect Directly
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </ParallaxContainer>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
