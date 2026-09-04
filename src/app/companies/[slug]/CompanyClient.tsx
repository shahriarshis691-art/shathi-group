"use client";

import { useState } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Factory, Gauge, Gem, Shield, Sparkles, Wrench } from "lucide-react";
import { type Company } from "@/data/companies";
import { CompanyLogo } from "@/components/CompanyLogo";
import { ContactModal } from "@/components/ContactModal";

type Slug = Company["slug"];

const companyThemes: Record<Slug, {
  heroClass: string;
  heroPattern: string;
  backNavClass: string;
  sectionClass: string;
  sectionAltClass: string;
  cardClass: string;
  cardBorder: string;
  badgeClass: string;
  badgeText: string;
  ctaClass: string;
  ctaHover: string;
  ctaText: string;
  heading: string;
  body: string;
  subtle: string;
  inputBg: string;
  inputBorder: string;
  inputText: string;
}> = {
  "shis-fashion": {
    heroClass: "bg-slate-950 text-white",
    heroPattern: "[background-image:radial-gradient(circle_at_20%_30%,rgba(210,168,78,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]",
    backNavClass: "border-slate-800 bg-slate-950",
    sectionClass: "bg-white text-slate-900",
    sectionAltClass: "bg-slate-50 text-slate-900",
    cardClass: "bg-slate-50",
    cardBorder: "border-slate-200",
    badgeClass: "bg-gold-500/20 text-gold-300 ring-gold-400/30",
    badgeText: "text-gold-400",
    ctaClass: "bg-gold-500 text-navy-900",
    ctaHover: "hover:bg-gold-400",
    ctaText: "text-gold-600",
    heading: "text-slate-900",
    body: "text-slate-600",
    subtle: "text-slate-400",
    inputBg: "bg-white",
    inputBorder: "border-slate-300",
    inputText: "text-slate-900",
  },
  "xeroxii": {
    heroClass: "bg-slate-50 text-navy-900",
    heroPattern: "[background-image:radial-gradient(circle_at_50%_50%,rgba(15,39,65,0.06),transparent_70%)]",
    backNavClass: "border-slate-200 bg-slate-50",
    sectionClass: "bg-white text-slate-900",
    sectionAltClass: "bg-slate-50 text-slate-900",
    cardClass: "bg-white",
    cardBorder: "border-slate-200",
    badgeClass: "bg-navy-800/10 text-navy-700 ring-navy-700/20",
    badgeText: "text-gold-600",
    ctaClass: "bg-navy-800 text-white",
    ctaHover: "hover:bg-navy-700",
    ctaText: "text-gold-600",
    heading: "text-navy-900",
    body: "text-slate-600",
    subtle: "text-slate-400",
    inputBg: "bg-white",
    inputBorder: "border-slate-300",
    inputText: "text-slate-900",
  },
  "ceravo-tiles": {
    heroClass: "bg-white text-navy-900",
    heroPattern: "[background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:40px_40px]",
    backNavClass: "border-slate-200 bg-white",
    sectionClass: "bg-white text-slate-900",
    sectionAltClass: "bg-slate-50 text-slate-900",
    cardClass: "bg-white",
    cardBorder: "border-slate-200",
    badgeClass: "bg-teal-50 text-teal-700 ring-teal-200/70",
    badgeText: "text-teal-600",
    ctaClass: "bg-navy-800 text-white",
    ctaHover: "hover:bg-navy-700",
    ctaText: "text-teal-600",
    heading: "text-navy-900",
    body: "text-slate-600",
    subtle: "text-slate-400",
    inputBg: "bg-white",
    inputBorder: "border-slate-300",
    inputText: "text-slate-900",
  },
  "cortex-softsolutions": {
    heroClass: "bg-slate-950 text-white",
    heroPattern: "[background-image:radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(210,168,78,0.1),transparent_50%),linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:32px_32px,100%_100%]",
    backNavClass: "border-slate-800 bg-slate-950",
    sectionClass: "bg-slate-900 text-slate-100",
    sectionAltClass: "bg-slate-800 text-slate-100",
    cardClass: "bg-slate-800",
    cardBorder: "border-slate-700",
    badgeClass: "bg-indigo-500/20 text-indigo-300 ring-indigo-400/30",
    badgeText: "text-indigo-400",
    ctaClass: "bg-indigo-500 text-white",
    ctaHover: "hover:bg-indigo-400",
    ctaText: "text-indigo-400",
    heading: "text-white",
    body: "text-slate-400",
    subtle: "text-slate-500",
    inputBg: "bg-slate-800",
    inputBorder: "border-slate-600",
    inputText: "text-slate-100",
  },
};

interface CompanyClientProps {
  company: Company;
}

function SpecCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800/5 text-navy-800">
          {icon}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            {title}
          </p>
          <p className="text-lg font-semibold text-navy-900">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-sm font-semibold text-white">
        {number}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}

interface CompanyClientProps {
  company: Company;
}

