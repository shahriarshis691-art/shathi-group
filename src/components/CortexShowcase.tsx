import Image from "next/image";

const architectureSpecs = [
  "Enterprise Cloud Core",
  "Zero Recurring Overhead",
  "Next.js & Node Architecture",
  "Distributed Systems",
];

export function CortexShowcase() {
  return (
    <section
      aria-labelledby="cortex-showcase-heading"
      className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-neutral-200 bg-[#FAFAFA] text-neutral-950 select-none lg:flex-row"
    >
      <aside className="flex flex-col gap-8 border-b border-neutral-200 p-6 sm:p-8 lg:basis-[15%] lg:justify-between lg:border-r lg:border-b-0">
        <div className="font-mono text-sm font-bold tracking-[0.25em] text-neutral-900">
          CORTEX
        </div>

        <nav aria-label="Cortex architecture">
          <ul className="grid grid-cols-2 gap-x-5 gap-y-4 text-[11px] font-mono uppercase tracking-widest text-neutral-500 lg:block lg:space-y-4">
            {architectureSpecs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:info@cortexsoftsolutions.com"
          className="w-fit font-mono text-xs text-neutral-400 transition-colors hover:text-neutral-950"
        >
          info@cortexsoftsolutions.com
        </a>
      </aside>

      <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:basis-[38%] lg:p-16">
        <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-400">
          Enterprise Software Systems // Cortex
        </p>
        <h2
          id="cortex-showcase-heading"
          className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 uppercase md:text-5xl"
        >
          Architecting Sovereign Digital Infrastructure
        </h2>
        <p className="mt-4 max-w-md text-xs leading-relaxed text-neutral-600 md:text-sm">
          We eliminate recurring cloud dependencies through bespoke microservices,
          enterprise-grade architecture, and lifetime infrastructure ownership —
          giving organizations true operational autonomy.
        </p>
        <a
          href="/cortex"
          className="mt-8 inline-flex items-center justify-center border border-neutral-950 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white w-fit"
        >
          Connect with Cortex →
        </a>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden lg:h-auto lg:flex-1">
        <Image
          alt="Cortex Soft Solutions Leadership"
          className="object-cover object-top filter grayscale contrast-105 transition-transform duration-700 hover:scale-105"
          fill
          priority
          sizes="(min-width: 1024px) 47vw, 100vw"
          src="/cortex/image-Picsart-AiImageEnhancer.png"
        />
      </div>
    </section>
  );
}
