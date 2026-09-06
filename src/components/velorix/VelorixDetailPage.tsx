"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const telemetry = [
  {
    title: "Powertrain & Output",
    metric: "1,250 HP",
    detail: "Dual axial-flux motors",
  },
  {
    title: "Dynamic Acceleration",
    metric: "0-100 KM/H IN 1.89s",
    detail: "Launch control active",
  },
  {
    title: "Energy Architecture",
    metric: "120 KWH",
    detail: "900V silicon-carbide fast charge · 10–80% in 12 min",
  },
  {
    title: "Aerodynamics & Downforce",
    metric: "0.198 CD",
    detail: "Active carbon splitter & rear airbrake",
  },
];

function ChassisOverlay({ active }: { active: boolean }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 1200 560"
      className="pointer-events-none absolute inset-0 h-full w-full"
      animate={{ opacity: active ? 1 : 0.24 }}
      transition={{ duration: 0.35 }}
    >
      <defs>
        <linearGradient id="velorix-wire" x1="0" x2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="0.5" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
        <filter id="velorix-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        fill="none"
        stroke="url(#velorix-wire)"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#velorix-glow)"
      >
        <motion.path
          d="M126 371 L220 278 L424 202 L728 196 L990 272 L1084 376 L956 426 L236 429 Z"
          strokeWidth="2"
          strokeDasharray="12 10"
          animate={active ? { strokeDashoffset: [0, -44] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <path d="M220 278 L340 336 L885 334 L990 272" strokeWidth="1.4" opacity="0.85" />
        <path d="M424 202 L468 330 L728 196 L764 330" strokeWidth="1.4" opacity="0.85" />
        <path d="M236 429 L332 362 L873 360 L956 426" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="369" cy="380" rx="86" ry="44" strokeWidth="1.4" />
        <ellipse cx="849" cy="380" rx="86" ry="44" strokeWidth="1.4" />
        <path d="M308 360 L408 318 L783 318 L931 360" strokeWidth="1" opacity="0.7" />
      </g>
      {active && (
        <g className="font-mono text-[17px] fill-cyan-200">
          <text x="174" y="252">AIRFLOW VECTOR</text>
          <text x="484" y="165">BATTERY PACK / 120 KWH</text>
          <text x="878" y="487">TORQUE NODE</text>
        </g>
      )}
    </motion.svg>
  );
}

export function VelorixDetailPage() {
  const reduceMotion = useReducedMotion();
  const [wireframeActive, setWireframeActive] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0D14] text-neutral-100 selection:bg-cyan-500/30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f29371a_1px,transparent_1px),linear-gradient(to_bottom,#1f29371a_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.15)_0%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[34%] h-72 w-[72%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <header className="relative z-20 border-b border-neutral-800/90 bg-[#0A0D14]/70 px-6 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-white"
            >
              ← Return to home
            </Link>
            <span className="hidden h-4 w-px bg-neutral-700 sm:block" aria-hidden="true" />
            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              Velorix Motors // Platform 01
            </span>
          </div>
          <p className="hidden font-mono text-[10px] tracking-[0.12em] text-neutral-500 lg:block">
            BATTERY CORE: 99.4% <span className="mx-2 text-cyan-500">•</span> ALL-WHEEL TORQUE VECTORING ACTIVE
          </p>
          <a
            href="https://www.velorixmotors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-mono text-xs text-neutral-400 transition-colors hover:text-white"
          >
            Visit external site ↗
          </a>
        </div>
      </header>

      <section className="relative z-10 px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden sm:min-h-[500px] lg:min-h-[570px]">
            <h1 className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 select-none whitespace-nowrap text-8xl font-black tracking-tighter text-white/5 sm:text-[140px] md:text-[180px]">
              VELORIX GT
            </h1>
            <div className="pointer-events-none absolute bottom-[14%] left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-[100%] bg-cyan-500/20 blur-3xl" />

            <motion.div
              animate={reduceMotion ? undefined : { y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 h-[300px] w-full max-w-6xl transform-gpu will-change-transform sm:h-[390px] lg:h-[470px]"
            >
              <Image
                src="/velorix/velorix-hero.png"
                alt="Velorix GT matte silver electric hypercar"
                fill
                sizes="(min-width: 1280px) 1100px, (min-width: 640px) 90vw, 100vw"
                className="object-contain mix-blend-screen"
                loading="eager"
                decoding="async"
              />
            </motion.div>
            <ChassisOverlay active={wireframeActive} />

            <button
              type="button"
              aria-pressed={wireframeActive}
              onClick={() => setWireframeActive((active) => !active)}
              className="absolute bottom-6 right-0 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-400/30 bg-[#0A0D14]/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 sm:right-4"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${wireframeActive ? "bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,1)]" : "bg-neutral-600"}`} />
              Chassis wireframe {wireframeActive ? "on" : "off"}
            </button>

            <div className="absolute bottom-7 left-0 z-20 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:block">
              <p>Spec-01 / velocity architecture</p>
              <p className="mt-1 text-cyan-400/80">Real-time vector map enabled</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-neutral-800 pt-7 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">An electric platform with a kinetic point of view</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-400">
                Precision-tuned torque delivery, a high-voltage core, and adaptive aero systems configured as one responsive performance architecture.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#telemetry"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#0A0D14] transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                Explore platform →
              </a>
              <a
                href="https://www.velorixmotors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-700 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-neutral-200 transition hover:border-cyan-400/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                Request dossier ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="telemetry" className="relative z-10 pb-16">
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {telemetry.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-cyan-500/50"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{item.title}</p>
              <p className="mt-5 font-sans text-2xl font-black tracking-tight text-white">{item.metric}</p>
              <p className="mt-3 font-mono text-xs leading-relaxed text-cyan-100/70">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
