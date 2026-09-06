"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { type PointerEvent } from "react";
import { type Venture, ventures } from "@/data/shathigroup";

const featuredVentureIds = [
   "cortex-softsolutions",
   "shis-fashion",
   "xeroxii",
   "ceravo-tiles",
   "velorix-motors",
 ] as const;

const featuredVentures = featuredVentureIds
  .map((id) => ventures.find((venture) => venture.id === id))
  .filter((venture): venture is Venture => venture !== undefined);

const cardLayouts = [
   "lg:col-span-7 lg:row-span-2",
   "lg:col-span-5",
   "lg:col-span-5",
   "lg:col-span-7",
   "lg:col-span-7 lg:row-span-2",
] as const;

const darkBlurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'%3E%3Crect width='16' height='10' fill='%230e0e11'/%3E%3C/svg%3E";

interface VentureCardProps {
  readonly venture: Venture;
  readonly index: number;
  readonly layout: string;
}

function VentureCard({ venture, index, layout }: VentureCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { damping: 26, stiffness: 190, mass: 0.25 });
  const smoothY = useSpring(pointerY, { damping: 26, stiffness: 190, mass: 0.25 });
  const spotlight = useMotionTemplate`radial-gradient(26rem circle at ${smoothX}% ${smoothY}%, rgba(212, 175, 55, 0.18), transparent 58%)`;
  const isLeadCard = index === 0;

  const updateSpotlight = (event: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  const resetSpotlight = () => {
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={updateSpotlight}
      onPointerLeave={resetSpotlight}
      className={`group relative min-h-[16rem] sm:min-h-[22rem] touch-manipulation overflow-hidden rounded-3xl border border-white/[0.08] bg-luxury-surface shadow-luxury transition-[border-color,box-shadow] duration-500 hover:border-[#d4af37]/55 hover:shadow-luxury-gold ${layout}`}
    >
      <Image
        src={venture.imageUrls[0]}
        alt={`${venture.displayName} — ${venture.category}`}
        fill
        priority={isLeadCard}
        sizes={isLeadCard ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
        placeholder="blur"
        blurDataURL={darkBlurDataUrl}
        className="object-cover opacity-40 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-55 group-hover:grayscale-0"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(7,7,8,0.98)_5%,rgba(7,7,8,0.7)_58%,rgba(7,7,8,0.3)_100%)]" />
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:block"
      />

      <div className="relative flex h-full flex-col justify-between p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-[#d8c7a5] backdrop-blur-md">
            {venture.category}
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">0{index + 1}</span>
        </div>

        <div className={isLeadCard ? "max-w-xl" : "max-w-md"}>
          <p className="font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#d4af37]">
            {venture.tagline}
          </p>
          <h3 className="mt-3 font-serif text-3xl leading-[0.95] tracking-[-0.035em] text-luxury-50 sm:text-4xl">
            {venture.displayName}
          </h3>
          <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-luxury-200">
            {venture.summary}
          </p>
        </div>

<Button
          variant="primary"
          as={Link}
          href={venture.route}
          className="group"
        >
          Explore brand
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
        </Button>
      </div>
    </motion.article>
  );
}

export function Ventures() {
  return (
    <section
      id="ventures"
      aria-labelledby="ventures-heading"
      className="relative overflow-hidden bg-luxury-charcoal py-10 sm:py-20"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:5rem_5rem]" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-72 w-2/3 -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

      <div className="container-corporate relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880]">
            Portfolio / Selected ventures
          </p>
          <h2 id="ventures-heading" className="mt-4 font-serif text-4xl leading-none tracking-[-0.035em] text-luxury-50 sm:text-5xl">
            Distinct brands, one enduring standard.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-luxury-300 sm:text-base">
            Explore the specialist businesses that shape the SHATHI Group portfolio.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-2 lg:gap-5 lg:auto-rows-[17rem] lg:grid-cols-12">
          {featuredVentures.map((venture, index) => (
            <VentureCard
              key={venture.id}
              venture={venture}
              index={index}
              layout={cardLayouts[index] ?? "lg:col-span-6"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
