import Image from "next/image";
import Link from "next/link";
import { cortexEngineers } from "@/data/cortexEngineers";

export function CortexGallery() {
  return (
    <section aria-labelledby="cortex-leadership-heading" className="bg-[#F7F8FA] pb-24 pt-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-5 border-t border-neutral-200 pt-10 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              CORTEXIO Softsolutions / People systems
            </p>
            <h2 id="cortex-leadership-heading" className="mt-3 font-serif text-3xl text-neutral-950 sm:text-4xl">
              Engineering Leadership &amp; Core Specialists
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            A senior technical bench assembled for systems that need to stay legible, resilient, and owned by the organisation that runs them.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cortexEngineers.map((engineer, index) => (
            <Link
              key={engineer.slug}
              href={`/companies/cortex-softsolutions/engineers/${engineer.slug}`}
              className="group block overflow-hidden border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-900 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src={engineer.avatar}
                  alt={`${engineer.name}, ${engineer.role}`}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute left-4 top-4 bg-white/90 px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-neutral-700 backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")} {"//"}
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{engineer.titleTag}</p>
                <h3 className="mt-3 font-serif text-2xl text-neutral-950">{engineer.name}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-neutral-600">{engineer.role}</p>
                <span className="mt-5 inline-flex font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-950 transition-transform duration-300 group-hover:translate-x-1">
                  View portfolio →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
