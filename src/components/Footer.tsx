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
    <footer className="relative bg-white text-neutral-950">
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
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 border border-neutral-900"
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                     className="font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Sister Concerns
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {companies.map((company) => (
                <li key={company.id}>
                   <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-md border border-neutral-200 bg-white p-3 transition hover:border-neutral-950 hover:bg-neutral-50"
                  >
                      <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-neutral-400" />
                    <span>
                      <span className="block font-serif text-sm font-bold uppercase tracking-[0.14em] text-neutral-950">
                        {company.name}
                      </span>
                      <span className="block font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                        {company.category}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900">
              <MapPin className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
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
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900">
              <Phone className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Phone
              </p>
                 <a
                  href="tel:+910000000000"
                   className="mt-1 block font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-950"
              >
                +91 00000 00000
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900">
              <Mail className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Email
              </p>
                 <a
                  href="mailto:info@shathigroup.com"
                   className="mt-1 block font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-950"
              >
                info@shathigroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="container-corporate flex flex-col items-center justify-between gap-3 py-5 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 sm:flex-row">
        <p>
          &copy; {year} SHATHI Group of Companies. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="transition hover:text-neutral-950"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="transition hover:text-neutral-950"
          >
            Terms of Use
          </Link>
        </div>
      </div>
      </div>
    </footer>
  );
}
