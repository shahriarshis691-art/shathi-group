"use client";

import Image from "next/image";

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
      className={`relative min-h-[85vh] lg:min-h-screen bg-white flex items-center overflow-hidden pt-28 lg:pt-32 pb-24 md:pb-16 text-neutral-900 ${className ?? ""}`}
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
          <a
            href="tel:+8801979614216"
            className="font-mono text-[10px] sm:text-xs text-neutral-900 font-semibold mt-4 block"
          >
            +880 1979614216
          </a>
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
          <div className="flex items-stretch">
            <a
              href="tel:+8801979614216"
              className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 font-mono text-xs font-semibold tracking-wider text-white transition hover:text-neutral-300"
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
              className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 font-mono text-xs font-semibold tracking-wider text-white transition hover:text-neutral-300"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={onOpenInquiry}
              className="flex flex-1 flex-col items-center justify-center gap-0.5 py-3 font-mono text-xs font-semibold tracking-wider text-white transition hover:text-neutral-300"
            >
              Start a Consultation
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
