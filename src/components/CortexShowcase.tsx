"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, Cloud, Plus, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

const cortexHref = "/cortex";

const modules = [
  { label: "Cloud", detail: "99.99% ready", icon: Cloud },
  { label: "AI", detail: "Workflow core", icon: BrainCircuit },
  { label: "Security", detail: "SOC 2 posture", icon: ShieldCheck },
];

export function CortexShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cortex-showcase-heading"
      className="relative flex min-h-screen w-full select-none items-center justify-center overflow-hidden bg-[#F4F5F7] text-neutral-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200/60 md:h-[750px] md:w-[750px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="absolute left-8 top-1/2 z-30 hidden origin-left -translate-y-1/2 -rotate-90 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 md:flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        {"// Enterprise Software Architecture"}
      </div>

      <div className="absolute right-6 top-7 z-30 text-right md:right-10 md:top-10">
        <p className="font-serif text-2xl font-bold text-neutral-900">01 / 05</p>
        <div className="mt-3 flex items-center justify-end gap-2 text-[10px] text-neutral-400" aria-label="Cortex showcase pagination">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
          <span className="ml-3 font-mono text-sm tracking-[0.3em] text-neutral-700" aria-hidden="true">
            ‹ ›
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute left-5 top-[22%] z-10 md:left-[8%] md:top-[19%]">
        <p className="font-display text-7xl font-black leading-none tracking-tight text-white drop-shadow-sm mix-blend-difference md:text-[140px]">
          Cortex
        </p>
        <h2
          id="cortex-showcase-heading"
          className="font-display text-7xl font-black leading-none tracking-tight text-white drop-shadow-sm mix-blend-difference md:text-[140px]"
        >
          Solutions
        </h2>
      </div>

      <ParallaxContainer
        target={sectionRef}
        depth="midground"
        yRange={[-28, 28]}
        scaleRange={[1, 1.04]}
        interactive
        className="absolute left-1/2 top-[45%] z-20 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 sm:h-[380px] sm:w-[380px] md:h-[470px] md:w-[470px]"
        planeClassName="h-full"
        contentClassName="h-full"
      >
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
          animate={shouldReduceMotion ? undefined : { y: [-6, 6, -6] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/cortex-main-logo.png"
            alt="Cortex Soft Solutions"
            fill
            sizes="(min-width: 768px) 470px, 290px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-neutral-900/5" />
        </motion.div>
      </ParallaxContainer>

      <div className="absolute bottom-28 left-6 z-30 max-w-[19rem] md:bottom-32 md:left-[8%]">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
          Architecture Features
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-[11px] text-neutral-600">
          <span>Enterprise Cloud Core</span>
          <span>Zero Recurring Overhead</span>
          <span>Next.js 15 &amp; Node Stack</span>
          <span>Distributed Systems</span>
        </div>
      </div>

      <Link
        href={cortexHref}
        className="absolute right-5 top-[59%] z-30 flex cursor-pointer items-center gap-4 rounded-full border border-white/80 bg-white/70 px-6 py-3.5 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 md:right-[12%] md:top-1/2"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
          <Plus className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900">
          Connect with Cortex
        </span>
      </Link>

      <footer className="absolute inset-x-0 bottom-0 z-20 flex w-full items-center justify-between gap-5 border-t border-neutral-200/80 bg-white/80 px-5 py-4 backdrop-blur-lg sm:px-8">
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto sm:gap-8">
          {modules.map(({ label, detail, icon: Icon }) => (
            <div key={label} className="flex min-w-max items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-neutral-800">
                  {label}
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-wide text-neutral-400">
                  {detail}
                </span>
              </span>
            </div>
          ))}
        </div>
        <Link
          href="#contact"
          className="shrink-0 bg-neutral-900 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:px-5"
        >
          Inquire Now
        </Link>
      </footer>
    </section>
  );
}
