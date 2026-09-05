"use client";

import { motion, useReducedMotion } from "framer-motion";

interface CortexHeroProps {
  onInquiry: () => void;
}

const navigation = ["Solutions", "Architecture", "Enterprise Core", "About"];

export function CortexHero({ onInquiry }: CortexHeroProps) {
  const reduceMotion = useReducedMotion();

  const floatTransition = {
    duration: 6,
    ease: "easeInOut" as const,
    repeat: Infinity,
  };

  return (
    <section
      aria-labelledby="cortex-hero-heading"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#F6F7FB] text-neutral-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-amber-100/30 to-white/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(15,23,42,0.18)_0.65px,transparent_0.8px)] [background-size:8px_8px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-1/4 top-1/4 h-[44rem] w-[44rem] rounded-full bg-violet-200/25 blur-3xl"
      />

      <header className="relative z-30 flex items-center justify-between border-b border-white/60 bg-white/40 px-8 py-4 backdrop-blur-md md:px-16">
        <a href="/" className="flex items-center gap-2 font-sans text-xl font-black tracking-tight text-neutral-950">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 text-xs text-white shadow-sm">
            C
          </span>
          CORTEXIO
        </a>

        <nav aria-label="CORTEXIO navigation" className="hidden gap-8 font-mono text-xs tracking-wider text-neutral-600 md:flex">
          {navigation.map((item) => (
            <a key={item} href="#capabilities" className="transition-colors hover:text-black">
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onInquiry}
          className="min-h-11 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 font-mono text-[10px] tracking-wider text-neutral-950 shadow-sm transition-all duration-300 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 sm:px-5 sm:text-xs"
        >
          Initialize Project
        </button>
      </header>

      <div className="relative z-10 flex flex-1 flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-center py-16 pl-8 pr-4 md:pl-20 lg:w-2/5 lg:pr-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              {"// Next-gen cloud ecosystem"}
            </p>
            <h1
              id="cortex-hero-heading"
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
            >
              Architecting Sovereign Digital Ecosystems.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
              Zero recurring cloud overhead, distributed modular microservices, and
              bespoke software architecture tailored for long-term operational autonomy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-7 py-3.5 font-mono text-xs tracking-widest text-white shadow-xl transition-all hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
              >
                Discover capabilities →
              </a>
              <button
                type="button"
                onClick={onInquiry}
                className="rounded-full border border-neutral-300 px-7 py-3.5 font-mono text-xs tracking-widest text-neutral-800 transition-all hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
              >
                Book consultation
              </button>
            </div>
          </motion.div>
        </div>

        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden lg:h-auto lg:w-3/5">
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { y: [-9, 9, -9], rotateZ: [-1, 1, -1] }}
            transition={floatTransition}
            className="relative h-[310px] w-[310px] transform-gpu will-change-transform sm:h-[390px] sm:w-[390px] lg:h-[520px] lg:w-[520px]"
          >
            <div
              className="absolute inset-0"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-4 rounded-[3rem] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 opacity-80 shadow-[0_0_50px_rgba(168,85,247,0.45)] blur-[2px]"
                style={{ transform: "rotateX(59deg) rotateZ(-35deg) translateZ(-28px)" }}
              />
              <div
                className="absolute inset-4 overflow-hidden rounded-[3rem] border border-white/90 bg-gradient-to-br from-white via-[#f1f3f7] to-[#dfe3ea] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-20px_40px_rgba(148,163,184,0.22),0_24px_45px_rgba(30,41,59,0.14)]"
                style={{ transform: "rotateX(59deg) rotateZ(-35deg)" }}
              >
                <div className="absolute inset-[12%] rounded-full border-[24px] border-neutral-300/70 shadow-[inset_0_5px_13px_rgba(15,23,42,0.2),0_0_0_2px_rgba(255,255,255,0.7)]" />
                <div className="absolute inset-[18%] rounded-full border border-fuchsia-500/50 shadow-[0_0_20px_rgba(217,70,239,0.65),inset_0_0_20px_rgba(34,211,238,0.25)]" />
                <div className="absolute left-[10%] top-[49%] h-1 w-[80%] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent shadow-[0_0_16px_rgba(217,70,239,0.95)]" />
                <div className="absolute left-[49%] top-[10%] h-[80%] w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_16px_rgba(34,211,238,0.95)]" />
                <motion.div
                  className="absolute inset-[18%] transform-gpu will-change-transform"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                >
                  <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full border border-amber-200 bg-gradient-to-br from-amber-100 via-amber-400 to-amber-700 shadow-[0_10px_25px_rgba(217,70,239,0.5)]" />
                </motion.div>
              </div>

              <div
                className="absolute left-[20%] top-[19%] h-24 w-40 rounded-2xl border border-white/75 bg-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_35px_rgba(148,163,184,0.18)] backdrop-blur-md"
                style={{ transform: "rotateX(59deg) rotateZ(-35deg) translateZ(34px)" }}
              />
              <div
                className="absolute bottom-[19%] right-[18%] h-20 w-28 rounded-xl border border-white/80 bg-cyan-50/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_28px_rgba(99,102,241,0.16)] backdrop-blur-md"
                style={{ transform: "rotateX(59deg) rotateZ(-35deg) translateZ(46px)" }}
              />
            </div>
          </motion.div>

          <p className="absolute bottom-7 right-8 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500 lg:bottom-10 lg:right-12">
            Core / 01 — Autonomous by design
          </p>
        </div>
      </div>
    </section>
  );
}
