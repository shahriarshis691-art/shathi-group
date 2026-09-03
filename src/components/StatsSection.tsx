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
      className="relative overflow-hidden bg-corporate-gradient text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(210,168,78,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_40%)]"
      />

      <div className="container-corporate relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
            By the Numbers
          </p>
          <h2
            id="stats-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-balance"
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
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white/10 hover:shadow-corporate-lg"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60"
              />

              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-navy-900">
                <Icon className="h-5 w-5" aria-hidden />
              </span>

              <p className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold-300">
                {label}
              </p>
              <p className="mt-2 text-xs text-slate-300">{sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}