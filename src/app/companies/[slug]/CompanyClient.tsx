"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Factory, Gauge, Gem, Shield, Sparkles } from "lucide-react";
import { type Company } from "@/data/companies";
import { directContacts } from "@/data/contact";
import { CompanyLogo } from "@/components/CompanyLogo";
import { useInquiryButton } from "@/hooks/useInquiryButton";
import { CortexShowcaseBanner } from "@/components/cortex/CortexShowcaseBanner";
import { CeravoDetailPage } from "@/components/ceravo/CeravoDetailPage";
import { CortexAbout } from "@/components/cortex/CortexAbout";
import { DeferredSection } from "@/components/DeferredSection";

const ShisLookbook = dynamic(
  () =>
    import("@/components/shis/ShisLookbook").then(
      (module) => module.ShisLookbook
    ),
  {
    ssr: false,
    loading: () => (
      <section aria-hidden className="min-h-[820px] bg-[#151515] sm:min-h-[960px] md:min-h-[185vh]" />
    ),
  }
);

const CortexProjectSlider = dynamic(
  () =>
    import("@/components/cortex/CortexProjectSlider").then(
      (module) => module.CortexProjectSlider
    ),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[600px] bg-white" />,
  }
);

const CortexGallery = dynamic(
  () =>
    import("@/components/cortex/CortexGallery").then(
      (module) => module.CortexGallery
    ),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[540px] bg-white" />,
  }
);

const CortexSlider = dynamic(
  () =>
    import("@/components/cortex/CortexSlider").then(
      (module) => module.CortexSlider
    ),
  {
    ssr: false,
    loading: () => <section aria-hidden className="min-h-[620px] bg-[#EAECEF]" />,
  }
);

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
    heroClass: "bg-slate-950 text-white",
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
    heroClass: "bg-slate-950 text-white",
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
  "velorix-motors": {
    heroClass: "bg-[#121417] text-white",
    heroPattern: "[background-image:radial-gradient(circle_at_80%_20%,rgba(210,168,78,0.18),transparent_45%),radial-gradient(circle_at_20%_85%,rgba(255,255,255,0.08),transparent_45%)]",
    backNavClass: "border-neutral-800 bg-[#121417]",
    sectionClass: "bg-white text-slate-900",
    sectionAltClass: "bg-slate-100 text-slate-900",
    cardClass: "bg-[#121417]",
    cardBorder: "border-neutral-800",
    badgeClass: "bg-gold-500/15 text-gold-700 ring-gold-500/30",
    badgeText: "text-gold-600",
    ctaClass: "bg-gold-500 text-slate-950",
    ctaHover: "hover:bg-gold-400",
    ctaText: "text-gold-600",
    heading: "text-slate-900",
    body: "text-slate-600",
    subtle: "text-slate-400",
    inputBg: "bg-white",
    inputBorder: "border-slate-300",
    inputText: "text-slate-900",
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
          <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {title}
          </p>
          <p className="font-serif text-2xl font-bold uppercase tracking-[0.14em] text-navy-900 md:text-3xl">{value}</p>
        </div>
      </div>
      <p className="mt-3 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">{description}</p>
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
      <h3 className="mt-2 font-serif text-2xl font-bold uppercase tracking-[0.14em] text-navy-900 md:text-3xl">{title}</h3>
      <p className="mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">{description}</p>
    </div>
  );
}

