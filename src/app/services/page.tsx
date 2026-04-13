import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services d'automatisation & IA — Workflows n8n, SaaS, Sites Web | Mehdi Sahari",
  description:
    "Automatisation n8n, agents IA, création de SaaS, sites web et dashboards sur mesure. Freelance à Montpellier, disponible en France, Belgique, Luxembourg et Suisse. Audit gratuit.",
  alternates: { canonical: "https://mehdisahari.fr/services" },
  openGraph: {
    title: "Services d'automatisation & IA | Mehdi Sahari",
    description:
      "Workflows n8n, agents IA, SaaS sur mesure, sites web et dashboards. Audit gratuit, livraison rapide.",
    url: "https://mehdisahari.fr/services",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels services proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automatisation de process avec n8n, intégration d'agents IA, création de SaaS et applications web, sites vitrines et landing pages SEO, dashboards et outils métiers sur mesure.",
      },
    },
    {
      "@type": "Question",
      name: "Comment fonctionne l'automatisation avec n8n ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "n8n est un outil open source qui connecte vos logiciels entre eux via des workflows visuels. Chaque workflow est déclenché par un événement (nouveau lead, email reçu, heure précise) et exécute une série d'actions automatiquement : envoi d'emails, mise à jour CRM, génération de rapports, etc.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule un projet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque projet commence par un audit gratuit pour comprendre vos besoins. Ensuite, je développe par itérations avec des livraisons intermédiaires. La livraison finale inclut 30 jours de support.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles technologies utilisez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "n8n pour l'automatisation, Next.js et React pour le frontend, NestJS et Spring Boot pour le backend, PostgreSQL et Supabase pour les bases de données, Claude et OpenAI pour l'IA, Docker et GCP pour l'infrastructure.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Services d'automatisation & IA",
  provider: {
    "@type": "Person",
    name: "Mehdi Sahari",
    url: "https://mehdisahari.fr",
  },
  description:
    "Automatisation de process métiers avec n8n, intégration d'agents IA, développement de SaaS et applications web sur mesure.",
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "Luxembourg" },
    { "@type": "Country", name: "Suisse" },
  ],
  serviceType: "Automatisation & Développement Web",
  url: "https://mehdisahari.fr/services",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPageContent />
    </>
  );
}
