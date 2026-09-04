"use client";

import { useEffect, useState, useRef } from "react";
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
  const inquiryRef = useInquiryButton();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <nav
        className="container-corporate flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Logo priority />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-navy-800"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            ref={inquiryRef}
            type="button"
            className="inline-flex items-center rounded-full bg-navy-800 px-5 py-2 text-sm font-semibold text-white shadow-corporate transition hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            Get in Touch
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 md:hidden"
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
        } border-t border-slate-200/60 bg-white/95 backdrop-blur-md`}
      >
        <div className="container-corporate py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100 hover:text-navy-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            ref={inquiryRef}
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full rounded-full bg-navy-800 px-5 py-3 text-center text-sm font-semibold text-white shadow-corporate transition hover:bg-navy-700"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}