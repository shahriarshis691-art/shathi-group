import type { Metadata } from "next";
import { CortexPageClient } from "./CortexPageClient";

export const metadata: Metadata = {
  title: "CORTEXIO Softsolutions",
  description:
    "CORTEXIO Softsolutions engineers sovereign enterprise platforms, scalable digital systems, and high-performance product experiences.",
  alternates: { canonical: "/companies/cortex-softsolutions" },
  robots: { index: false, follow: true },
};

export default function CortexPage() {
  return <CortexPageClient />;
}
