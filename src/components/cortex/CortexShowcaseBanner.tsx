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
      className={`relative flex min-h-[85vh] items-center overflow-hidden bg-white pt-28 text-neutral-900 lg:min-h-screen lg:pt-32 ${onOpenInquiry ? "pb-52 md:pb-16" : "pb-24 md:pb-16"} ${className ?? ""}`}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-2 sm:gap-6 min-h-[60vh] sm:min-h-[75vh] px-4 sm:px-8 lg:px-12">
        <div>
          <p className="font-sans text-xs sm:text-base text-neutral-800">Build Your</p>
          <h2
            id="build-your-website"
            className="mt-1 font-sans text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1]"
          >
            Website
          </h2>
          <div className="mt-4 flex items-center gap-3 sm:gap-5">
            <span
              aria-hidden="true"
              className="inline-block h-6 w-10 sm:h-8 sm:w-16 border-l border-t border-neutral-300/80"
            />
            <p className="text-[11px] sm:text-sm md:text-base text-neutral-600 max-w-[280px]">
              We create professional websites that grow your brand.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
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

        <div className="relative w-full h-[260px] sm:h-[400px] md:h-[500px] flex items-center justify-end overflow-hidden">
          <Image
            src="/cortex/build-your-vision.png"
            alt="CORTEXIO engineer working on a laptop with a live product interface"
            fill
            priority
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover object-center"
            decoding="async"
          />
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
