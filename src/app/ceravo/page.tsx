import type { Metadata } from "next";
import { CeravoPageClient } from "./CeravoPageClient";

export const metadata: Metadata = {
  title: "CE R A VO Tiles & Ceramics",
  description:
    "Premium porcelain slabs, ceramic finishes, and luxury building materials for residential, hospitality, and commercial architecture.",
  alternates: { canonical: "/ceravo" },
};

export default function CeravoPage() {
  return <CeravoPageClient />;
}
