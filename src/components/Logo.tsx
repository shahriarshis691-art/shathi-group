import { Building2 } from "lucide-react";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-navy-800 ${className}`}
      aria-label="SHATHI Group home"
    >
      <Building2 className="h-6 w-6 text-gold-500" aria-hidden />
      <span className="text-lg font-semibold tracking-tight">
        SHATHI<span className="text-gold-500"> Group</span>
      </span>
    </Link>
  );
}