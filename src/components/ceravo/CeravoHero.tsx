"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SlideIn } from "@/components/ui/ScrollReveal";

const materialSpecs = [
  { label: "DIMENSION", value: "1600 x 3200 mm" },
  { label: "THICKNESS", value: "6mm / 12mm / 20mm" },
  { label: "FINISH", value: "Honed Silk / Polished Monolith" },
];

interface CeravoHeroProps {
  onInquiry: () => void;
}

export function CeravoHero({ onInquiry }: CeravoHeroProps) {
  return (
    <section
      aria-labelledby="ceravo-hero-heading"
      className="relative border-b border-neutral-200 bg-[#F9F9FB] py-12 md:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom,theme(colors.neutral.200)_1px,transparent_1px),linear-gradient(to right,theme(colors.neutral.200)_1px,transparent_1px)",
          backgroundSize: "6rem 4rem",
        }}
      />

      <div className="container-corporate relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <SlideIn direction="left" className="flex flex-col">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400">
            COLLECTION // MONOLITH SLABS
          </p>

          <h1
            id="ceravo-hero-heading"
            className="text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-neutral-950 md:text-5xl lg:text-6xl"
          >
            Timeless Sintered Porcelain &amp; Luxury Marble
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
            Engineered for structural density and zero water absorption, CE R A VO
            monolithic slabs deliver seamless architectural joints and bespoke
            finishes tailored for high-end residential and commercial spaces.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {materialSpecs.map((spec) => (
              <div key={spec.label} className="flex flex-col">
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  {spec.label}
                </dt>
                <dd className="mt-1 font-sans text-[15px] font-semibold text-neutral-900">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={onInquiry}
            className="mt-10 inline-flex w-fit items-center justify-center border border-neutral-950 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
          >
            REQUEST SAMPLES / CATALOGUE →
          </button>
        </SlideIn>

        <motion.div
          whileHover={{ scale: 1.018 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-neutral-200/90 lg:aspect-auto lg:h-[750px]"
        >
          <Image
            src="/ceravo/real-estate-ceramics.png"
            alt="CE R A VO monolithic porcelain and luxury marble architectural surfaces in a refined interior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            loading="eager"
            decoding="async"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
