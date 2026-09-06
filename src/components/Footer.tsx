"use client";

import { ArrowUp, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetInventory, navigationLinks, policyLinks, siteConfig, ventures } from "@/data/shathigroup";

interface FooterProps {
  /** Renders only on the homepage; the application shell renders all remaining routes. */
  readonly homeOnly?: boolean;
}

const footerVentureIds = new Set(["shis-fashion", "xeroxii", "ceravo-tiles", "velorix-motors"]);
const footerVentures = ventures.filter((venture) => footerVentureIds.has(venture.id));
const primaryLinks = navigationLinks.filter((link) => link.location === "primary" && link.label !== "Home");
const brandLogo = assetInventory.find(
  (asset) => asset.kind === "logo" && asset.alt === "SHATHI Group mark",
);

function SocialIcon({ label }: { readonly label: string }) {
  const Icon =
    label === "LinkedIn" ? Linkedin :
    label === "Facebook" ? Facebook :
    label === "Instagram" ? Instagram :
    label === "Twitter" ? Twitter :
    Youtube;

  return <Icon className="h-4 w-4" aria-hidden />;
}

export function Footer({ homeOnly = false }: FooterProps) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  if (homeOnly ? !isHomepage : isHomepage) return null;

  return (
    <footer className="border-t border-white/[0.08] bg-[#070708] text-luxury-50">
      <div className="container-corporate py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${siteConfig.shortName} home`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 p-2.5">
                {brandLogo ? <Image src={brandLogo.url} alt="" width={20} height={20} className="h-full w-full object-contain brightness-0 invert" /> : <span className="font-serif text-[#d4af37]">S</span>}
              </span>
              <span className="font-serif text-base font-semibold uppercase tracking-[0.18em] text-luxury-50">{siteConfig.shortName}</span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-luxury-300">{siteConfig.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-luxury-300 transition hover:border-[#d4af37]/55 hover:bg-[#d4af37]/10 hover:text-[#f4d77a]"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h2 className="font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880]">Navigate</h2>
              <ul className="mt-5 space-y-3">
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-luxury-300 transition hover:text-[#f4d77a]">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880]">Ventures</h2>
              <ul className="mt-5 space-y-3">
                {footerVentures.map((venture) => (
                  <li key={venture.id}>
                    <Link href={venture.route} className="text-sm text-luxury-300 transition hover:text-[#f4d77a]">{venture.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880]">Corporate</h2>
              <ul className="mt-5 space-y-3">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-luxury-300 transition hover:text-[#f4d77a]">{link.label}</Link>
                  </li>
                ))}
                <li><a href={siteConfig.contact.email.href} className="text-sm text-luxury-300 transition hover:text-[#f4d77a]">Corporate desk</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-luxury-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex min-h-10 items-center gap-2 self-start font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-luxury-300 transition hover:text-[#f4d77a] sm:self-auto"
          >
            Back to top
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] transition group-hover:border-[#d4af37]/55 group-hover:bg-[#d4af37]/10">
              <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
