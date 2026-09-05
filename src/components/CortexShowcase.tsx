"use client";

import Image from "next/image";
import Link from "next/link";

const cortexHref = "/cortex";

export function CortexShowcase() {
  return (
    <section
      aria-labelledby="cortex-showcase-heading"
      className="relative w-full min-h-screen bg-[#F8F9FA] flex flex-col lg:flex-row items-stretch overflow-hidden text-neutral-900"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 relative z-10">
        <div className="max-w-xl">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900">
            Cortex Solutions
          </p>
          <h2
            id="cortex-showcase-heading"
            className="mt-2 font-display text-5xl font-black tracking-tight text-neutral-950 lg:text-7xl"
          >
            Cortex Solutions
          </h2>

          <div className="mt-8">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-900">
              Architecture Features
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-xs font-medium text-neutral-800">
              <span>Enterprise Cloud Core</span>
              <span>Zero Recurring Overhead</span>
              <span>Next.js 15 &amp; Node Stack</span>
              <span>Distributed Systems</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            >
              Inquire Now
            </Link>
            <Link
              href={cortexHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-900 transition hover:border-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full flex items-center justify-center p-6 lg:p-12">
        <div className="relative w-full h-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-white">
          <Image
            alt="Cortex Soft Solutions Leadership"
            className="object-cover object-top transition-transform duration-700 hover:scale-105"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/cortex/image-Picsart-AiImageEnhancer.jpg"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200 shadow-md font-mono text-[11px] uppercase tracking-widest text-neutral-900">
            Leadership // Cortex Soft Solutions
          </div>
        </div>
      </div>
    </section>
  );
}
