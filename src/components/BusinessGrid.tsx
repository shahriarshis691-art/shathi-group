import { ArrowUpRight, Sparkles } from "lucide-react";
import { companies, type CompanyCategory } from "@/data/companies";

const categoryBadge: Record<CompanyCategory, string> = {
  "Fashion & Apparel": "Apparel & Lifestyle",
  "Luxury & Lifestyle": "Luxury Timepieces",
  "Building Materials": "Building Materials",
  "Home & Living": "Home & Living",
};

const categoryAccent: Record<CompanyCategory, string> = {
  "Fashion & Apparel":
    "bg-rose-50 text-rose-700 ring-rose-200/70",
  "Luxury & Lifestyle":
    "bg-gold-50 text-gold-700 ring-gold-200/70",
  "Building Materials":
    "bg-slate-100 text-slate-700 ring-slate-200/70",
  "Home & Living":
    "bg-sky-50 text-sky-700 ring-sky-200/70",
};

export function BusinessGrid() {
  return (
    <section
      aria-labelledby="businesses-heading"
      id="businesses"
      className="bg-slate-50 py-16 sm:py-20"
    >
      <div className="container-corporate">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-600">
              <Sparkles className="h-4 w-4" aria-hidden />
              Our Portfolio
            </p>
            <h2
              id="businesses-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl"
            >
              Brands under SHATHI Group
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              A curated portfolio of companies united by craftsmanship,
              integrity, and a commitment to long-term value.
            </p>
          </div>
        </div>

        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {companies.map((company) => (
            <li key={company.id} className="group">
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-corporate transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-gold-300/70 hover:shadow-corporate-lg">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${categoryAccent[company.category]}`}
                  >
                    {categoryBadge[company.category]}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-corporate">
                    <span className="text-sm font-semibold tracking-tight">
                      {company.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </span>
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-navy-900">
                  {company.name}
                </h3>
                <p className="mt-1 text-sm font-medium italic text-gold-600">
                  {company.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {company.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Key Highlights
                  </p>
                  <ul role="list" className="mt-3 space-y-2">
                    {company.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gold-500"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                    aria-label={`Explore ${company.name}`}
                  >
                    Explore Brand
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}