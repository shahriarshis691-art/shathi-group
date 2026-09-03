import Link from "next/link";
import {
  Building2,
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

  return (
    <footer className="bg-navy-900 text-slate-200">
      <div className="container-corporate py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-7 w-7 text-gold-400" aria-hidden />
              <span className="text-xl font-semibold tracking-tight text-white">
                SHATHI<span className="text-gold-400"> Group</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              SHATHI Group of Companies is a diversified corporate portfolio
              spanning fashion, luxury, building materials, and home living —
              united by integrity, craftsmanship, and long-term value.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-gold-400 hover:bg-gold-400 hover:text-navy-900"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Sister Concerns
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {companies.map((company) => (
                <li key={company.id}>
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-md border border-white/5 bg-white/5 p-3 transition hover:border-gold-400/50 hover:bg-white/10"
                  >
                    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold-400" />
                    <span>
                      <span className="block text-sm font-medium text-white">
                        {company.name}
                      </span>
                      <span className="block text-xs text-slate-400">
                        {company.category}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/5 text-gold-400">
              <MapPin className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                Corporate Office
              </p>
              <p className="mt-1 text-sm text-slate-300">
                SHATHI Tower, Corporate Park,
                <br />
                Main Business District, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/5 text-gold-400">
              <Phone className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                Phone
              </p>
              <a
                href="tel:+910000000000"
                className="mt-1 block text-sm text-slate-300 transition hover:text-white"
              >
                +91 00000 00000
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/5 text-gold-400">
              <Mail className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                Email
              </p>
              <a
                href="mailto:info@shathigroup.com"
                className="mt-1 block text-sm text-slate-300 transition hover:text-white"
              >
                info@shathigroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-corporate flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {year} SHATHI Group of Companies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}