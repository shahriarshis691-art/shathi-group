"use client";

import Image from "next/image";
import { directContacts } from "@/data/contact";

/** Primary hero section for the CORTEXIO detail page. */
export function CortexShowcaseBanner({
  className,
  onOpenInquiry,
}: {
  className?: string;
  onOpenInquiry?: () => void;
}) {
  return (
    <section
      id="hero"
      aria-labelledby="build-your-website"
      className={`relative w-full bg-white overflow-hidden pt-12 sm:pt-16 pb-8 min-h-[420px] sm:min-h-[580px] md:min-h-[640px] flex items-center ${className ?? ""}`}
    >
      {/* Background Panoramic Asset */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-end">
        <div className="relative w-full md:w-[75%] lg:w-[65%] h-full">
          <Image alt="Build Your Website" className="object-cover object-right select-none" fill priority sizes="100vw" src="/cortex/build-your-vision.png"/>
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Overlay Content Pinned to Left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-[280px] sm:max-w-md md:max-w-lg">
          <span className="font-sans text-sm sm:text-lg md:text-xl font-normal text-neutral-800 tracking-tight block mb-1">
            Build Your
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.05] mb-4">
            Website
          </h1>
          <div className="border-l-2 border-neutral-300 pl-3 mb-4">
            <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-snug">
              We create professional websites that grow your brand.
            </p>
          </div>
          <a
            href="tel:+8801979614216"
            className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors inline-block"
          >
            +880 1979614216
          </a>
        </div>
      </div>

      {onOpenInquiry && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="grid grid-cols-2 items-stretch">
            <a
              href="tel:+8801979614216"
              className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-b border-r border-neutral-800 px-2 py-2 font-mono text-xs font-semibold tracking-wider text-white transition-colors hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              Call
              <span className="text-[10px] font-normal tracking-normal text-neutral-400">
                +880 1979614216
              </span>
            </a>
            <a
              href="https://wa.me/8801979614216?text=Hello%20CORTEXIO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-b border-neutral-800 px-2 py-2 font-mono text-xs font-semibold tracking-wider text-white transition-colors hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              WhatsApp
            </a>
            <a
              href={directContacts.corporate.href}
              className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-b border-r border-neutral-800 px-2 py-2 font-mono text-[10px] font-semibold tracking-wider text-white transition-colors hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              Founder Email
              <span className="break-all text-center text-[9px] font-normal tracking-normal text-neutral-400">
                {directContacts.corporate.email}
              </span>
            </a>
            <a
              href={directContacts.cortex.href}
              className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-b border-neutral-800 px-2 py-2 font-mono text-[10px] font-semibold tracking-wider text-white transition-colors hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              MD & Cybersecurity
              <span className="break-all text-center text-[9px] font-normal tracking-normal text-neutral-400">
                {directContacts.cortex.email}
              </span>
            </a>
            <button
              type="button"
              onClick={onOpenInquiry}
              className="col-span-2 flex min-h-12 flex-col items-center justify-center gap-0.5 px-3 py-2 font-mono text-xs font-semibold tracking-wider text-white transition-colors hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              Start a Consultation
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