function VisualFeatureCard({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="group relative flex min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#121417] p-7 text-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        className="object-cover opacity-35 transition duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121417]/10 via-[#121417]/65 to-[#121417]" />
      <div className="relative flex w-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            {eyebrow}
          </p>
          <ArrowUpRight
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </div>
        <h3 className="my-auto max-w-[16ch] font-serif text-2xl font-bold uppercase tracking-[0.14em] leading-tight">
          {title}
        </h3>
        <p className="border-t border-white/20 pt-4 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-200 line-clamp-3 md:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}

interface CompanyClientProps {
  company: Company;
}

export function CompanyClient({ company }: CompanyClientProps) {
  const openInquiry = useInquiryButton(company);
  const t = companyThemes[company.slug];

  if (company.slug === "ceravo-tiles") {
    return <CeravoDetailPage />;
  }

  return (
    <>
      {/* Back navigation */}
      {company.slug !== "cortex-softsolutions" && (
      <nav className={`border-b ${t.backNavClass}`} aria-label="Breadcrumb">
        <div className="container-corporate">
          <a
            href="/"
            className="inline-flex items-center gap-2 py-4 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 transition hover:text-navy-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to SHATHI Group
          </a>
        </div>
      </nav>
      )}

      {company.slug !== "cortex-softsolutions" && (
        <section className={`relative overflow-hidden ${t.heroClass}`}>
          <Image
            src={company.image}
            alt={company.imageAlt}
            fill
            sizes="100vw"
            className="object-cover opacity-75"
            loading="eager"
            decoding="async"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/35"
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 opacity-70 ${t.heroPattern}`}
          />
          <div className="container-corporate relative py-16 sm:py-24 lg:py-32">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                <CompanyLogo company={company} size={48} />
              </div>
              <div>
                <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  {company.category}
                </p>
                <h1 className="font-serif text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl lg:text-5xl text-balance">
                  {company.name}
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-slate-200 text-balance">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-3xl font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-300 md:text-[15px] text-balance">
              {company.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openInquiry}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] shadow-corporate transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${t.ctaClass} ${t.ctaHover}`}
              >
                Direct Inquiry / Schedule Meeting
              </button>
              {company.storeUrl && company.slug === "shis-fashion" && (
                <a
                  href={company.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                >
                  Request Catalog
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Brand Story */}
      {company.slug !== "cortex-softsolutions" && (
        <section
          id={company.slug === "cortex-softsolutions" ? "capabilities" : undefined}
          className={`py-16 sm:py-20 ${t.sectionClass}`}
        >
          <div className="container-corporate">
            <div className="mx-auto max-w-3xl">
              <p className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${t.ctaText}`}>
                Our Story
              </p>
              <h2 className={`mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
                Crafted with purpose
              </h2>
              <p className={`mt-6 font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px] text-balance`}>
                {company.brandStory}
              </p>
            </div>
          </div>
        </section>
      )}

      {company.slug === "cortex-softsolutions" && (
        <section className="pt-0">
          <CortexShowcaseBanner onOpenInquiry={openInquiry} />
          <section
            aria-label="CORTEXIO direct contact"
            className="border-y border-neutral-200 bg-white"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Direct communications
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:pt-0">
                <a
                  href={directContacts.corporate.href}
                  className="flex min-h-11 items-center gap-1.5 font-mono text-xs text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-sm"
                >
                  <span>{directContacts.corporate.email}</span>
                </a>
                <span className="hidden text-neutral-400 sm:inline" aria-hidden="true">/</span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                    {directContacts.cortex.label}
                  </span>
                  <a
                    href={directContacts.cortex.href}
                    aria-label={`Email ${directContacts.cortex.label}`}
                    className="flex min-h-11 items-center gap-1.5 font-mono text-xs text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-sm"
                  >
                    <span>{directContacts.cortex.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <CortexAbout />
          <DeferredSection className="min-h-[600px] bg-white">
            <CortexProjectSlider />
          </DeferredSection>
          <DeferredSection className="min-h-[540px] bg-white">
            <CortexGallery />
          </DeferredSection>
          <DeferredSection className="min-h-[620px] bg-[#EAECEF]">
            <CortexSlider />
          </DeferredSection>
        </section>
      )}

      {/* SHIS FASHION */}
      {company.slug === "shis-fashion" && (
        <>
          <DeferredSection className="min-h-[820px] bg-[#151515] sm:min-h-[960px] md:min-h-[185vh]">
            <ShisLookbook />
          </DeferredSection>

          <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
            <div className="container-corporate">
              <p className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${t.ctaText}`}>
                Fabric Details
              </p>
              <h2 className={`mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
                Built on premium materials
              </h2>
              <p className={`mt-4 max-w-2xl font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px]`}>
                Every piece is engineered from the ground up with fabric integrity at its core.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                      <Sparkles className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-[0.14em] text-navy-900 md:text-3xl">Premium Pima Cotton</h3>
                  </div>
                  <p className="mt-3 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">
                    Extra-long staple fibers woven into fabrics with superior softness, strength, and a luxurious hand feel that holds shape season after season.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <Gem className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-[0.14em] text-navy-900 md:text-3xl">Acid-Wash Graphics</h3>
                  </div>
                  <p className="mt-3 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">
                    Signature acid-washed treatments applied to denim and jersey bases, creating one-of-a-kind faded textures with a laid-back luxe attitude.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                      <Factory className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-[0.14em] text-navy-900 md:text-3xl">Modern Urban Fits</h3>
                  </div>
                  <p className="mt-3 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">
                    Tailored silhouettes designed for contemporary wardrobes — structured shoulders, tapered legs, and dropped shoulders that move with the city.
                  </p>
                </div>
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
              <p className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${t.ctaText}`}>
                Specifications
              </p>
              <h2 className={`mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
                Engineered to last decades
              </h2>
              <p className={`mt-4 max-w-2xl font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px]`}>
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
              <p className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${t.ctaText}`}>
                Horological Craft
              </p>
              <h2 className={`mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
                Hand-finished detail
              </h2>
              <p className={`mt-4 max-w-2xl font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px]`}>
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
              <p className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${t.ctaText}`}>
                Finish Collection
              </p>
              <h2 className={`mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
                Textures and finishes
              </h2>
              <p className={`mt-4 max-w-2xl font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px]`}>
                Explore our signature surface treatments, engineered for architectural impact.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-stone-200 to-stone-300 mb-4" />
                  <span className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset ${t.badgeClass}`}>
                    Matte
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold uppercase tracking-[0.14em] text-navy-900">Matte Finish</h3>
                  <p className="mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">
                    Non-reflective surface with a soft-touch feel. Ideal for high-traffic floors and feature walls where glare must be minimized.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-white mb-4" />
                  <span className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset ${t.badgeClass}`}>
                    Polished
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold uppercase tracking-[0.14em] text-navy-900">Polished Finish</h3>
                  <p className="mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">
                    High-gloss reflective surface that amplifies natural and artificial light. Perfect for lobby spaces and contemporary interiors.
                  </p>
                </div>

                <div className={`rounded-2xl border ${t.cardBorder} ${t.cardClass} p-6 shadow-sm transition hover:shadow-md`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 mb-4" />
                  <span className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset ${t.badgeClass}`}>
                    Porcelain
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold uppercase tracking-[0.14em] text-navy-900">Porcelain Grade</h3>
                  <p className="mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-600 md:text-[15px]">
                    Dense, vitrified body with PEI IV wear rating. Engineered for commercial load and extreme temperature variation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`py-16 sm:py-20 ${t.sectionClass}`}>
            <div className="container-corporate">
              <p className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${t.ctaText}`}>
                Project Gallery
              </p>
              <h2 className={`mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
                Architectural projects
              </h2>
              <p className={`mt-4 max-w-2xl font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px]`}>
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
                      <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {project.location}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold uppercase tracking-[0.14em] text-navy-900">{project.label}</h3>
                      <p className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{project.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* VELORIX MOTORS */}

      {/* VELORIX MOTORS */}
      {company.slug === "velorix-motors" && (
        <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
          <div className="container-corporate">
            <p className={`font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] ${t.ctaText}`}>
              Engineering Focus
            </p>
            <h2 className={`mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
              Performance with a quieter kind of confidence.
            </h2>
            <p className={`mt-4 max-w-2xl font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px]`}>
              Velorix combines responsive dynamics, thoughtful technology, and
              tailored ownership programs for modern mobility.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <VisualFeatureCard
                eyebrow="Dynamics"
                title="Driver-focused performance"
                description="A balanced chassis and responsive powertrain engineered to make every journey feel composed and connected."
                image={company.image}
                imageAlt={company.imageAlt}
              />
              <VisualFeatureCard
                eyebrow="Connected cockpit"
                title="Technology that stays intuitive"
                description="A calm, connected interior experience that keeps navigation, communication, and vehicle data close at hand."
                image={company.image}
                imageAlt={company.imageAlt}
              />
              <VisualFeatureCard
                eyebrow="Fleet programs"
                title="Mobility tailored to business"
                description="Flexible corporate fleet programs and ownership support designed around the needs of ambitious teams."
                image={company.image}
                imageAlt={company.imageAlt}
              />
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className={`py-16 sm:py-20 ${t.sectionAltClass}`}>
        <div className="container-corporate text-center">
          <h2 className={`font-serif text-3xl font-bold uppercase tracking-[0.12em] ${t.heading} sm:text-4xl`}>
            Ready to explore {company.name}?
          </h2>
<p className={`mt-4 font-sans text-sm md:text-[15px] font-normal leading-relaxed ${t.body} md:text-[15px]`}>
                Get in touch to schedule a meeting or request more information.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openInquiry}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] shadow-corporate transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${t.ctaClass} ${t.ctaHover}`}
                >
                  Direct Inquiry / Schedule Meeting
                </button>
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-navy-800 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
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
