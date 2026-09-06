"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const modules = [
  {
    title: "Enterprise Core",
    description:
      "Unified ERP backbone with modular extensibility, real-time reconciliation, and role-based governance.",
    icon: "⬡",
  },
  {
    title: "Cloud Sovereign",
    description:
      "Multi-cloud abstraction layer with auto-failover, zero-trust networking, and full-stack observability.",
    icon: "◈",
  },
  {
    title: "AI Microservices",
    description:
      "Embedded intelligence pipelines for NLP, computer vision, and predictive decisioning across workflows.",
    icon: "⎔",
  },
  {
    title: "Data Mesh",
    description:
      "Domain-oriented data ownership with federated governance, lineage tracking, and self-serve analytics.",
    icon: "⬢",
  },
  {
    title: "Edge Compute",
    description:
      "Distributed runtime fabric for low-latency inference, device orchestration, and offline-first resilience.",
    icon: "◉",
  },
];

export function CortexSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % modules.length);
      }, 4000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  const handleManualChange = (index: number) => {
    setActive(index);
    resetTimer();
  };

  const prev = (active - 1 + modules.length) % modules.length;
  const nextIndex = (active + 1) % modules.length;

  return (
    <section className="w-full bg-[#EAECEF] py-20 px-6 mt-24">
      <div
        className="mx-auto max-w-6xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
<div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden">
<button
              type="button"
              onClick={() => handleManualChange(prev)}
              className="hidden md:block font-mono text-xs text-neutral-500 hover:text-black transition-colors"
              aria-label="Previous module"
            >
              Left {'<'}
            </button>

          <div className="flex flex-1 items-center justify-center gap-4 md:gap-6 overflow-hidden">
            <div className="hidden md:flex flex-1 flex-col items-center justify-center transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-95 opacity-40 blur-[0.5px]">
              <div className="aspect-[4/3] w-full max-w-sm rounded-2xl border border-neutral-300 bg-white/60 p-6 shadow-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  {modules[prev].title}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                  {modules[prev].description}
                </p>
              </div>
            </div>

            <div className="z-20 flex flex-col items-center justify-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 opacity-100">
              <div className="aspect-[4/3] w-full max-w-md rounded-3xl border border-neutral-100/80 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-2xl text-neutral-800 shadow-sm mx-auto mb-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {modules[active].icon}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 text-center">
                  {modules[active].title}
                </p>
                <h3 className="mt-2 text-center text-2xl font-extrabold uppercase tracking-tight text-neutral-950">
                  {modules[active].title}
                </h3>
                <p className="mt-4 text-center text-sm leading-relaxed text-neutral-600">
                  {modules[active].description}
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-1 flex-col items-center justify-center transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-95 opacity-40 blur-[0.5px]">
              <div className="aspect-[4/3] w-full max-w-sm rounded-2xl border border-neutral-300 bg-white/60 p-6 shadow-sm">
<p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                   {modules[nextIndex].title}
                 </p>
                 <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                   {modules[nextIndex].description}
                 </p>
              </div>
            </div>
          </div>

<Button
               variant="secondary"
               onClick={() => handleManualChange(nextIndex)}
               className="hidden md:block"
               aria-label="Next module"
             >
               {'>'} Right
             </Button>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <h3 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 md:text-3xl md:max-w-xs md:leading-none">
            CORTEXIO Architecture Collection
          </h3>

<div className="flex items-center gap-3 font-mono text-xs">
             {modules.map((mod, idx) => (
               <Button
                 key={mod.title}
                 variant="secondary"
                 onClick={() => handleManualChange(idx)}
                 className={`${idx === active ? "font-bold text-neutral-950 scale-110" : "text-neutral-400 hover:text-neutral-600"}`}
                 aria-label={`Module ${String(idx + 1).padStart(2, "0")}`}
               >
                 {String(idx + 1).padStart(2, "0")}
               </Button>
             ))}
           </div>

          <div className="flex items-center gap-4 font-mono text-xs text-neutral-500" aria-label="CORTEXIO social channels coming soon">
            <span>TW</span>
            <span>IN</span>
            <span>FB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
