"use client";

import Image from "next/image";

/** Primary hero section for the CORTEXIO detail page. */
export function CortexShowcaseBanner({ className }: { className?: string }) {
  return (
    <section
      id="hero"
      aria-labelledby="build-your-website"
      className={`relative min-h-[85vh] lg:min-h-screen bg-white flex items-center overflow-hidden pt-28 lg:pt-32 pb-16 px-6 text-neutral-900 sm:px-12 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <Image
          src="/cortex/build-your-vision.png"
          alt="CORTEXIO engineer using a laptop with a live product interface"
          fill
          sizes="(max-width: 1024px) 58vw, 50vw"
          className="object-cover object-center [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_100%)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center">
        <div className="max-w-[620px] md:max-w-[58%]">
          <p className="font-sans text-3xl font-light leading-none tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Build Your
          </p>
          <h2
            id="build-your-website"
            className="mt-1 font-sans text-6xl font-bold leading-none tracking-tighter text-neutral-900 sm:mt-2 sm:text-7xl md:text-9xl"
          >
            Website
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mt-9">
            <span
              aria-hidden="true"
              className="inline-block h-8 w-16 border-l border-t border-neutral-300/80"
            />
            <p className="max-w-[280px] font-sans text-xs font-medium leading-relaxed text-neutral-600 sm:text-sm">
              We create professional websites that grow your brand.
            </p>
          </div>
        </div>

        <div className="relative mt-10 h-[360px] w-full md:hidden sm:h-[420px]">
          <Image
            src="/cortex/build-your-vision.png"
            alt="CORTEXIO engineer working on a laptop with a live product interface"
            fill
            sizes="(max-width: 640px) calc(100vw - 3rem), 672px"
            className="object-contain object-center"
          />
        </div>
      </div>

      <a
        href="tel:+8801335550675"
        className="absolute bottom-7 left-6 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center bg-white/85 px-3 py-2 font-mono text-xs font-semibold tracking-wider text-neutral-700 backdrop-blur-sm transition-colors hover:text-neutral-950 sm:left-12 sm:text-sm md:bg-transparent md:p-0 md:backdrop-blur-none"
      >
        +880 1335550675
      </a>
    </section>
  );
}
