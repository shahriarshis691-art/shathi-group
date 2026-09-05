import { VelorixDetailPage } from "@/components/velorix/VelorixDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VELORIX Motors",
  description:
    "VELORIX Motors is a performance-led mobility platform shaped by precision engineering, electric architecture, and bespoke craftsmanship.",
  alternates: { canonical: "/velorix" },
};

export default function VelorixRoot() {
  return <VelorixDetailPage />;
}
