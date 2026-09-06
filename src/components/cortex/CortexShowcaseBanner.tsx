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
      className={`relative w-full min-h-0 pt-20 sm:pt-24 pb-10 px-6 sm:px-12 bg-white ${className ?? ""}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-h-[500px]">
        
        {/* Left Column: Heading & Content */}
        <div className="flex flex-col justify-center">
          <span className="font-sans text-sm md:text-base text-neutral-800 mb-2 block">
            Build Your
          </span>
          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-5">
            Website
          </h1>
          <div className="border-l-2 border-neutral-300 pl-4 mb-6">
            <p className="text-sm md:text-base text-neutral-600 max-w-sm leading-relaxed">
              We create professional websites that grow your brand.
            </p>
          </div>
          <div>
            <a 
              href="tel:+8801979614216" 
              className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors inline-block"
            >
              +880 1979614216
            </a>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-sm overflow-hidden flex items-center justify-end">
          <Image alt="CORTEXIO Architecture" className="object-cover object-center rounded-sm" fill priority sizes="(max-width: 768px) 100vw, 50vw" src="/cortex/build-your-vision.png"/>
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
