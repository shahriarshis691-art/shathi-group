import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cortexEngineers } from "@/data/cortexEngineers";
import type { CortexEngineer } from "@/data/cortexEngineers";

export function CortexGallery() {
  return (
    <section aria-labelledby="cortex-leadership-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:py-24">
        <header className="mb-8 sm:mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            CORTEXIO Softsolutions / People systems
          </p>
          <h2
            id="cortex-leadership-heading"
            className="mt-3 font-serif text-3xl text-neutral-950 sm:text-4xl"
          >
            Engineering Leadership &amp; Core Specialists
          </h2>
        </header>

        <div className="space-y-4">
          {cortexEngineers.map((engineer, index) => (
            <EngineerEditorialRow
              key={engineer.slug}
              engineer={engineer}
              reversed={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineerEditorialRow({
  engineer,
  reversed,
}: {
  engineer: CortexEngineer;
  reversed: boolean;
}) {
  const [open, setOpen] = useState<string | null>(null);

  const accordionItems = [
    {
      title: "Technical Core",
      content: engineer.stack.join(", "),
    },
    {
      title: "Past Engagements",
      content: engineer.experience
        .map((entry) => `${entry.role}, ${entry.company} (${entry.period})`)
        .join("; "),
    },
    {
      title: "Direct Portfolio Route",
      content: `/companies/cortex-softsolutions/engineers/${engineer.slug}`,
    },
  ];

  return (
    <div
      className={`flex flex-row items-start gap-4 sm:gap-8 lg:gap-12 lg:items-start${
        reversed ? " lg:flex-row-reverse" : ""
      }`}
    >
      <div className="min-w-0 flex-1 lg:max-w-[640px]">
        <span className="font-mono text-[8px] tracking-[0.08em] uppercase text-neutral-400 sm:text-xs sm:tracking-widest">
          {engineer.titleTag}
        </span>
        <h3 className="mt-2 font-serif text-[clamp(1.35rem,6vw,2.25rem)] font-normal tracking-tight text-neutral-900 sm:mt-3">
          {engineer.name}
        </h3>
        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.08em] text-neutral-500 sm:text-xs sm:tracking-wider">
          {engineer.role}
        </p>

        {engineer.clientMessage ? (
          <blockquote className="my-3 border-l-2 border-neutral-900 pl-3 font-serif text-xs italic text-neutral-700 sm:my-4 sm:pl-4 sm:text-lg">
            {engineer.clientMessage}
          </blockquote>
        ) : null}

        <p className="mt-3 font-sans text-[10px] leading-relaxed text-neutral-700 sm:mt-4 sm:text-base">
          {engineer.bio}
        </p>

        <div className="mt-5 border-y border-neutral-200 sm:mt-8">
          {accordionItems.map((item) => (
            <div key={item.title} className="border-t border-neutral-200 py-3 first:border-t-0">
              <button
                type="button"
                onClick={() => setOpen(open === item.title ? null : item.title)}
                className="flex min-h-11 w-full items-center justify-between gap-2 text-left font-mono text-[8px] uppercase tracking-[0.08em] text-neutral-500 sm:min-h-0 sm:text-xs sm:tracking-[0.15em]"
              >
                <span>{item.title}</span>
                <span className="font-sans text-sm text-neutral-400">
                  {open === item.title ? "-" : "+"}
                </span>
              </button>
              {open === item.title ? (
                <p className="mt-3 font-sans text-[10px] leading-relaxed text-neutral-600 sm:text-sm">
                  {item.content}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          href={`/companies/cortex-softsolutions/engineers/${engineer.slug}`}
          className="mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-[8px] uppercase tracking-[0.08em] text-neutral-900 transition-transform hover:translate-x-1 sm:mt-8 sm:min-h-0 sm:text-xs sm:tracking-[0.18em]"
        >
          <span>View full portfolio</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="relative aspect-[4/5] w-[42%] shrink-0 overflow-hidden border border-neutral-200 shadow-sm sm:w-[38%] lg:max-w-[420px]">
        <Image
          src={engineer.avatar}
          alt={`${engineer.name}, ${engineer.role}`}
          fill
          sizes="(min-width: 1024px) 420px, 42vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
