import { ArrowRight, Building2, Sparkles } from "lucide-react";

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
          <span className="text-sm font-medium tracking-widest uppercase">
            SHATHI Group
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance"
        >
          SHATHI Group of Companies
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 text-balance">
          A diversified portfolio of trusted businesses — built on integrity,
          driven by innovation, and focused on long-term value.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 shadow-corporate transition hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Partner With Us
          </a>
          <a
            href="#businesses"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Our Brands
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}