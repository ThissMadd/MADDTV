import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site, allPlans } from "@/lib/site";
import { faqs } from "@/lib/content";
import { MetaPixel } from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · IPTV Premium en España | 4K, sin cortes, activación inmediata`,
    template: `%s · ${site.name}`,
  },
  description:
    "IPTV premium en España: miles de canales en HD y 4K, deportes, cine y series bajo demanda. Sin cortes, en todos tus dispositivos y con activación en minutos.",
  keywords: ["IPTV España", "IPTV premium", "lista IPTV", "IPTV 4K", "suscripción IPTV", "IPTV Smart TV", "IPTV Fire TV"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    title: `${site.name} · IPTV Premium en España`,
    description: "Miles de canales en 4K, sin cortes. Activación en minutos.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${site.name} IPTV Premium`,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...allPlans.map((p) => p.price)),
      highPrice: Math.max(...allPlans.map((p) => p.price)),
      offerCount: allPlans.length,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-bg font-sans">
        {children}
        <MetaPixel />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
