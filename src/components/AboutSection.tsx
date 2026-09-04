import { Compass, Eye, ShieldCheck, Sparkles, Target } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Group Overview",
    body: "Founded on the principle that lasting businesses are built through integrity, SHATHI Group of Companies brings together a diversified portfolio spanning fashion, luxury, building materials, and home living. Each subsidiary operates with shared values and an unwavering focus on long-term value creation.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To deliver category-defining products and services through brands that customers trust — combining craftsmanship, innovation, and operational excellence across every market we serve.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be recognized as a globally respected Indian conglomerate that elevates standards in every category it enters, while uplifting the communities and partners that share our journey.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate Governance",
    body: "We are guided by an independent board, strict compliance protocols, and transparent reporting. Ethical conduct, accountability, and sustainability are non-negotiables — embedded in every policy and every decision.",
  },
];

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-gold-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-navy-100/60 blur-3xl"
      />

      <div className="container-corporate relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            <Sparkles className="h-4 w-4" aria-hidden />
            About SHATHI Group
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-slate-900 sm:text-4xl lg:text-5xl text-balance"
          >
            A diversified group built on trust.
          </h2>
          <p className="mt-5 font-sans text-sm md:text-[15px] font-normal text-slate-600 leading-relaxed text-balance">
            SHATHI Group of Companies is a house of brands — uniting
            industry-leading businesses under a single standard of excellence,
            governance, and customer commitment.
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {pillars.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <article className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-corporate transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300/70 hover:shadow-corporate-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-corporate transition-colors group-hover:bg-navy-800">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold uppercase tracking-[0.14em] text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 font-sans text-sm md:text-[15px] font-normal text-slate-600 leading-relaxed">
                  {body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}