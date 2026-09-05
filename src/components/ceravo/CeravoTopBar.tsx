import Link from "next/link";

const collectionSpecs = ["SLABS", "PORCELAIN", "ARCHITECTURAL MARBLE", "BATH SURFACES"];

export function CeravoTopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[#F9F9FB]/85 backdrop-blur-md supports-[backdrop-filter]:bg-[#F9F9FB]/70">
      <div className="container-corporate flex h-14 items-center justify-between">
        <Link
          href="/ceravo"
          className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-neutral-900"
          aria-current="page"
        >
          CE R A VO // TILES &amp; CERAMICS
        </Link>

        <nav
          aria-label="CE R A VO collection specifications"
          className="hidden items-center gap-6 md:flex"
        >
          {collectionSpecs.map((spec) => (
            <span
              key={spec}
              className="font-mono text-[11px] uppercase tracking-widest text-neutral-400"
            >
              {spec}
            </span>
          ))}
        </nav>

        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-neutral-950"
        >
          ← RETURN TO HOME
        </Link>
      </div>
    </header>
  );
}
