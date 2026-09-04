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
      className="bg-[#F9F7F4]"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <SlideIn direction="left" className="lg:col-span-5">
            <ParallaxContainer
              target={founderRef}
              depth="midground"
              yRange={[-16, 16]}
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:mx-0">
                <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-neutral-300" aria-hidden="true" />
                <div className="relative h-full w-full overflow-hidden bg-neutral-200 shadow-md">
                  <Image
                    src="/founder-image/founder.png"
                    alt="S M SHAHRIAR WALID - Founder & CEO"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 420px, 100vw"
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
                <span className="h-[1px] w-6 bg-neutral-400" aria-hidden="true" />
                Meet the Founder &amp; CEO
              </div>

              <h2
                id="founder-heading"
                className="mb-6 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
              >
                A visionary approach to building enduring enterprises and modern experiences.
              </h2>

              <p className="mb-10 max-w-xl font-sans text-sm leading-relaxed text-neutral-600 md:text-base">
                S M Shahriar Walid is the founder and visionary steering SHATHI Group&apos;s
                diversified portfolio across software engineering, luxury fashion, precision
                horology, architectural ceramics, and automotive mobility. His leadership
                philosophy centers on stewardship, long-term value creation, and earning
                client trust through operational excellence and disciplined innovation.
              </p>

              <div className="grid grid-cols-1 gap-6 border-t border-neutral-300/70 pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-serif text-3xl font-normal tracking-tight text-neutral-900 md:text-4xl">
                    $10M+
                  </p>
                  <p className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Enterprise Volume
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-normal tracking-tight text-neutral-900 md:text-4xl">
                    4+
                  </p>
                  <p className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Diversified Brands
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-normal tracking-tight text-neutral-900 md:text-4xl">
                    100+
                  </p>
                  <p className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Clients &amp; Partners
                  </p>
                </div>
              </div>

              <a
                href="#founder-story"
                className="mt-6 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:text-neutral-600"
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
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 md:text-xs"
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
