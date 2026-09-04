import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { companies } from "@/data/companies";
import { CorporateProfileButton } from "./CorporateProfileButton";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-transparent text-neutral-900"
    >

      <div className="container-corporate relative py-24 sm:py-32 lg:py-40">
        <div className="flex items-center gap-3 text-neutral-500">
          <Building2 className="h-8 w-8" aria-hidden />
          <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]">
            SHATHI Group
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl font-serif text-4xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-5xl lg:text-6xl text-balance"
        >
          SHATHI Group of Companies
        </h1>

        <p           className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-600 sm:text-lg text-balance">
          A diversified portfolio of trusted businesses — built on integrity,
          driven by innovation, and focused on long-term value.
        </p>

        <nav
          aria-label="Our subsidiaries"
          className="mt-8 flex flex-wrap items-center gap-2.5"
        >
          <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Our subsidiaries
          </span>
          {companies.map((company) => (
            <PerspectiveCard key={company.id}>
              <a
                href="#businesses"
                className="rounded-full bg-white/70 px-4 py-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700 border border-slate-300/80 backdrop-blur-sm transition hover:bg-white hover:border-slate-400 hover:text-neutral-900"
              >
                {company.name}
              </a>
            </PerspectiveCard>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Partner With Us
          </a>
          <a
            href="#businesses"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-[#F1F3F5] px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900 backdrop-blur-sm transition hover:border-slate-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
          >
            Explore Our Brands
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mt-10">
          <CorporateProfileButton />
        </div>
      </div>
    </section>
  );
}