import Image from "next/image";
import { Maximize2 } from "lucide-react";

const shisUrl = "https://www.shisfashion.com";

export function ShisFashionShowcase() {
  return (
    <section
      aria-labelledby="shis-showcase-heading"
      className="relative flex min-h-screen w-full select-none items-center overflow-hidden bg-[#F5F6F8] text-neutral-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.95),transparent_38%)]" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:w-[48%] lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          Contemporary Men&apos;s Apparel // Oversized Essentials
        </p>
        <h2
          id="shis-showcase-heading"
          className="mt-2 font-display text-5xl font-black leading-none tracking-tight text-black md:text-8xl"
        >
          SHIS FASHION
        </h2>

        <a
          href={shisUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center rounded-sm bg-[#FF1818] px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#D90F0F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF1818]"
        >
          Visit Store →
        </a>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full lg:w-[58%]">
        <Image
          src="/shis/shis-editorial-model.png"
          alt="SHIS Fashion oversized streetwear editorial"
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-contain object-right-bottom"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8]/70 to-transparent" />
      </div>

      <div className="absolute right-6 top-24 z-20 flex items-center gap-4 font-mono text-xs tracking-[0.2em] text-neutral-500 md:right-10 md:top-28">
        <span className="text-neutral-900">01</span>
        <span>/</span>
        <span>05</span>
        <span className="ml-2 text-base text-neutral-700" aria-hidden="true">‹ ›</span>
      </div>

      <a
        href={shisUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore SHIS jacket details"
        className="absolute right-[25%] top-[43%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/35 text-lg text-neutral-900 shadow-sm backdrop-blur-md transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
      >
        <span className="absolute h-full w-full animate-ping rounded-full border border-white/70" aria-hidden="true" />
        <span className="relative">+</span>
      </a>
      <a
        href={shisUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore SHIS hood details"
        className="absolute right-[12%] top-[32%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/35 text-base text-neutral-900 shadow-sm backdrop-blur-md transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
      >
        <span className="absolute h-full w-full animate-pulse rounded-full border border-white/70" aria-hidden="true" />
        <span className="relative">+</span>
      </a>

      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-5 border-t border-neutral-200/80 bg-[#F5F6F8]/80 px-5 py-4 font-mono text-[10px] tracking-wide text-neutral-500 backdrop-blur-sm md:px-10">
        <span className="hidden sm:block">© Shathi Group / Shis Fashion</span>
        <span className="truncate">Home / Subsidiaries / Apparel / Shis Fashion</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-300 bg-white text-neutral-700" aria-label="Fullscreen view">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </footer>
    </section>
  );
}
