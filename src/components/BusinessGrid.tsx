import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { companies, type Company } from "@/data/companies";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

export function BusinessGrid() {
  return (
    <section
      aria-labelledby="businesses-heading"
      id="businesses"
      className="relative py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-corporate">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Our Portfolio
          </p>
          <h2
            id="businesses-heading"
            className="mt-4 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl lg:text-5xl"
          >
            Distinct businesses, one exacting standard.
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-sm md:text-[15px] font-normal text-neutral-600 leading-relaxed">
            Explore the specialist companies that make up SHATHI Group — each
            designed to lead its field with clarity, craft, and long-term focus.
          </p>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {companies.map((company) => (
            <li key={company.id}>
              <SubsidiaryCard company={company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SubsidiaryCard({ company }: { company: Company }) {
  return (
    <PerspectiveCard>
      <Link
        href={`/companies/${company.slug}`}
        aria-label={`Explore ${company.name}`}
        className="group relative flex aspect-[4/5] min-h-[460px] flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/50" aria-hidden="true" />
        <span className="relative mb-6 block h-48 w-full overflow-hidden rounded-2xl bg-slate-100">
          {company.slug === "cortex-softsolutions" ? (
            <div className="flex h-full w-full items-center justify-center bg-slate-50 p-6">
              <Image
                alt="Cortex SoftSolutions Logo"
                className="object-contain"
                height="225"
                src="/cortex-main-logo.png"
                width="400"
              />
            </div>
          ) : (
            <Image
              alt={company.imageAlt}
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              src={company.image}
            />
          )}
        </span>

        <span className="relative flex flex-1 flex-col">
          <span className="flex items-start justify-between gap-6">
            <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
              {company.category}
            </span>
            <ArrowUpRight
              className="h-5 w-5 flex-none text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900"
              aria-hidden="true"
            />
          </span>

          <h3 className="my-auto font-serif text-2xl font-bold uppercase tracking-[0.14em] text-neutral-900 md:text-3xl">
            {company.name}
          </h3>

          <span className="mt-4 border-t border-slate-300/80 pt-4">
            <span className="block font-sans text-sm md:text-[15px] font-normal text-neutral-600 line-clamp-3 leading-relaxed">
              {company.description}
            </span>
          </span>
        </span>
      </Link>
    </PerspectiveCard>
  );
}
