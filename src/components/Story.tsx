"use client";

import { motion } from "framer-motion";
import { Compass, Eye, ShieldCheck, Target } from "lucide-react";
import { siteConfig, storyMetrics } from "@/data/shathigroup";

const storyPillars = [
  { title: "Our Mission", body: siteConfig.story.mission, icon: Target },
  { title: "Our Vision", body: siteConfig.story.vision, icon: Eye },
  { title: "Governance", body: siteConfig.story.governance, icon: ShieldCheck },
] as const;

export function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="bg-luxury-black py-10 sm:py-20">
      <div className="container-corporate">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880]">
              <Compass className="h-3.5 w-3.5" aria-hidden />
              Heritage / Story
            </p>
            <h2 id="story-heading" className="mt-5 font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-luxury-50 sm:text-5xl">
              Built for the long view.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-luxury-200">{siteConfig.story.overview}</p>
            <p className="mt-5 border-l border-[#d4af37]/60 pl-5 text-sm leading-relaxed text-luxury-400">{siteConfig.story.history}</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7 lg:gap-4">
            {storyPillars.map(({ title, body, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-white/[0.08] bg-luxury-surface p-6 transition duration-300 hover:border-[#d4af37]/40 hover:bg-luxury-elevated"
              >
                <Icon className="h-5 w-5 text-[#d4af37]" aria-hidden />
                <h3 className="mt-9 font-serif text-2xl tracking-[-0.025em] text-luxury-50">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-luxury-400">{body}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4"
        >
          {storyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-white/[0.08] p-6 last:border-b-0 sm:nth-[2n]:border-l sm:nth-[2n]:border-l-white/[0.08] lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c5a880]">{metric.label}</dt>
              <dd className="mt-3 font-serif text-4xl tracking-[-0.04em] text-luxury-50">{metric.value}</dd>
              <p className="mt-2 text-xs leading-relaxed text-luxury-400">{metric.description}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
