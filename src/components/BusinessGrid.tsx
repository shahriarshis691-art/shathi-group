import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { companies, type Company } from "@/data/companies";

export function BusinessGrid() {
  return (
    <section
      aria-labelledby="businesses-heading"
      id="businesses"
      className="bg-white py-20 sm:py-28"
    >
      <div className="container-corporate">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Our Portfolio
          </p>
          <h2
            id="businesses-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Distinct businesses, one exacting standard.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
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
    <Link
      href={`/companies/${company.slug}`}
      aria-label={`Explore ${company.name}`}
      className="group relative flex aspect-[4/5] min-h-[460px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 sm:p-8"
    >
      <span className="relative mb-6 block h-48 w-full overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={company.image}
          alt={company.imageAlt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </span>

      <span className="flex flex-1 flex-col">
        <span className="flex items-start justify-between gap-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {company.category}
          </span>
          <ArrowUpRight
            className="h-5 w-5 flex-none text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-900"
            aria-hidden="true"
          />
        </span>

        <h3 className="my-auto text-2xl font-bold leading-snug tracking-tight text-slate-900 md:text-3xl">
          {company.name}
        </h3>

        <span className="mt-4 border-t border-slate-200/80 pt-4">
          <span className="block text-sm leading-relaxed text-slate-600 line-clamp-3">
            {company.description}
          </span>
        </span>
      </span>
    </Link>
  );
}