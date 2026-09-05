import Image from "next/image";
import Link from "next/link";

export function VelorixShowcase() {
  return (
    <section
      aria-labelledby="velorix-showcase-heading"
      className="relative flex min-h-[90vh] w-full flex-col overflow-hidden border-b border-neutral-200 lg:min-h-screen lg:flex-row"
    >
      <div className="relative flex w-full flex-col justify-between border-b border-neutral-200 bg-white p-8 sm:p-12 lg:w-[70%] lg:border-r lg:border-b-0 lg:p-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        />

        <div className="relative z-10">
          <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 font-serif text-sm text-neutral-800">
            V
          </div>
          <p className="mb-2 block text-center font-mono text-[10px] uppercase tracking-[0.45em] text-neutral-400">
            High Performance Automotive
          </p>
          <h2
            id="velorix-showcase-heading"
            className="text-center font-serif text-4xl font-normal uppercase tracking-[0.22em] text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            Velorix Motors
          </h2>
        </div>

        <div className="relative z-10 mx-auto my-auto flex h-[300px] w-full max-w-4xl items-center justify-center sm:h-[400px] md:h-[480px]">
          <Image
            src="/velorix/black-coupe.png"
            alt="Velorix Motors High Performance Coupe"
            fill
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.22)]"
          />
        </div>

        <Link
          href="/velorix"
          className="relative z-10 mx-auto inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-900 px-10 py-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
        >
          Explore Velorix →
        </Link>
      </div>

      <aside className="flex w-full flex-col justify-between bg-[#0A0A0A] p-8 text-white sm:p-10 lg:w-[30%] lg:p-12">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-3.5 w-0.5 bg-red-600" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-300">
              Unleash Pure Dynamism
            </span>
          </div>
          <p className="font-sans text-xs leading-relaxed text-neutral-400 sm:text-[13px]">
            Velorix brings performance, precision engineering, and bespoke craftsmanship into one
            uncompromising grand-touring experience. Every surface is tuned for response; every
            detail is built to make the road feel entirely yours.
          </p>

          <div className="relative mt-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6">
            <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-600">
              <span aria-hidden="true" className="h-3.5 w-px -rotate-45 origin-bottom bg-red-500" />
              <span aria-hidden="true" className="absolute bottom-1.5 h-1 w-1 rounded-full bg-neutral-300" />
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-400">
              Dynamic Telemetry
            </p>
            <p className="mt-2 font-serif text-xl font-normal italic text-white sm:text-2xl">
              Velocity, refined.
            </p>
            <div aria-hidden="true" className="mb-2 mt-4 h-0.5 w-12 bg-red-600" />
            <span className="mt-4 block font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">
              Bespoke performance configuration
            </span>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between border-t border-neutral-800/80 pt-8 font-mono text-xs text-neutral-400">
            <span>01 / 05</span>
            <div className="flex items-center gap-3">
              <button type="button" aria-label="Previous Velorix showcase" className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-white">
                ‹
              </button>
              <button type="button" aria-label="Next Velorix showcase" className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-white">
                ›
              </button>
            </div>
          </div>
          <a
            href="https://www.velorixmotors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 font-mono text-xs tracking-wider text-neutral-300 transition-colors hover:text-white"
          >
            Configure Velorix ↗
          </a>
        </div>
      </aside>
    </section>
  );
}
