"use client";

import { useState } from "react";
import Image from "next/image";
import { type Company } from "@/data/companies";

export function CompanyLogo({ company }: { company: Company }) {
  const [errored, setErrored] = useState(false);

  const initials = company.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (errored) {
    return (
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-corporate">
        <span className="text-sm font-semibold tracking-tight">{initials}</span>
      </span>
    );
  }

  return (
    <Image
      src={company.logoPlaceholder}
      alt={company.name}
      width={48}
      height={48}
      onError={() => setErrored(true)}
      className="rounded-xl object-contain"
    />
  );
}
