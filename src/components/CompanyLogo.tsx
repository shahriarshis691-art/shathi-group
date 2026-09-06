"use client";

import { useState } from "react";
import Image from "next/image";
import { type Company } from "@/data/companies";

export function CompanyLogo({
  company,
  size = 48,
}: {
  company: Company;
  size?: number;
}) {
  const [errored, setErrored] = useState(false);

  const initials = company.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (errored) {
    return (
      <span
        aria-label={company.name}
        className="flex items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-corporate"
        style={{ width: size, height: size }}
        title={company.name}
      >
        <span className="text-sm font-semibold tracking-tight">{initials}</span>
      </span>
    );
  }

  return (
    <Image
      src={company.logoPlaceholder}
      alt={company.name}
      width={size}
      height={size}
      onError={() => setErrored(true)}
      className="rounded-xl object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}
