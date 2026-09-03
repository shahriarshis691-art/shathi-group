import { Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-corporate-gradient text-white">
        <div className="container-corporate py-20 sm:py-28">
          <div className="flex items-center gap-3 text-gold-300">
            <Building2 className="h-8 w-8" aria-hidden />
            <span className="text-sm font-medium tracking-widest uppercase">
              SHATHI Group
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            SHATHI Group of Companies
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 text-balance">
            A diversified portfolio of trusted businesses — built on integrity,
            driven by innovation, and focused on long-term value.
          </p>
        </div>
      </section>

      <section className="container-corporate py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Our Portfolio",
              description:
                "Discover the companies operating under the SHATHI umbrella.",
            },
            {
              title: "Leadership",
              description: "Meet the team steering the group forward.",
            },
            {
              title: "Careers",
              description:
                "Join a group that invests in people and growth.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-corporate transition hover:shadow-corporate-lg"
            >
              <h2 className="text-lg font-semibold text-navy-800">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}