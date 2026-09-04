"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { SlideIn } from "@/components/ui/ScrollReveal";

const cortexHref = "/cortex";

export function CortexHeroBanner() {
  return (
    <section aria-label="Cortex Soft Solutions founder initiative">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <SlideIn direction="up" distance={48}>
          <PerspectiveCard>
            <div className="relative overflow-hidden rounded-none border border-emerald-500/20 bg-white/80 p-6 shadow-[0_4px_30px_rgba(16,185,129,0.06)] backdrop-blur-xl dark:bg-neutral-900/80 md:rounded-lg md:p-8">
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.35, 1, 0.35] }}
                transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
              />

              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                    Exclusive Initiative // Cortex Soft Solutions
                  </p>
                  <h2 className="mt-3 max-w-3xl font-serif text-2xl tracking-tight text-neutral-900 dark:text-white md:text-3xl">
                    Empowering Tomorrow&apos;s Founders: Zero Recurring Tech
                    Overhead.
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    Built specifically to eliminate digital barriers for emerging
                    entrepreneurs and startups, with lifetime ownership and zero
                    monthly platform charges.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {[
                      "Custom e-commerce systems & enterprise software",
                      "Mobile apps, advanced SEO & performance optimization",
                      "Growth marketing and a flat 70% launch concession",
                    ].map((benefit) => (
                      <span key={benefit} className="inline-flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex min-w-fit flex-col items-start gap-4 border-l-0 border-emerald-500/20 pt-1 lg:border-l lg:pl-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                      Strictly limited
                    </p>
                    <p className="mt-1 font-serif text-3xl tracking-tight text-neutral-900 dark:text-white">
                      03 <span className="text-neutral-400 dark:text-neutral-600">/</span> 10
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                      Allocated
                    </p>
                  </div>
                  <Link
                    href={cortexHref}
                    className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-900 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.17em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:border-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-emerald-400"
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
