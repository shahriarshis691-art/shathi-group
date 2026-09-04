"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { siteConfig } from "@/data/site";

const PROFILE_URL = "/docs/shathi-group-profile.pdf";
const PROFILE_FILENAME = "SHATHI-Group-Corporate-Profile.pdf";

export function CorporateProfileButton() {
  const [state, setState] = useState<"idle" | "checking" | "missing">("idle");

  async function handleDownload() {
    setState("checking");

    let available = false;
    try {
      const res = await fetch(PROFILE_URL, { method: "HEAD", cache: "no-store" });
      available = res.ok;
    } catch {
      available = false;
    }

    if (available) {
      const anchor = document.createElement("a");
      anchor.href = PROFILE_URL;
      anchor.download = PROFILE_FILENAME;
      anchor.rel = "noopener noreferrer";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setState("idle");
      return;
    }

    setState("missing");
  }

  const baseButton =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] shadow-corporate transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 disabled:cursor-not-allowed disabled:opacity-70";

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleDownload}
        disabled={state === "checking"}
        className={`${baseButton} bg-neutral-900 text-white hover:bg-neutral-800`}
      >
        {state === "checking" ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
              aria-hidden="true"
            />
            Checking for profile…
          </>
        ) : (
          <>
            <Download className="h-4 w-4" aria-hidden />
            Download Corporate Profile
          </>
        )}
      </button>

      {state === "missing" ? (
        <p className="max-w-md font-sans text-sm md:text-[15px] font-normal leading-relaxed text-neutral-600">
          The corporate profile PDF is being updated.{" "}
          <a
            href={`mailto:${siteConfig.email}?subject=Corporate Profile Request`}
            className="font-medium text-neutral-800 underline decoration-neutral-500 underline-offset-2 decoration-2 hover:text-neutral-900"
          >
            Request it via email
          </a>
          , and we will send it to you as soon as it is ready.
        </p>
      ) : null}
    </div>
  );
}
