"use client";

interface CeravoConsultationFloatProps {
  onInquiry: () => void;
}

export function CeravoConsultationFloat({
  onInquiry,
}: CeravoConsultationFloatProps) {
  return (
    <div className="fixed right-6 bottom-8 z-40 hidden sm:block">
      <button
        type="button"
        onClick={onInquiry}
        className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-neutral-950 bg-neutral-950 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white shadow-xl transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
        aria-label="Request consultation"
      >
        <span>Request consultation</span>
        <span aria-hidden="true" className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
}
