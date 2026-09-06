"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig, storyMetrics } from "@/data/shathigroup";

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[760px] overflow-hidden bg-luxury-black pb-14 pt-36 text-luxury-50 sm:min-h-screen sm:items-center sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_68%_38%,rgba(212,175,55,0.15),transparent_23%),radial-gradient(circle_at_42%_50%,rgba(197,168,128,0.10),transparent_30%),linear-gradient(115deg,#070708_0%,#0e0e11_52%,#070708_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-[56%] bg-cover bg-center opacity-20 mix-blend-luminosity sm:block"
        style={{ backgroundImage: `url(${hero.imageUrl})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#070708_5%,rgba(7,7,8,0.87)_45%,rgba(7,7,8,0.45)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:5rem_5rem]" />

      <motion.div
        className="container-corporate relative w-full"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } } }}
      >
        <div className="max-w-4xl">
          <motion.div variants={entrance} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {hero.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={entrance}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-[0.93] tracking-[-0.045em] text-[#faf9f5] sm:text-7xl lg:text-8xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={entrance}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-sm leading-relaxed text-luxury-300 sm:text-base"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            variants={entrance}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d4af37]/75 bg-[#d4af37]/10 px-6 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f4d77a] shadow-luxury-gold transition duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#070708]"
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.05] px-6 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-luxury-100 backdrop-blur-md transition duration-300 hover:border-white/[0.2] hover:bg-white/[0.1]"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        <motion.dl
          variants={entrance}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4"
        >
          {storyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0e0e11]/80 px-5 py-5 backdrop-blur-sm"
            >
              <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c5a880]">{metric.label}</dt>
              <dd className="mt-2 font-serif text-2xl leading-none text-[#faf9f5]">{metric.value}</dd>
              <p className="mt-2 text-xs leading-relaxed text-luxury-400">{metric.description}</p>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
