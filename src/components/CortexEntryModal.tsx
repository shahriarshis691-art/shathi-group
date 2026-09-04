"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

const cortexHref = "/cortex";
const dismissedKey = "cortex-entry-initiative-dismissed";

export function CortexEntryModal() {
  const [isOpen, setIsOpen] = useState(false);

  function dismiss() {
    window.sessionStorage.setItem(dismissedKey, "true");
    setIsOpen(false);
  }

  useEffect(() => {
    if (window.sessionStorage.getItem(dismissedKey)) return;

    const timer = window.setTimeout(() => setIsOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") dismiss();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-live="polite"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ type: "spring", stiffness: 340, damping: 27, mass: 0.8 }}
            className="w-full max-w-md"
          >
            <PerspectiveCard>
              <section
                aria-labelledby="cortex-entry-heading"
                aria-modal="true"
                role="dialog"
                className="relative overflow-hidden border border-neutral-800 bg-[#111215] p-8 shadow-2xl"
              >
                <Link
                  href={cortexHref}
                  aria-label="Explore the Cortex Soft Solutions founder initiative"
                  onClick={dismiss}
                  className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-emerald-500"
                >
                  <span className="sr-only">Explore the Cortex founder initiative</span>
                </Link>
                <button
                  type="button"
                  onClick={dismiss}
                  className="relative z-20 ml-auto block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
                  aria-label="Close Cortex founder initiative spotlight"
                >
                  [ESC / CLOSE ×]
                </button>

                <div className="relative z-0 mt-8 pointer-events-none">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-500">
                    Exclusive Initiative // Cortex Soft Solutions
                  </p>
                  <p className="mt-5 inline-flex border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                    Strict limit: 10 applicants only
                  </p>
                  <h2
                    id="cortex-entry-heading"
                    className="mt-5 font-serif text-2xl tracking-tight text-neutral-100"
                  >
                    Zero recurring tech overhead for the founders building what&apos;s next.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                    Claim lifetime ownership, zero monthly platform charges, and
                    a 70% launch concession for your next digital product.
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 border border-neutral-700 bg-neutral-900 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.17em] text-white">
                    Claim Founder Privilege
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </section>
            </PerspectiveCard>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
