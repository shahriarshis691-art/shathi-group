"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { openInquiry } from "@/components/InquiryProvider";

const pillars = [
  "Strategic Vision",
  "Multi-Sector Governance",
  "Innovation & Design",
  "Global Expansion",
];

export function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      id="founder"
      className="bg-white py-20 sm:py-28"
    >
      <div className="container-corporate">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-amber-700/80 dark:text-amber-500 mb-2">
            Leadership &amp; Vision
          </p>
          <h2
            id="founder-heading"
            className="text-3xl md:text-5xl font-serif font-bold tracking-[0.12em] uppercase text-slate-900 leading-tight"
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

        <article className="mt-12 mx-auto max-w-5xl rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            <div className="md:w-80">
              <div className="relative aspect-[4/5] w-full md:w-80 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                  alt="Editorial portrait of the Founder & Managing Director of SHATHI Group"
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover grayscale"
                  priority={false}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <header className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center px-3 py-1 bg-amber-50 border border-amber-200/60 text-amber-800 text-[10px] font-bold tracking-widest">
                  01
                </span>
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-slate-500">
                  Founder &amp; Managing Director
                </span>
              </header>

              <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-[0.1em] uppercase text-slate-900 mt-4 mb-1">
                Shahin Ahmed
              </h3>
              <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-slate-500 mb-6">
                Founder &amp; Managing Director · Executive Board
              </p>

              <div className="border-t border-slate-200/80 my-4" aria-hidden="true" />

              <p className="font-sans text-slate-600 text-sm md:text-[15px] leading-relaxed">
                Shahin Ahmed founded SHATHI Group with a singular conviction:
                that vertically integrated excellence across lifestyle, horology,
                architecture, technology, and mobility can redefine how modern
                enterprises are built. Under his direction, the group has
                assembled specialist houses — each governed independently, yet
                united by a shared discipline of design, engineering, and
                long-term stewardship. His mandate to every subsidiary is the
                same: lead the category with clarity, craft, and an uncompromising
                standard for the customer.
              </p>

              <ul
                role="list"
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Core leadership pillars"
              >
                {pillars.map((pillar) => (
                  <li key={pillar}>
                    <span className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase border border-slate-200 px-3 py-1.5 rounded-none bg-slate-50 text-slate-700">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-4">
                <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-slate-400">
                  Founder Desk · Directorate
                </span>
                <button
                  type="button"
                  onClick={() =>
                    openInquiry({
                      id: "founder-desk",
                      name: "SHATHI Group — Founder Desk",
                      category: "Corporate Procurement",
                    })
                  }
                  className="group inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-slate-900 transition hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
                >
                  Connect / Direct Inquiry
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