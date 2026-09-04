"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2 } from "lucide-react";

export type LogoVariant = "default" | "inverse";

const textVariant: Record<LogoVariant, string> = {
  default: "text-neutral-100",
  inverse: "text-white",
};

const accentVariant: Record<LogoVariant, string> = {
  default: "text-neutral-500",
  inverse: "text-neutral-400",
};

const fallbackVariant: Record<LogoVariant, string> = {
  default: "text-neutral-500",
  inverse: "text-neutral-400",
};

export interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  priority?: boolean;
}

export function Logo({ className, variant = "default", priority = false }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${textVariant[variant]} ${className ?? ""}`}
      aria-label="SHATHI Group home"
    >
      {imgError ? (
        <Building2
          className={`h-6 w-6 ${fallbackVariant[variant]}`}
          aria-hidden
        />
      ) : (
        <Image
          src="/logos/shathi-group.svg"
          alt="SHATHI Group mark"
          width={32}
          height={32}
          priority={priority}
          onError={() => setImgError(true)}
          className="h-8 w-8 object-contain"
        />
      )}
      <span className="font-serif text-lg font-bold uppercase tracking-[0.12em]">
        SHATHI<span className={accentVariant[variant]}> Group</span>
      </span>
    </Link>
  );
}
