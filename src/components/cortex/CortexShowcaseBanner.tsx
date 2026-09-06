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
      className={`relative w-full overflow-hidden pt-16 sm:pt-20 pb-4 px-4 sm:px-8 lg:px-12 flex items-center min-h-[55vh] sm:min-h-[70vh] bg-white ${className ?? ""}`}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-12 items-center gap-2 sm:gap-6">
        
        {/* Left Column: Fixed Left Typography (5 cols on mobile, 5 cols on desktop) */}
        <div className="col-span-5 sm:col-span-5 flex flex-col justify-center z-10 select-none pl-1 sm:pl-4">
          <span className="font-sans text-[11px] sm:text-base md:text-xl font-normal text-neutral-800 tracking-tight mb-1">
            Build Your
          </span>
          <h1 className="font-sans text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.05] mb-2 sm:mb-4">
            Website
          </h1>
          <div className="border-l border-neutral-400 pl-2 sm:pl-3 mb-2 sm:mb-4">
            <p className="text-[9px] sm:text-xs md:text-sm text-neutral-600 leading-tight max-w-[200px] sm:max-w-xs">
              We create professional websites that grow your brand.
            </p>
          </div>
          <a 
            href="tel:+8801979614216" 
            className="font-mono text-[9px] sm:text-xs md:text-sm font-semibold tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            +880 1979614216
          </a>
        </div>

        {/* Right Column: Panoramic Figure (7 cols on mobile, 7 cols on desktop) */}
        <div className="col-span-7 sm:col-span-7 relative h-[260px] sm:h-[420px] md:h-[500px] flex items-center justify-end overflow-hidden">
          <div className="relative w-full h-full">
            <Image alt="CORTEXIO Website Architecture" className="object-cover object-center rounded-sm" fill priority sizes="(max-width: 768px) 60vw, 50vw" src="/cortex/build-your-vision.png"/>
          </div>
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
