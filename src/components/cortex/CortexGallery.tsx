"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cortexEngineers, type AccordionItem } from "@/data/cortexEngineers";

function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 w-full max-w-lg divide-y divide-neutral-200 border-t border-neutral-200">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between py-4 font-sans text-left text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition"
            >
              <span>{item.title}</span>
              <span aria-hidden className="text-neutral-400">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-4 font-sans text-sm leading-relaxed text-neutral-600">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CortexGallery() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-6">
        {cortexEngineers.map((engineer, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={engineer.slug}
              className={`flex flex-col lg:flex-row ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16">
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
                  {engineer.badge}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 font-normal tracking-tight">
                  {engineer.name}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mt-1 block">
                  {engineer.role}
                </span>
                <blockquote className="mt-4 border-l-2 border-neutral-900 pl-4 italic text-neutral-700 font-serif text-base sm:text-lg">
                  &ldquo;{engineer.clientMessage}&rdquo;
                </blockquote>
                <p className="text-neutral-600 font-sans text-xs sm:text-sm leading-relaxed mt-4 max-w-lg">
                  {engineer.bio}
                </p>
                <Accordion items={engineer.accordionItems} />
                <div className="mt-8">
                  <Link
                    href={`/companies/cortex-softsolutions/engineers/${engineer.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                  >
                    Explore Full Portfolio
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] bg-[#F9F9FB] flex items-center justify-center p-8 sm:p-12 overflow-hidden">
                <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden border border-neutral-200 shadow-sm">
                  <Image
                    src={engineer.image}
                    alt={engineer.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
