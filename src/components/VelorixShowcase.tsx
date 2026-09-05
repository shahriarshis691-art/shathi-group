"use client";

import { useRef } from "react";
import Image from "next/image";
import { Gauge, MoveUpRight } from "lucide-react";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

const velorixUrl = "https://www.velorix.cc";

export function VelorixShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="velorix-showcase-heading"
      className="relative flex min-h-screen w-full flex-col overflow-hidden lg:flex-row"
    >
      <div className="relative flex min-h-[68svh] flex-col overflow-hidden bg-white px-6 py-8 text-black sm:px-10 lg:min-h-screen lg:basis-[70%] lg:px-12 lg:py-10">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:64px_64px]" aria-hidden="true" />
        <p className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-serif text-[20vw] tracking-[0.12em] text-neutral-100" aria-hidden="true">
          V
        </p>

        <header className="relative z-10 flex flex-col items-center text-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black font-serif text-lg tracking-tight">
            V
          </span>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">
            High Performance Automotive
          </p>
          <h2
            id="velorix-showcase-heading"
            className="mt-2 font-serif text-3xl uppercase tracking-[0.2em] text-black md:text-5xl"
          >
            Velorix Motors
          </h2>
        </header>

        <div className="relative z-10 min-h-[280px] flex-1">
          <ParallaxContainer
            target={sectionRef}
            depth="midground"
            yRange={[-24, 28]}
            scaleRange={[1, 1.08]}
            interactive
            className="absolute inset-0"
            planeClassName="h-full"
            contentClassName="h-full"
          >
            <div className="relative h-full w-full">
              <Image
                src="/velorix/velorix-studio.png"
                alt="Velorix black high-performance coupe"
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-contain object-center"
              />
            </div>
          </ParallaxContainer>
        </div>

        <div className="relative z-10 flex justify-center pt-5">
          <a
            href={velorixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Explore Velorix →
          </a>
        </div>
      </div>

      <aside className="flex min-h-[32rem] flex-col justify-between border-l border-neutral-800 bg-[#0B0C0E] p-8 text-white md:p-12 lg:min-h-screen lg:basis-[30%]">
        <div>
          <p className="border-l-2 border-red-600 pl-3 font-mono text-xs uppercase tracking-widest text-neutral-300">
            Unleash Pure Dynamism
          </p>
          <p className="mt-4 text-xs leading-relaxed text-neutral-400">
            Velorix brings performance, precision engineering, and bespoke
            craftsmanship into one uncompromising grand-touring experience.
            Every surface is tuned for response; every detail is built to make
            the road feel entirely yours.
          </p>
        </div>

        <div className="my-10 border border-white/10 bg-white/[0.035] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Dynamic telemetry
              </p>
              <p className="mt-2 font-serif text-xl tracking-wide text-white">
                Velocity, refined.
              </p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-red-500">
              <Gauge className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-red-600 via-white/30 to-transparent" />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            Bespoke performance configuration
          </p>
        </div>

        <footer className="space-y-6">
          <div className="flex items-center justify-between border-t border-white/10 pt-5">
            <span className="font-mono text-xs tracking-[0.2em] text-neutral-300">
              01 <span className="text-neutral-600">/</span> 05
            </span>
            <span className="flex items-center gap-4 font-mono text-lg text-neutral-500" aria-label="Showcase navigation">
              <span aria-hidden="true">‹</span>
              <span className="text-white" aria-hidden="true">›</span>
            </span>
          </div>
          <a
            href={velorixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-neutral-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
          >
            Configure Velorix
            <MoveUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </footer>
      </aside>
    </section>
  );
}
