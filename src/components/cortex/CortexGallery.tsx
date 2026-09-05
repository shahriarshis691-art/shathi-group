import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cortexEngineers } from "@/data/cortexEngineers";
import type { CortexEngineer } from "@/data/cortexEngineers";

export function CortexGallery() {
  return (
    <section aria-labelledby="cortex-leadership-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <header className="mb-12">
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
      className={`flex flex-col gap-12 lg:items-start lg:flex-row${
        reversed ? " lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-1/2 lg:max-w-[640px]">
        <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
          {engineer.titleTag}
        </span>
        <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">
          {engineer.name}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-500">
          {engineer.role}
        </p>

        {engineer.clientMessage ? (
          <blockquote className="border-l-2 border-neutral-900 pl-4 italic text-neutral-700 font-serif text-base sm:text-lg my-4">
            {engineer.clientMessage}
          </blockquote>
        ) : null}

        <p className="mt-4 font-sans text-base leading-relaxed text-neutral-700">
          {engineer.bio}
        </p>

        <div className="mt-8 border-y border-neutral-200">
          {accordionItems.map((item) => (
            <div key={item.title} className="border-t border-neutral-200 py-3 first:border-t-0">
              <button
                type="button"
                onClick={() => setOpen(open === item.title ? null : item.title)}
                className="flex w-full items-center justify-between gap-2 text-left font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
              >
                <span>{item.title}</span>
                <span className="font-sans text-sm text-neutral-400">
                  {open === item.title ? "-" : "+"}
                </span>
              </button>
              {open === item.title ? (
                <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-600">
                  {item.content}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          href={`/companies/cortex-softsolutions/engineers/${engineer.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-neutral-900 transition-transform hover:translate-x-1"
        >
          <span>View full portfolio</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="relative mx-auto aspect-[4/5] max-w-[420px] w-full shrink-0 overflow-hidden shadow-sm border border-neutral-200">
        <Image
          src={engineer.avatar}
          alt={`${engineer.name}, ${engineer.role}`}
          fill
          sizes="(min-width: 1024px) 420px, 80vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
