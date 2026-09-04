"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { CompanyLogo } from "./CompanyLogo";
import { type Company } from "@/data/companies";

export interface SubsidiaryModalProps {
  company: Company | null;
  onClose: () => void;
}

export function SubsidiaryModal({ company, onClose }: SubsidiaryModalProps) {
  useEffect(() => {
    if (!company) return;

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeydown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = previousOverflow;
    };
  }, [company, onClose]);

  if (!company) return null;

  const titleId = `subsidiary-title-${company.id}`;
  const descId = `subsidiary-desc-${company.id}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm"
      aria-hidden={!company}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative mb-4 w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex-none">
              <CompanyLogo company={company} size={56} />
            </div>
            <div>
<h2
              id={titleId}
              className="font-serif text-2xl font-bold uppercase tracking-[0.14em] text-slate-900 md:text-3xl"
            >
              {company.name}
            </h2>
            <p className="font-sans text-sm font-medium italic text-gold-600">
              {company.tagline}
            </p>
            <span className="mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 ring-1 ring-inset ring-slate-200/70">
              {company.category}
            </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            aria-label="Close brand details"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div
          id={descId}
          className="space-y-5 px-6 pb-6 font-sans text-sm leading-relaxed text-slate-600 md:text-[15px]"
        >
          {company.brandStory ? (
            <p className="leading-relaxed text-slate-700">{company.brandStory}</p>
          ) : null}

          {company.productVerticals && company.productVerticals.length > 0 ? (
            <div>
              <h3 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Key Product Verticals
              </h3>
              <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {company.productVerticals.map((vertical) => (
                  <li
                    key={vertical}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gold-500"
                      aria-hidden="true"
                    />
                    <span>{vertical}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {company.flagshipHighlights &&
          company.flagshipHighlights.length > 0 ? (
            <div>
              <h3 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Flagship Highlights
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 marker:text-gold-500">
                {company.flagshipHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {company.features && company.features.length > 0 ? (
            <div>
              <h3 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Services & Features
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 marker:text-gold-500">
                {company.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="border-t border-slate-100 px-6 py-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-5 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Visit {company.name} Website
            </a>
            {company.storeUrl ? (
              <a
                href={company.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-800 px-5 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-navy-800 transition hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Shop Online
              </a>
            ) : null}
          </div>
        </div>
      </aside>
    </div>
  );
}
