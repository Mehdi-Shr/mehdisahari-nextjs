import type { Metadata } from "next";
import { Inter, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });
const syne = Syne({ weight: ["700", "800"], subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Mehdi Sahari — Freelance IA & Automatisation | Montpellier",
  description:
    "Consultant en automatisation · IA, workflows n8n et création de SaaS sur mesure. 3 ans d'expérience. Basé à Montpellier, disponible en France et en Europe.",
  metadataBase: new URL("https://mehdisahari.fr"),
  authors: [{ name: "Mehdi Sahari" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://mehdisahari.fr",
    languages: {
      fr: "https://mehdisahari.fr/",
      en: "https://mehdisahari.fr/",
      "x-default": "https://mehdisahari.fr/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Mehdi Sahari",
    title: "Mehdi Sahari — Consultant en Automatisation",
    description:
      "Automatisation n8n, création de SaaS et sites web qui convertissent. Basé à Montpellier, disponible partout en France et en Europe.",
    url: "https://mehdisahari.fr",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mehdi Sahari — Consultant en Automatisation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Mehdi_shri",
    creator: "@Mehdi_shri",
    title: "Mehdi Sahari — Consultant en Automatisation",
    description: "Automatisation n8n, création de SaaS et sites web qui convertissent.",
    images: [{ url: "/og-image.svg", alt: "Mehdi Sahari — Consultant en Automatisation" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceMono.variable} ${syne.variable}`}>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mehdi Sahari",
              jobTitle: "Consultant en Automatisation",
              url: "https://mehdisahari.fr",
              email: "mehdi.shr@outlook.fr",
              image: "https://mehdisahari.fr/photo.jpeg",
              description:
                "Consultant en automatisation spécialisé en workflows n8n, agents IA et création de SaaS sur mesure. 3 ans d'expérience sur des projets réels.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Montpellier",
                addressCountry: "FR",
              },
              sameAs: ["https://www.linkedin.com/in/mehdi-sahari/"],
              knowsAbout: ["n8n", "React", "Next.js", "NestJS", "SaaS", "Automatisation", "TypeScript", "PostgreSQL"],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
