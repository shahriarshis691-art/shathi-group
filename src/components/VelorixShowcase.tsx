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
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#F2F4F7] via-[#E8ECF2] to-[#DDE2EA] px-6 py-12 text-neutral-950 select-none sm:px-12 lg:px-20 border-b border-neutral-300"
    >
      <h2 id="velorix-showcase-heading" className="sr-only">
        Velorix Motors — Autonomous Mobility Architecture
      </h2>
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-75"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(220,225,235,0.4) 70%)",
        }}
        aria-hidden="true"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display text-7xl font-black tracking-tight text-neutral-300/80 sm:text-9xl md:text-[160px]"
      >
        VELORIX
      </span>

      <header className="relative z-10 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-500">
          <span
            className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] animate-pulse"
            aria-label="active"
          />
          <span>{"// AUTONOMOUS MOBILITY ARCHITECTURE"}</span>
        </span>
        <span className="font-mono text-xs font-bold text-neutral-800 tracking-widest">
          MODEL // SPEEDSTER 01
        </span>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 items-center justify-center">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          whileHover={{ scale: 1.03, rotateZ: 0.5 }}
          className="relative flex h-[340px] w-full items-center justify-center sm:h-[420px] md:h-[500px]"
        >
          <Image
            src="/velorix/velorix-studio.png"
            alt="Velorix EX-01 autonomous electric speedster"
            fill
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 blur-sm"
          style={{
            width: "36rem",
            height: "4rem",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
          {performanceSpecs.map((spec) => (
            <div key={spec.label} className="flex flex-col items-center sm:items-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                {spec.label}
              </span>
              <span className="font-sans text-2xl font-black sm:text-3xl text-neutral-950">
                {spec.value}
              </span>
              <span className="font-mono text-[10px] text-neutral-500">
                {spec.sub}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/velorix"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Explore vehicle →
          </Link>
          <a
            href="https://www.velorixmotors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-neutral-400 bg-white/80 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-950 backdrop-blur-md transition-all hover:bg-neutral-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Visit website ↗
          </a>
        </div>
      </footer>
    </section>
  );
}
