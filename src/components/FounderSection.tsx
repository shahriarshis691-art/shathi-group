"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { openInquiry } from "@/components/InquiryProvider";

const pillars = [
  "Strategic Vision",
  "Multi-Sector Governance",
  "Global Expansion",
  "Enterprise Innovation",
];

export function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      id="founder"
      className="bg-transparent py-20 sm:py-28"
    >
      <div className="container-corporate">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-2">
            Leadership &amp; Vision
          </p>
          <h2
            id="founder-heading"
            className="text-3xl md:text-5xl font-serif font-bold tracking-[0.12em] uppercase text-neutral-900 leading-tight"
          >
            Founder &amp; Executive Leadership
          </h2>
          <div className="w-16 h-[1.5px] bg-slate-300 mx-auto my-4" aria-hidden="true" />
          <p className="font-sans text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Meet the strategic leadership steering SHATHI Group&apos;s diversified
            multi-industry ecosystem — a singular vision unifying lifestyle,
            horology, architecture, technology, and mobility under one exacting
            standard of craft.
          </p>
        </div>

          <article className="mt-12 mx-auto max-w-5xl rounded-2xl border border-slate-300/80 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
                <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4] overflow-hidden rounded-2xl border border-slate-300 shadow-md mx-auto">
                <Image
                  src="/founder-image/founder.png"
                  alt="S M SHAHRIAR WALID - Founder & CEO"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col lg:col-span-7">
              <header className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center px-3 py-1 bg-slate-100 border border-slate-300 text-neutral-700 text-[10px] font-bold tracking-widest">
                  01
                </span>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-slate-500">
                  Executive Directorate
                </span>
              </header>

              <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-[0.1em] uppercase text-neutral-900 mt-4 mb-1">
                S M Shahriar Walid
              </h3>
              <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-slate-500 mb-6">
                Founder &amp; Chief Executive Officer
              </p>

              <div className="border-t border-slate-200/80 my-4" aria-hidden="true" />

              <p className="font-sans text-slate-600 text-sm md:text-[15px] leading-relaxed">
                S M Shahriar Walid is the founder and visionary driving the
                strategic expansion of SHATHI Group. Spearheading a multifaceted
                portfolio spanning high-end contemporary apparel, precision
                horology, architectural ceramics, enterprise software, and
                automotive mobility, he champions a corporate philosophy rooted
                in vertical integration, modern design discipline, and long-term
                value creation. Under his executive direction, SHATHI Group
                continues to bridge industrial reliability with refined consumer
                and enterprise experiences across global markets.
              </p>

              <ul
                role="list"
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Core leadership pillars"
              >
                {pillars.map((pillar) => (
                  <li key={pillar}>
                    <span className="inline-block text-[10px] font-semibold tracking-[0.14em] uppercase border border-slate-300 px-3 py-1.5 bg-[#F1F3F5] text-neutral-700">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-4">
                <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-slate-400">
                  Founder Desk
                </span>
                <button
                  type="button"
                  onClick={() =>
                    openInquiry({
                      id: "founder-desk",
                      name: "SHATHI Group — Founder Desk",
                      category: "Strategic Partnership",
                    })
                  }
                  className="group inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-neutral-900 transition hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
                >
                  Connect Directly
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
