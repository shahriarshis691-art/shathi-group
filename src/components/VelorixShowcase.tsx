"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const performanceSpecs = [
  { label: "ACCELERATION", value: "1.9s", sub: "0-100 km/h" },
  { label: "PEAK OUTPUT", value: "1,200 HP", sub: "Dual Motor Vectoring" },
  { label: "RANGE ESTIMATE", value: "680 KM", sub: "Solid-State Cell" },
];

export function VelorixShowcase() {
  return (
    <section
      aria-labelledby="velorix-showcase-heading"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden border-b border-neutral-300 bg-gradient-to-b from-[#F3F5F8] via-[#E9EDF3] to-[#DDE2EA] px-6 py-12 text-neutral-950 select-none sm:px-12 lg:px-20"
    >
      <h2 id="velorix-showcase-heading" className="sr-only">
        Velorix Motors — Autonomous Mobility Architecture
      </h2>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.95)_0%,rgba(225,230,240,0.3)_65%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none"
      >
        <span className="font-sans text-8xl font-black uppercase tracking-tighter text-neutral-300/60 sm:text-[140px] md:text-[200px] lg:text-[240px]">
          VELORIX
        </span>
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <div className="z-10 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] animate-pulse" />
          {"// AUTONOMOUS MOBILITY ARCHITECTURE"}
        </div>
        <div className="z-10 font-mono text-xs font-bold uppercase tracking-widest text-neutral-800">
          MODEL // SPEEDSTER 01
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 items-center justify-center">
        <Link href="/velorix" aria-label="Explore the Velorix vehicle platform" className="group relative block h-[320px] w-full max-w-5xl sm:h-[420px] md:h-[500px]">
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, rotateZ: 0.5 }}
            className="relative flex h-full w-full items-center justify-center"
          >
            <Image
              src="/velorix/velorix-hero.png"
              alt="Velorix Speedster GT Hypercar"
              fill
              priority
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-6 h-8 w-3/4 rounded-full bg-black/15 blur-2xl" />
          </motion.div>
        </Link>
      </div>

      <footer className="relative z-10 flex flex-col items-start justify-between gap-8 border-t border-neutral-300/70 pt-8 md:flex-row md:items-end">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-14">
          {performanceSpecs.map((spec) => (
            <div key={spec.label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                {spec.label}
              </p>
              <h4 className="mt-1 font-sans text-2xl font-black text-neutral-950 sm:text-3xl">
                {spec.value}
              </h4>
              <p className="mt-0.5 font-mono text-[11px] text-neutral-400">
                {spec.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center gap-3 md:w-auto">
          <Link
            href="/velorix"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Explore specs →
          </Link>
        </div>
      </footer>
    </section>
  );
}
