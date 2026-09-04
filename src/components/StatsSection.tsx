import { Award, Building2, HeartHandshake, MapPin } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "4+",
    label: "Strategic Brands",
    sub: "Across four industries",
  },
  {
    icon: Award,
    value: "Trusted",
    label: "Quality",
    sub: "Certified standards",
  },
  {
    icon: MapPin,
    value: "Pan-India",
    label: "Nationwide Footprint",
    sub: "Dealer & retail network",
  },
  {
    icon: HeartHandshake,
    value: "Always",
    label: "Customer First",
    sub: "Lifetime support",
  },
];

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-[#F1F3F5] text-neutral-900"
    >

      <div className="container-corporate relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            By the Numbers
          </p>
          <h2
            id="stats-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl text-balance"
          >
            Built on measurable commitment.
          </h2>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <li
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-slate-300/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white hover:shadow-corporate-lg"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-60"
              />

                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>

                <p className="mt-5 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {label}
              </p>
              <p className="mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-neutral-600">
                {sub}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}