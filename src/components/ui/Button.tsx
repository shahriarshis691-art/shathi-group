import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
  as?: React.ElementType;
}

export function Button({
  variant = "primary",
  asChild = false,
  as: As = "button",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-none transition-colors px-7 py-3.5 sm:px-9 sm:py-4";

  const primaryClasses = "bg-[#C5A265] text-[#0A0A0A] hover:bg-[#d4b074]";
  const secondaryClasses =
    "border border-[#C5A265] bg-black/60 text-[#C5A265] hover:bg-[#C5A265] hover:text-[#0A0A0A]";

  const variantClasses =
    variant === "primary" ? primaryClasses : secondaryClasses;

  const Comp = asChild ? "span" : As;
  return (
    <Comp
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
}