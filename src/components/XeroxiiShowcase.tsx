"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const watchImage = "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80";

export function XeroxiiShowcase() {
  return (
    <section
      aria-labelledby="xeroxii-showcase-heading"
      className="relative w-full min-h-screen bg-gradient-to-r from-[#EDEDED] via-[#FAFAFA] to-[#E5E7EB] text-neutral-950 overflow-hidden flex items-center justify-center select-none"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 md:h-[620px] md:w-[620px] rounded-full border border-neutral-300">
          <div className="absolute inset-0 border-t border-l border-neutral-300/80" />
          <div className="absolute inset-0 border-b border-r border-neutral-300/80" />
          <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-neutral-300/80 to-transparent" />
          <div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-gradient-to-r from-neutral-300/80 to-transparent" />
          <div className="absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-gradient-to-l from-neutral-300/80 to-transparent" />
          <div className="absolute left-1/2 bottom-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-t from-neutral-300/80 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900" />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04, rotateZ: 1 }}
            className="relative z-20 h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]"
          >
            <Image
              src={watchImage}
              alt="XEROXII Luxury Timepiece"
              fill
              priority
              className="object-contain drop-shadow-2xl"
              sizes="(min-width: 768px) 420px, (min-width: 640px) 340px, 260px"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-between px-6 sm:px-12 md:px-20 pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-[160px] font-medium tracking-tight text-black/90">
          XERO
        </span>
        <span className="text-6xl sm:text-8xl md:text-[160px] font-medium tracking-tight text-black/90">
          XII
        </span>
      </div>

      <div className="absolute left-6 bottom-10 z-30 sm:left-12 md:left-20">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
          MODEL // CHRONOMETER
        </p>
        <p className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
          XEROXII 146GR
        </p>
        <p className="font-mono text-[11px] text-neutral-500 mt-1">
          Sapphire Crystal • Precision Automatic • Surgical Steel 316L
        </p>
        <a
          href="https://www.xeroxii.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-950 text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 shadow-xl mt-4"
        >
          Discover Timepiece
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
