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
      className="relative py-16 sm:py-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-corporate relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
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
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/50" aria-hidden="true" />

              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200/80 text-slate-700 shadow-sm">
                <Icon className="h-5 w-5" aria-hidden />
              </span>

              <p className="relative mt-5 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl">
                {value}
              </p>
              <p className="relative mt-1 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                {label}
              </p>
              <p className="relative mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-neutral-600">
                {sub}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
