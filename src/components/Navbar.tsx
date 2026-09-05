"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useInquiryButton } from "@/hooks/useInquiryButton";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const openInquiry = useInquiryButton();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <nav
        className="container-corporate flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Logo priority variant="default" />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600 transition hover:text-neutral-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={openInquiry}
            className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
          >
            Get in Touch
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${
          open ? "block" : "hidden"
        } border-b border-neutral-200 bg-white/95 backdrop-blur-md`}
      >
        <div className="container-corporate py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-sans text-sm font-medium uppercase tracking-[0.14em] text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              openInquiry();
              setOpen(false);
            }}
            className="mt-4 block w-full rounded-full bg-neutral-950 px-5 py-3 text-center font-sans text-[11px] md:text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}
