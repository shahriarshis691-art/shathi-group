"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { companies } from "@/data/companies";
import { Logo } from "./Logo";
import { useInquiryButton } from "@/hooks/useInquiryButton";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Leadership", href: "/leadership" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  const year = new Date().getFullYear();
  const openInquiry = useInquiryButton();

  return (
    <footer className="relative bg-[#DCE3EA] text-neutral-800">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/3 rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="container-corporate py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="default" />
            <p className="mt-4 max-w-sm font-sans text-sm md:text-[15px] font-normal leading-relaxed text-neutral-600">
              SHATHI Group of Companies is a diversified corporate portfolio
              spanning fashion, luxury, building materials, and home living —
              united by integrity, craftsmanship, and long-term value.
            </p>

            <button
              type="button"
              onClick={openInquiry}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            >
              Corporate Inquiry
            </button>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-400/50 bg-white/50 text-neutral-600 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                     className="font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
              Sister Concerns
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {companies.map((company) => (
                <li key={company.id}>
                   <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-md border border-white/60 bg-white/40 p-3 transition hover:border-neutral-900 hover:bg-white"
                  >
                      <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-neutral-500" />
                    <span>
                      <span className="block font-serif text-sm font-bold uppercase tracking-[0.14em] text-neutral-900">
                        {company.name}
                      </span>
                      <span className="block font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                        {company.category}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-slate-300/60 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-300/50 text-neutral-600">
              <MapPin className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Corporate Office
              </p>
               <p className="mt-1 font-sans text-sm md:text-[15px] font-normal text-neutral-600">
                SHATHI Tower, Corporate Park,
                <br />
                Main Business District, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-300/50 text-neutral-600">
              <Phone className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Phone
              </p>
                 <a
                  href="tel:+910000000000"
                   className="mt-1 block font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-900"
              >
                +91 00000 00000
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-300/50 text-neutral-600">
              <Mail className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Email
              </p>
                 <a
                  href="mailto:info@shathigroup.com"
                   className="mt-1 block font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-900"
              >
                info@shathigroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300/60">
        <div className="container-corporate flex flex-col items-center justify-between gap-3 py-5 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-600 sm:flex-row">
        <p>
          &copy; {year} SHATHI Group of Companies. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="transition hover:text-neutral-900"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="transition hover:text-neutral-900"
          >
            Terms of Use
          </Link>
        </div>
      </div>
      </div>
    </footer>
  );
}
