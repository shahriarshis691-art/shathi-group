"use client";

import Image from "next/image";

interface CortexShowcaseBannerProps {
  onInquiry: () => void;
}

const metrics = [
  { value: "120+", label: "Completed Deployments" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "98%", label: "Client Retention" },
];

export function CortexShowcaseBanner({ onInquiry }: CortexShowcaseBannerProps) {
  return (
    <section
      aria-labelledby="build-your-digital-edge"
      className="border-y border-neutral-200 bg-neutral-50 px-6 py-16 text-neutral-900 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            02 // Bespoke Digital Engineering
          </p>
          <h2
            id="build-your-digital-edge"
            className="mt-5 font-serif text-5xl font-normal leading-[0.94] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl"
          >
            Build Your Digital Edge.
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            We engineer scalable digital ecosystems, high-performance web platforms, and
            ergonomic user interfaces that convert vision into enterprise value.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-5 border-y border-neutral-200 py-6 sm:grid-cols-3 sm:gap-6">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={onInquiry}
            className="mt-9 inline-flex items-center justify-center rounded-full bg-neutral-950 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-white shadow-lg transition-colors duration-300 hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Start a consultation →
          </button>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
          <Image
            src="/cortex/build-your-vision.png"
            alt="CORTEXIO engineer building a digital product on a laptop"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
