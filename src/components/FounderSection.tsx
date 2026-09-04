"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { openInquiry } from "@/components/InquiryProvider";

export function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      id="founder"
      className="bg-[#F9F7F4]"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto lg:mx-0 w-full max-w-[420px] aspect-[4/5]">
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-neutral-300 pointer-events-none" aria-hidden="true" />
              <div className="relative w-full h-full overflow-hidden bg-neutral-200 shadow-md">
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
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase mb-4">
              <span className="w-6 h-[1px] bg-neutral-400" aria-hidden="true" />
              Meet the Founder &amp; CEO
            </div>

            <h2
              id="founder-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-[1.15] tracking-tight font-normal mb-6"
            >
              A visionary approach to building enduring enterprises and modern experiences.
            </h2>

            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-10 max-w-xl font-sans">
              S M Shahriar Walid is the founder and visionary steering SHATHI Group&apos;s
              diversified portfolio across software engineering, luxury fashion, precision
              horology, architectural ceramics, and automotive mobility. His leadership
              philosophy centers on stewardship, long-term value creation, and earning
              client trust through operational excellence and disciplined innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-neutral-300/70 pt-8">
              <div>
                <p className="text-3xl md:text-4xl font-serif text-neutral-900 font-normal tracking-tight">
                  $10M+
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mt-1 block">
                  Enterprise Volume
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-neutral-900 font-normal tracking-tight">
                  4+
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mt-1 block">
                  Diversified Brands
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-neutral-900 font-normal tracking-tight">
                  100+
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mt-1 block">
                  Clients &amp; Partners
                </p>
              </div>
            </div>

            <a
              href="#founder-story"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-900 hover:text-neutral-600 border-b border-neutral-900 pb-1 mt-6 transition-colors"
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
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
              >
                Connect Directly
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
