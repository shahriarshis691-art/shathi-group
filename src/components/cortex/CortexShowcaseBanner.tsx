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
      className={`relative w-full min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-20 sm:pt-24 ${onOpenInquiry ? "pb-52 md:pb-16" : "pb-12 md:pb-16"} px-6 sm:px-10 lg:px-16 overflow-hidden bg-white ${className ?? ""}`}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
        
        {/* Left Column: Typography & Contact */}
        <div className="flex flex-col justify-center text-left z-10">
          <span className="font-sans text-sm sm:text-base md:text-lg font-normal text-neutral-800 tracking-tight mb-2">
            Build Your
          </span>
          <h1
            id="build-your-website"
            className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 leading-[1.05] mb-6"
          >
            Website
          </h1>
          
          <div className="border-l-2 border-neutral-300 pl-4 mb-6">
            <p className="text-sm sm:text-base text-neutral-600 max-w-sm leading-relaxed">
              We create professional websites that grow your brand.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+8801979614216"
              className="inline-flex min-h-11 items-center font-mono text-[10px] font-semibold text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-xs"
            >
              +880 1979614216
            </a>
            <a
              href={directContacts.corporate.href}
              className="inline-flex min-h-11 items-center break-all font-mono text-[10px] text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-xs"
            >
              {directContacts.corporate.email}
            </a>
            <a
              href={directContacts.cortex.href}
              className="inline-flex min-h-11 items-center break-all font-mono text-[10px] text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-xs"
            >
              {directContacts.cortex.email}
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual */}
        <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] lg:h-[600px] flex items-center justify-center md:justify-end">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <Image
              src="/cortex/build-your-vision.png"
              alt="CORTEXIO engineer working on a laptop with a live product interface"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              decoding="async"
            />
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
              CORTEXIO Email
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
