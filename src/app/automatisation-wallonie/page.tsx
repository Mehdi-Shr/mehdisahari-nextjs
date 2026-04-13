import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Mehdi Sahari — Freelance IA & Automatisation | Wallonie",
  description: "Consultant en automatisation en Wallonie · Workflows n8n, agents IA et création de SaaS sur mesure. 3 ans d'expérience. Obtenez un audit gratuit →",
  alternates: { canonical: "https://mehdisahari.fr/automatisation-wallonie" },
  openGraph: {
    title: "Mehdi Sahari — Freelance IA & Automatisation | Wallonie",
    description: "Automatisation n8n, création de SaaS et sites web qui convertissent. Basé à Montpellier, disponible en Wallonie.",
    url: "https://mehdisahari.fr/automatisation-wallonie",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que l'automatisation avec n8n ?",
      acceptedAnswer: { "@type": "Answer", text: "n8n est un outil open source qui connecte vos logiciels entre eux pour automatiser les tâches répétitives : envoi d'emails, synchronisation CRM, génération de rapports, relances clients... Tout se fait automatiquement, sans intervention manuelle." },
    },
    {
      "@type": "Question",
      name: "Combien coûte un projet d'automatisation ?",
      acceptedAnswer: { "@type": "Answer", text: "Cela dépend de la complexité. Un workflow simple démarre à partir de 500\u00a0€, un projet complet avec plusieurs automatisations et intégrations entre 2\u00a0000\u00a0€ et 8\u00a0000\u00a0€. Chaque projet commence par un audit gratuit pour définir précisément vos besoins." },
    },
    {
      "@type": "Question",
      name: "Quel est le délai de mise en place ?",
      acceptedAnswer: { "@type": "Answer", text: "Un workflow simple est livré en 2 à 5 jours. Un projet complet avec plusieurs automatisations prend généralement 2 à 4 semaines. Vous recevez des livraisons intermédiaires tout au long du projet." },
    },
    {
      "@type": "Question",
      name: "Est-ce que vous travaillez à distance ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui, je travaille principalement à distance avec des clients partout en France, en Belgique, au Luxembourg et en Suisse. Les échanges se font par visio, email et messagerie. Je me déplace à Montpellier et ses alentours si nécessaire." },
    },
    {
      "@type": "Question",
      name: "Quels outils et technologies utilisez-vous ?",
      acceptedAnswer: { "@type": "Answer", text: "Pour l'automatisation : n8n. Pour le développement web et SaaS : Next.js, React, NestJS, TypeScript, PostgreSQL, Supabase. Pour l'IA : Claude, OpenAI, Gemini. Je m'adapte aussi à vos outils existants (HubSpot, Pipedrive, Google Sheets, Slack...)." },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il après la livraison ?",
      acceptedAnswer: { "@type": "Answer", text: "Chaque projet inclut 30 jours de support après la livraison. Je reste disponible pour les ajustements, les questions et les évolutions. Si vous avez besoin d'un accompagnement plus long, on peut mettre en place un suivi mensuel." },
    }
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatisation & IA en Wallonie",
  provider: { "@type": "Person", name: "Mehdi Sahari", url: "https://mehdisahari.fr" },
  description: "Workflows n8n et agents IA sur mesure pour automatiser les process métiers des entreprises en Wallonie.",
  areaServed: { "@type": "AdministrativeArea", name: "Wallonie" },
  serviceType: "Automatisation & Intégration IA",
  url: "https://mehdisahari.fr/automatisation-wallonie",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <CityPageLayout city="Wallonie" />
    </>
  );
}
