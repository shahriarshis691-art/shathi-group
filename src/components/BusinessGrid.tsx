import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { companies, type Company } from "@/data/companies";

interface CardTheme {
  card: string;
  image: string;
  imageOverlay: string;
  eyebrow: string;
  divider: string;
  description: string;
}

const cardThemes: Record<string, CardTheme> = {
  "ceravo-tiles": {
    card: "bg-[#f8fafc] text-slate-900 border border-slate-200/80",
    image: "opacity-25 mix-blend-multiply",
    imageOverlay: "bg-gradient-to-b from-white/20 via-[#f8fafc]/45 to-[#f8fafc]",
    eyebrow: "text-slate-500",
    divider: "border-slate-300/80",
    description: "text-slate-600",
  },
  "shis-fashion": {
    card: "bg-[#1e3a3a] text-white border border-[#2d5656]",
    image: "opacity-35",
    imageOverlay: "bg-gradient-to-b from-[#1e3a3a]/25 via-[#1e3a3a]/70 to-[#1e3a3a]",
    eyebrow: "text-emerald-100/75",
    divider: "border-white/20",
    description: "text-slate-200",
  },
  "cortex-softsolutions": {
    card: "bg-[#121417] text-white border border-neutral-800",
    image: "opacity-30",
    imageOverlay: "bg-gradient-to-b from-[#121417]/20 via-[#121417]/70 to-[#121417]",
    eyebrow: "text-slate-400",
    divider: "border-white/15",
    description: "text-slate-300",
  },
  xeroxii: {
    card: "bg-[#eef4ef] text-slate-900 border border-slate-300/80",
    image: "opacity-20 mix-blend-multiply",
    imageOverlay: "bg-gradient-to-b from-[#eef4ef]/15 via-[#eef4ef]/55 to-[#eef4ef]",
    eyebrow: "text-slate-500",
    divider: "border-slate-300",
    description: "text-slate-600",
  },
  "velorix-motors": {
    card: "bg-[#121417] text-white border border-neutral-800",
    image: "opacity-40",
    imageOverlay: "bg-gradient-to-b from-[#121417]/15 via-[#121417]/65 to-[#121417]",
    eyebrow: "text-slate-400",
    divider: "border-white/15",
    description: "text-slate-300",
  },
};

const showcaseOrder = [
  "ceravo-tiles",
  "shis-fashion",
  "cortex-softsolutions",
  "xeroxii",
  "velorix-motors",
];

const showcaseCompanies = showcaseOrder.flatMap((id) => {
  const company = companies.find((item) => item.id === id);
  return company ? [company] : [];
});

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
          {showcaseCompanies.map((company) => (
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
  const theme = cardThemes[company.id] ?? cardThemes["cortex-softsolutions"];

  return (
    <Link
      href={`/companies/${company.slug}`}
      aria-label={`Explore ${company.name}`}
      className={`group relative flex aspect-[4/5] min-h-[380px] overflow-hidden rounded-[1.6rem] p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 sm:p-10 ${theme.card}`}
    >
      <Image
        src={company.image}
        alt=""
        fill
        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        className={`object-cover transition duration-700 group-hover:scale-105 ${theme.image}`}
      />
      <span aria-hidden="true" className={`absolute inset-0 ${theme.imageOverlay}`} />

      <span className="relative flex w-full flex-col">
        <span className="flex items-start justify-between gap-6">
          <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${theme.eyebrow}`}>
            {company.category}
          </span>
          <ArrowUpRight
            className="h-5 w-5 flex-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </span>

        <h3 className="my-auto max-w-[13ch] text-2xl font-bold leading-tight tracking-tight md:text-3xl">
          {company.name}
        </h3>

        <span className={`border-t pt-5 ${theme.divider}`}>
          <span className={`block text-sm font-normal leading-relaxed line-clamp-3 ${theme.description}`}>
            {company.description}
          </span>
        </span>
      </span>
    </Link>
  );
}
