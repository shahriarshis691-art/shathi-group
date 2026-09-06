import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cortexEngineers } from "@/data/cortexEngineers";
import type { CortexEngineer } from "@/data/cortexEngineers";

export function CortexGallery() {
  return (
    <section aria-labelledby="cortex-leadership-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <header className="mb-10 sm:mb-14">
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

        <div className="space-y-16 sm:space-y-24">
          {cortexEngineers.map((engineer) => (
            <EngineerEditorialRow key={engineer.slug} engineer={engineer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineerEditorialRow({ engineer }: { engineer: CortexEngineer }) {
  const [open, setOpen] = useState<string | null>(null);

  const technicalCoreContent = engineer.technicalCore?.length
    ? engineer.technicalCore.join(", ")
    : engineer.stack?.length
      ? engineer.stack.join(", ")
      : "";

  const pastEngagementsContent = engineer.pastEngagements?.length
    ? engineer.pastEngagements.join(", ")
    : engineer.experience?.length
      ? engineer.experience
          .map((entry) => `${entry.role}, ${entry.company} (${entry.period})`)
          .join("; ")
      : "";

  const portfolioRoute =
    engineer.directPortfolioRoute ||
    `/companies/cortex-softsolutions/engineers/${engineer.slug}`;

  const quoteText = engineer.quote || engineer.clientMessage || "";

  return (
    <div className="w-full border-t border-neutral-200 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Column 1: Portrait Canvas */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shadow-sm">
            <Image
              alt={engineer.name}
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              src={engineer.avatar}
            />
          </div>
        </div>

        {/* Column 2: Editorial Details & Accordion */}
        <div className="lg:col-span-7 flex flex-col justify-start pt-1">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3 block">
            {`${engineer.index} // ${engineer.category}`}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal tracking-tight leading-[1.15] mb-2 pt-1">
            {engineer.name}
          </h2>

          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-neutral-500 mb-6">
            {engineer.role}
          </p>

          {quoteText && (
            <div className="border-l-2 border-neutral-950 pl-4 my-4">
              <p className="font-serif italic text-base sm:text-lg text-neutral-800 leading-relaxed">
                &quot;{quoteText}&quot;
              </p>
            </div>
          )}

          <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            {engineer.bio}
          </p>

          <div className="w-full border-t border-neutral-200 divide-y divide-neutral-200 font-mono text-xs sm:text-sm">
            {technicalCoreContent && (
              <AccordionItem
                title="Technical Core"
                content={technicalCoreContent}
                open={open}
                onToggle={setOpen}
              />
            )}
            {pastEngagementsContent && (
              <AccordionItem
                title="Past Engagements"
                content={pastEngagementsContent}
                open={open}
                onToggle={setOpen}
              />
            )}
            <AccordionItem
              title="Direct Portfolio Route"
              content={portfolioRoute}
              open={open}
              onToggle={setOpen}
            />
          </div>

          <div className="pt-8">
            <Link
              className="font-mono text-xs uppercase tracking-widest text-neutral-900 hover:text-neutral-500 inline-flex items-center gap-2 group transition-colors"
              href={portfolioRoute}
            >
              <span>VIEW FULL PORTFOLIO</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({
  title,
  content,
  open,
  onToggle,
}: {
  title: string;
  content: string;
  open: string | null;
  onToggle: (key: string) => void;
}) {
  const isOpen = open === title;
return (
     <div className="border-t border-neutral-200 py-3 first:border-t-0">
       <Button
         variant="secondary"
         onClick={() => onToggle(isOpen ? "" : title)}
         className="block w-full min-h-11 flex items-center justify-between gap-2 px-7 py-3.5 sm:px-9 sm:py-4"
       >
         <span>{title}</span>
         <span className="font-sans text-sm text-neutral-400">
           {isOpen ? "−" : "+"}
         </span>
       </Button>
       {isOpen && (
         <p className="mt-3 font-sans text-[10px] leading-relaxed text-neutral-600 sm:text-sm">
           {content}
         </p>
       )}
     </div>
   );
 }
