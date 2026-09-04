import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { companies } from "@/data/companies";
import { CorporateProfileButton } from "./CorporateProfileButton";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-corporate-gradient text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_15%_20%,rgba(210,168,78,0.30),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.10),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-white/5 blur-2xl"
      />

      <div className="container-corporate relative py-24 sm:py-32 lg:py-40">
        <div className="flex items-center gap-3 text-gold-300">
          <Building2 className="h-8 w-8" aria-hidden />
          <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]">
            SHATHI Group
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl font-serif text-4xl font-bold uppercase tracking-[0.12em] text-white sm:text-5xl lg:text-6xl text-balance"
        >
          SHATHI Group of Companies
        </h1>

        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-200 sm:text-lg text-balance">
          A diversified portfolio of trusted businesses — built on integrity,
          driven by innovation, and focused on long-term value.
        </p>

        <nav
          aria-label="Our subsidiaries"
          className="mt-8 flex flex-wrap items-center gap-2.5"
        >
          <span className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Our subsidiaries
          </span>
          {companies.map((company) => (
            <a
              key={company.id}
              href="#businesses"
              className="rounded-full bg-white/10 px-4 py-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-white/20 hover:text-gold-300"
            >
              {company.name}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 shadow-corporate transition hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Partner With Us
          </a>
          <a
            href="#businesses"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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