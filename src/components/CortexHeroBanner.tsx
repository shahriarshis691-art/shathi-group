"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { SlideIn } from "@/components/ui/ScrollReveal";

const cortexHref = "/companies/cortex-softsolutions";

export function CortexHeroBanner() {
  return (
    <section aria-label="CORTEXIO Softsolutions founder initiative" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <SlideIn direction="up" distance={48}>
          <PerspectiveCard>
            <div className="relative overflow-hidden rounded-none border border-neutral-200 bg-white p-6 md:rounded-none md:p-8">
              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Exclusive Initiative // CORTEXIO Softsolutions
                  </p>
                  <h2 className="mt-3 max-w-3xl font-serif text-2xl tracking-tight text-neutral-950 md:text-3xl">
                    Empowering Tomorrow&apos;s Founders: Zero Recurring Tech
                    Overhead.
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
                    Built specifically to eliminate digital barriers for emerging
                    entrepreneurs and startups, with lifetime ownership and zero
                    monthly platform charges.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs leading-relaxed text-neutral-600">
                    {[
                      "Custom e-commerce systems & enterprise software",
                      "Mobile apps, advanced SEO & performance optimization",
                      "Growth marketing and a flat 70% launch concession",
                    ].map((benefit) => (
                      <span key={benefit} className="inline-flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-neutral-900" aria-hidden="true" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex min-w-fit flex-col items-start gap-4 border-l-0 border-neutral-200 pt-1 lg:border-l lg:pl-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      Strictly limited
                    </p>
                    <p className="mt-1 font-serif text-3xl tracking-tight text-neutral-950">
                      03 <span className="text-neutral-400">/</span> 10
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      Allocated
                    </p>
                  </div>
                  <Link
                    href={cortexHref}
                    className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-950 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.17em] text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:border-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                  >
                    Claim Founder Privilege
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </PerspectiveCard>
        </SlideIn>
      </div>
    </section>
  );
}
