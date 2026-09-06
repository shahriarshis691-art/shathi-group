"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assetInventory, navigationLinks, siteConfig } from "@/data/shathigroup";
import { useInquiryButton } from "@/hooks/useInquiryButton";

interface NavbarProps {
  /** Renders only on the homepage; the global layout renders the remaining routes. */
  readonly homeOnly?: boolean;
}

const primaryLinks = navigationLinks.filter((link) => link.location === "primary");
const brandLogo = assetInventory.find(
  (asset) => asset.kind === "logo" && asset.alt === "SHATHI Group mark",
);

export function Navbar({ homeOnly = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const openInquiry = useInquiryButton();
  const usesDedicatedBrandHeader =
    pathname === "/ceravo" ||
    pathname === "/velorix" ||
    pathname === "/companies/ceravo-tiles";
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (usesDedicatedBrandHeader || (homeOnly ? !isHomepage : isHomepage)) {
    return null;
  }

  const closeMenu = () => setIsOpen(false);
  const handleInquiry = () => {
    openInquiry();
    closeMenu();
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <motion.nav
        aria-label="Primary navigation"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0e0e11]/80 px-4 shadow-luxury backdrop-blur-md sm:px-5"
      >
        <Link
          href="/"
          aria-label={`${siteConfig.shortName} home`}
          className="group inline-flex min-h-11 items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 p-2 transition duration-300 group-hover:border-[#d4af37]/70 group-hover:bg-[#d4af37]/15">
            {brandLogo ? (
              <Image
                src={brandLogo.url}
                alt=""
                width={20}
                height={20}
                className="h-full w-full object-contain brightness-0 invert"
              />
            ) : (
              <span className="font-serif text-sm text-[#d4af37]">S</span>
            )}
          </span>
          <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-luxury-50 sm:text-base">
            {siteConfig.shortName}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative inline-flex min-h-11 items-center px-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-luxury-300 transition-colors duration-300 hover:text-[#f2eee4] after:absolute after:bottom-2 after:left-3 after:h-px after:w-0 after:bg-[#d4af37] after:shadow-[0_0_12px_rgba(212,175,55,0.85)] after:transition-all after:duration-300 hover:after:w-[calc(100%-1.5rem)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleInquiry}
          className="hidden min-h-10 items-center rounded-full border border-[#d4af37]/65 bg-[#d4af37]/10 px-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f4d77a] shadow-luxury-gold transition duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#070708] lg:inline-flex"
        >
          {siteConfig.hero.primaryCta.label}
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-luxury-100 transition hover:border-[#d4af37]/55 hover:bg-white/[0.05] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e11]/95 p-3 shadow-luxury backdrop-blur-md lg:hidden"
          >
            <ul className="space-y-1">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center rounded-xl px-4 font-sans text-xs uppercase tracking-[0.16em] text-luxury-200 transition hover:bg-white/[0.05] hover:text-[#f4d77a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleInquiry}
              className="mt-2 flex min-h-12 w-full items-center justify-center rounded-xl border border-[#d4af37]/65 bg-[#d4af37]/10 px-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#f4d77a] transition hover:bg-[#d4af37] hover:text-[#070708]"
            >
              {siteConfig.hero.primaryCta.label}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
