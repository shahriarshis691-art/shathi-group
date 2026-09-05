"use client";

import Image from "next/image";
import { SlideIn } from "@/components/ui/ScrollReveal";

const materialCards = [
  {
    index: "01",
    title: "Honed Travertine & Matte Ceramic",
    meta: "Natural stone warmth with a soft, tactile matte finish",
    position: "object-top",
    tint: "bg-amber-200/15",
    alt: "Honed travertine slab with matte ceramic detailing",
  },
  {
    index: "02",
    title: "Ultra-Compact Sintered Slabs",
    meta: "Densified porcelain with microscopic pore structure",
    position: "object-center",
    tint: "bg-neutral-300/12",
    alt: "Ultra-compact sintered porcelain slab cross section",
  },
  {
    index: "03",
    title: "Minimalist Monolithic Vanities & Fixtures",
    meta: "CNC-carved from a single porcelain monolith",
    position: "object-bottom",
    tint: "bg-neutral-800/30",
    alt: "Minimalist monolithic vanity and bath fixtures",
  },
];

export function CeravoMaterialTriptych() {
  return (
    <section
      aria-labelledby="ceravo-materials-heading"
      className="relative border-b border-neutral-200 bg-[#F9F9FB] py-14 md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom,theme(colors.neutral.200)_1px,transparent_1px),linear-gradient(to right,theme(colors.neutral.200)_1px,transparent_1px)",
          backgroundSize: "6rem 4rem",
        }}
      />

      <div className="container-corporate relative z-10">
        <SlideIn direction="up" className="mb-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400">
            Material Study
          </p>
          <h2
            id="ceravo-materials-heading"
            className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-neutral-900 md:text-4xl"
          >
            Architectural Finishes
          </h2>
        </SlideIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {materialCards.map((card, i) => (
            <SlideIn
              key={card.title}
              direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
              delay={i * 0.12}
              className="group"
            >
              <div className="relative flex h-64 w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200/90">
                <Image
                  src="/ceravo/real-estate-ceramics.png"
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className={`object-cover ${card.position} transition-transform duration-700 group-hover:scale-105 ${card.tint}`}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                />

                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 font-mono text-[10px] font-bold tracking-[0.18em] text-neutral-100/80"
                >
                  [ {card.index} ]
                </span>

                <div className="absolute inset-x-4 bottom-4 flex flex-col text-neutral-50">
                  <h3 className="font-sans text-[15px] font-semibold text-neutral-50">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300/90">
                    {card.meta}
                  </p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
