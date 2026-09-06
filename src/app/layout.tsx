import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InquiryProvider } from "@/components/InquiryProvider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { DirectContactDock } from "@/components/common/DirectContactDock";
import { siteConfig } from "@/data/shathigroup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.crawlSource),
  title: {
    default: "Shathi Group | Vanguard of Modern Enterprise & Luxury Brands",
    template: "%s | Shathi Group",
  },
  description:
    "Shathi Group is a pioneering corporate conglomerate overseeing distinguished ventures including Shis Fashion (contemporary menswear), XeroXii (luxury timepieces), Impress Tiles (architectural surfaces), and Bath & Beyond (designer sanitaryware). United by integrity, craftsmanship, and long-term value, the group drives excellence across lifestyle apparel, horology, building materials, and home living.",
  keywords: [
    "Shathi Group",
    "Shis Fashion",
    "XeroXii",
    "Impress Tiles",
    "Bath and Beyond",
    "Luxury Lifestyle Bangladesh",
    "Corporate Conglomerate",
  ],
  authors: [{ name: "Shathi Group" }],
  creator: "Shathi Group",
  publisher: "Shathi Group",
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.canonicalUrl,
    siteName: "Shathi Group",
    title: {
      default: "Shathi Group | Vanguard of Modern Enterprise & Luxury Brands",
      template: "%s | Shathi Group",
    },
    description:
      "Shathi Group is a pioneering corporate conglomerate overseeing distinguished ventures including Shis Fashion (contemporary menswear), XeroXii (luxury timepieces), Impress Tiles (architectural surfaces), and Bath & Beyond (designer sanitaryware). United by integrity, craftsmanship, and long-term value, the group drives excellence across lifestyle apparel, horology, building materials, and home living.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shathi Group OpenGraph image",
        type: "image/png",
      },
      {
        url: siteConfig.openGraphImage,
        width: 735,
        height: 381,
        alt: `${siteConfig.name} — ${siteConfig.shortName} corporate mark`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Shathi Group | Vanguard of Modern Enterprise & Luxury Brands",
      template: "%s | Shathi Group",
    },
    description:
      "Shathi Group is a pioneering corporate conglomerate overseeing distinguished ventures including Shis Fashion (contemporary menswear), XeroXii (luxury timepieces), Impress Tiles (architectural surfaces), and Bath & Beyond (designer sanitaryware). United by integrity, craftsmanship, and long-term value, the group drives excellence across lifestyle apparel, horology, building materials, and home living.",
    images: [
      "/og-image.png",
      siteConfig.openGraphImage,
    ],
    site: "@shathigroup",
    creator: "@shathigroup",
  },
};

export const viewport = {
  themeColor: "#070708",
  width: {
    deviceWidth: true,
  },
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.canonicalUrl,
  description: siteConfig.description,
  email: siteConfig.contact.email.value,
  telephone: siteConfig.contact.phone.value,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${display.variable}`}>
      <body className="relative flex min-h-screen flex-col overflow-x-clip bg-luxury-black font-sans text-luxury-50 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScrollProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <InquiryProvider />
          <DirectContactDock />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