export function CompanyClient({ company }: CompanyClientProps) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const t = companyThemes[company.slug];

  return (
    <>
      <ContactModal
        company={inquiryOpen ? company : null}
        onClose={() => setInquiryOpen(false)}
      />

      {/* Back navigation */}
      <nav className={`border-b ${t.backNavClass}`} aria-label="Breadcrumb">
        <div className="container-corporate">
          <a
            href="/"
            className="inline-flex items-center gap-2 py-4 text-sm font-medium text-slate-600 transition hover:text-navy-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to SHATHI Group
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className={`relative overflow-hidden ${t.heroClass}`}>
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 opacity-100 ${t.heroPattern}`}
        />
        <div className="container-corporate relative py-16 sm:py-24 lg:py-32">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <CompanyLogo company={company} size={48} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {company.category}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {company.name}
              </h1>
            </div>
          </div>

          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${t.body === "text-slate-400" ? "text-slate-300" : "text-slate-600"} text-balance`}>
            {company.tagline}
          </p>
          <p className={`mt-4 max-w-3xl text-base leading-relaxed ${t.body === "text-slate-400" ? "text-slate-400" : "text-slate-600"} text-balance`}>
            {company.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setInquiryOpen(true)}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-corporate transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${t.ctaClass} ${t.ctaHover}`}
            >
              Direct Inquiry / Schedule Meeting
            </button>
            {company.storeUrl && company.slug === "shis-fashion" && (
              <a
                href={company.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Request Catalog
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className={`py-16 sm:py-20 ${t.sectionClass}`}>
        <div className="container-corporate">
          <div className="mx-auto max-w-3xl">
            <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
              Our Story
            </p>
            <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
              Crafted with purpose
            </h2>
            <p className={`mt-6 text-base leading-relaxed ${t.body} text-balance`}>
              {company.brandStory}
            </p>
          </div>
        </div>
      </section>

      {/* SHIS FASHION */}
      {company.slug === "shis-fashion" && (
        <>
          <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Fabric Details
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Built on premium materials
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                Every piece is engineered from the ground up with fabric integrity at its core.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                      <Sparkles className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900">Premium Pima Cotton</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Extra-long staple fibers woven into fabrics with superior softness, strength, and a luxurious hand feel that holds shape season after season.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <Gem className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900">Acid-Wash Graphics</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Signature acid-washed treatments applied to denim and jersey bases, creating one-of-a-kind faded textures with a laid-back luxe attitude.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                      <Factory className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900">Modern Urban Fits</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Tailored silhouettes designed for contemporary wardrobes — structured shoulders, tapered legs, and dropped shoulders that move with the city.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`py-16 sm:py-20 ${t.sectionClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Lookbook
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Seasonal edits
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                A curated selection of silhouettes and fabric stories from the latest collection.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: "Urban Casual", gradient: "bg-gradient-to-br from-slate-800 to-slate-900" },
                  { label: "Evening Blazer", gradient: "bg-gradient-to-br from-navy-800 to-navy-900" },
                  { label: "Acid-Wash Tee", gradient: "bg-gradient-to-br from-rose-900 to-slate-900" },
                  { label: "Tailored Chinos", gradient: "bg-gradient-to-br from-slate-700 to-slate-800" },
                  { label: "Outerwear Layer", gradient: "bg-gradient-to-br from-neutral-800 to-slate-900" },
                  { label: "Capsule Core", gradient: "bg-gradient-to-br from-gold-900 to-slate-900" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`aspect-[3/4] rounded-2xl ${item.gradient} flex items-end p-4 shadow-sm transition hover:scale-[1.02]`}
                  >
                    <span className="text-sm font-medium text-white/90">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={company.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-corporate transition ${t.ctaClass} ${t.ctaHover}`}
                >
                  Request Catalog
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* XEROXII */}
      {company.slug === "xeroxii" && (
        <>
          <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Specifications
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Engineered to last decades
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                Every XeroXii timepiece is built around exacting standards — from the movement to the crystal.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <SpecCard
                  title="Movement"
                  value="Swiss Automatic"
                  description="Swiss-grade ETA calibre with 25 jewels and a 38-hour power reserve, regulated in six positions."
                  icon={<Gauge className="h-5 w-5" aria-hidden />}
                />
                <SpecCard
                  title="Crystal"
                  value="Box Sapphire"
                  description="Scratch-resistant sapphire crystal with anti-reflective coating on both sides for optimal legibility."
                  icon={<Gem className="h-5 w-5" aria-hidden />}
                />
                <SpecCard
                  title="Water Resistance"
                  value="100 Metres"
                  description="Rated to 100m / 10ATM — suitable for swimming and snorkeling, but not diving."
                  icon={<Shield className="h-5 w-5" aria-hidden />}
                />
                <SpecCard
                  title="Warranty"
                  value="5 Years"
                  description="International warranty covering manufacturing defects, with worldwide service partner coverage."
                  icon={<CheckCircle2 className="h-5 w-5" aria-hidden />}
                />
              </div>
            </div>
          </section>

          <section className={`py-16 sm:py-20 ${t.sectionClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Horological Craft
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Hand-finished detail
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                From movement assembly to final polishing, every stage is completed by hand.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StepCard
                  number="01"
                  title="Movement Assembly"
                  description="Components are hand-assembled, regulated, and timed over 21 days."
                />
                <StepCard
                  number="02"
                  title="Cotes de Genevre"
                  description="Movement plates receive hand-finished Geneva stripes and perlage."
                />
                <StepCard
                  number="03"
                  title="Case Construction"
                  description="316L stainless steel cases are machined, brushed, and polished by hand."
                />
                <StepCard
                  number="04"
                  title="Final Regulation"
                  description="Each piece is timed daily for 15 days before leaving the atelier."
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* CERAVO TILES */}
      {company.slug === "ceravo-tiles" && (
        <>
          <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Finish Collection
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Textures and finishes
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                Explore our signature surface treatments, engineered for architectural impact.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-stone-200 to-stone-300 mb-4" />
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${t.badgeClass}`}>
                    Matte
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy-900">Matte Finish</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Non-reflective surface with a soft-touch feel. Ideal for high-traffic floors and feature walls where glare must be minimized.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-white mb-4" />
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${t.badgeClass}`}>
                    Polished
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy-900">Polished Finish</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    High-gloss reflective surface that amplifies natural and artificial light. Perfect for lobby spaces and contemporary interiors.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 mb-4" />
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${t.badgeClass}`}>
                    Porcelain
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy-900">Porcelain Grade</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Dense, vitrified body with PEI IV wear rating. Engineered for commercial load and extreme temperature variation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`py-16 sm:py-20 ${t.sectionClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Project Gallery
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Architectural projects
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                A selection of residential and commercial spaces specified with Ceravo surfaces.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {[
                  { label: "Luxury Residence", location: "Mumbai", gradient: "bg-gradient-to-br from-teal-100 to-teal-200" },
                  { label: "Corporate Lobby", location: "Delhi", gradient: "bg-gradient-to-br from-slate-100 to-slate-200" },
                  { label: "Boutique Hotel", location: "Bangalore", gradient: "bg-gradient-to-br from-orange-100 to-orange-200" },
                  { label: "Retail Showroom", location: "Pune", gradient: "bg-gradient-to-br from-stone-100 to-stone-200" },
                ].map((project) => (
                  <div
                    key={project.label}
                    className={`group overflow-hidden rounded-2xl border ${t.cardBorder} ${t.cardClass} shadow-sm transition hover:shadow-md`}
                  >
                    <div className={`aspect-[4/3] ${project.gradient} flex items-center justify-center`}>
                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        {project.location}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-navy-900">{project.label}</h3>
                      <p className="text-xs text-slate-500">{project.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CORTEX */}
      {company.slug === "cortex-softsolutions" && (
        <>
          <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Core Competencies
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Enterprise-grade capabilities
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                We design, build, and operate platforms that scale with the businesses they serve.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                      <Factory className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Enterprise Software</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    Custom platforms built for scale — ERP, CRM, and workflow automation tailored to operational realities.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                      <Wrench className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Cloud Systems</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    Cloud-native architecture on AWS and Azure with auto-scaling, CI/CD pipelines, and 99.99% availability targets.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                      <Sparkles className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-white">AI Systems</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    Predictive analytics, NLP pipelines, and computer vision models integrated directly into enterprise workflows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`py-16 sm:py-20 ${t.sectionClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Technology Stack
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                What we build with
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                Modern, battle-tested tooling chosen for performance and developer experience.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "TensorFlow",
                  "AWS",
                  "Azure",
                  "Docker",
                  "Kubernetes",
                  "PostgreSQL",
                  "Redis",
                  "GraphQL",
                  "Terraform",
                  "Kafka",
                  "OpenAI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset ${t.badgeClass}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
            <div className="container-corporate">
              <p className={`text-xs font-semibold uppercase tracking-widest ${t.ctaText}`}>
                Case Studies
              </p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
                Impact in production
              </h2>
              <p className={`mt-4 max-w-2xl text-base ${t.body}`}>
                Selected outcomes from enterprise engagements across industries.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">FinTech Platform</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Real-time payment orchestration</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Built a settlement layer processing 2M+ daily transactions with 99.98% uptime.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-400">
                    <span>View case study</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </div>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Healthcare AI</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Diagnostic workflow automation</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Reduced report turnaround by 40% using NLP triage and intelligent routing.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-400">
                    <span>View case study</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </div>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Retail Cloud</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Omnichannel inventory sync</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Unified 3x throughput across 1,200+ SKUs with real-time stock visibility.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-400">
                    <span>View case study</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Bottom CTA */}
      <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
        <div className="container-corporate text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${t.heading} sm:text-4xl`}>
            Ready to explore {company.name}?
          </h2>
          <p className={`mt-4 text-base ${t.body}`}>
            Get in touch to schedule a meeting or request more information.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => setInquiryOpen(true)}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-corporate transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${t.ctaClass} ${t.ctaHover}`}
            >
              Direct Inquiry / Schedule Meeting
            </button>
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-navy-800 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Visit Website
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
