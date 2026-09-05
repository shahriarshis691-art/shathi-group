import Image from "next/image";
import Link from "next/link";
import { cortexEngineers } from "@/data/cortexEngineers";

export function CortexGallery() {
  return (
    <section className="bg-[#F7F8FA] pb-24">
      <div className="mx-auto max-w-7xl px-6 mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cortexEngineers.map((engineer, index) => (
            <Link
              key={engineer.slug}
              href={`/companies/cortex-softsolutions/engineers/${engineer.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={engineer.image}
                    alt={engineer.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    [ {String(index + 1).padStart(2, "0")} ]
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-bold uppercase tracking-[0.14em] text-neutral-900">
                    {engineer.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-600">
                    {engineer.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
