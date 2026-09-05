"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

const cortexHref = "/cortex";

export function CortexShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
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

          <div className="mt-10">
            <ParallaxContainer
              target={sectionRef}
              depth="foreground"
              yRange={[18, -24]}
            >
              <motion.div
                className="relative flex h-48 w-48 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xl sm:h-56 sm:w-56 lg:h-64 lg:w-64"
                animate={
                  shouldReduceMotion
                    ? { y: 0, rotateX: 0, rotateY: 0 }
                    : { y: [-8, 8, -8], rotateX: [0, 4, 0], rotateY: [-5, 5, -5] }
                }
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotateZ: 2 }}
                style={{ transformPerspective: 1000, willChange: "transform" }}
              >
                <Image
                  src="/cortex-main-logo.png"
                  alt="Cortex Soft Solutions"
                  width={320}
                  height={320}
                  priority
                  className="h-3/4 w-3/4 object-contain drop-shadow-xl"
                />
                <Link
                  href={cortexHref}
                  className="absolute -right-4 -top-4 flex items-center gap-3 rounded-full border border-neutral-200 bg-white/90 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-neutral-950 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 md:-right-8 md:top-6"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  Connect with Cortex
                </Link>
              </motion.div>
            </ParallaxContainer>
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
