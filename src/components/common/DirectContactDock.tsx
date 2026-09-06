"use client";

import { directContacts } from "@/data/contact";

const WHATSAPP_NUMBER = "8801979614216";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hello, I would like to inquire about your services"
);
const PHONE_NUMBER = "+8801979614216";

export function DirectContactDock() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2 sm:right-6">
      <div className="flex items-center gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-950/90 p-3.5 text-white shadow-xl backdrop-blur-md transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-neutral-900 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="sr-only">WhatsApp</span>
        </a>

        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call SHATHI Group"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-950/90 p-3.5 text-white shadow-xl backdrop-blur-md transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-neutral-900 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="sr-only">Call</span>
        </a>
      </div>

      <div className="flex flex-col gap-3 rounded-lg border border-neutral-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:flex-row sm:items-center">
        <a
          href={directContacts.corporate.href}
          aria-label={`Email ${directContacts.corporate.label}`}
          className="flex min-h-11 items-center gap-1.5 font-mono text-xs text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-sm"
        >
          <span>{directContacts.corporate.email}</span>
        </a>
        <span className="hidden text-neutral-400 sm:inline" aria-hidden="true">/</span>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
            {directContacts.cortex.label}
          </span>
          <a
            href={directContacts.cortex.href}
            aria-label={`Email ${directContacts.cortex.label}`}
            className="flex min-h-11 items-center gap-1.5 font-mono text-xs text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-sm"
          >
            <span>{directContacts.cortex.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
