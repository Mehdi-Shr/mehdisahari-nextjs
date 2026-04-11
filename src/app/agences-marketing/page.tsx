import type { Metadata } from "next";
import LandingTemplate, { type LandingContent } from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Automatisation pour Agences Marketing — Workflows IA & n8n | Mehdi Sahari",
  description: "Automatisez votre acquisition, qualification et reporting. Lead scoring, enrichissement, CRM sync et relances automatisées pour les agences marketing.",
  alternates: { canonical: "https://mehdisahari.fr/agences-marketing" },
  openGraph: {
    title: "Automatisation pour Agences Marketing — Workflows IA & n8n",
    description: "Moins de leads non qualifiés, plus de pipeline. Workflows n8n + IA pour les agences marketing.",
    url: "https://mehdisahari.fr/agences-marketing",
  },
};

const content: LandingContent = {
  hero: {
    badge: "Automatisation · Agences Marketing",
    title: "Automatisez votre acquisition, votre qualification et votre reporting sans casser votre stack",
    subtitle: "Lead scoring, enrichissement, routing, relances, reporting et synchronisation CRM — pour éliminer les tâches manuelles et libérer du temps pour la stratégie.",
    cta: "Demander un audit de stack →",
  },
  metier: "agence",
  pains: [
    { icon: "Filter", title: "Trop de leads non qualifiés dans le pipe", desc: "L'équipe commerciale perd du temps sur des leads froids ou hors cible. Le taux de conversion stagne faute de qualification en amont." },
    { icon: "Database", title: "CRM sale, données fragmentées", desc: "Les contacts sont dupliqués, les champs incomplets, les sources mélangées. Impossible de piloter correctement l'acquisition sur des données peu fiables." },
    { icon: "BarChart2", title: "Reporting chronophage et toujours en retard", desc: "Chaque fin de mois, plusieurs heures sont perdues à consolider les données ads, CRM et analytics dans des tableaux à la main." },
    { icon: "GitMerge", title: "Déconnexion entre marketing et sales", desc: "Les leads générés par le marketing n'arrivent pas au bon moment chez les commerciaux. Le pipe est mal alimenté et les opportunités se perdent." },
  ],
  results: [
    { icon: "Target", title: "Lead scoring automatique", desc: "Chaque lead est scoré automatiquement selon ses actions, sa source et son profil. Votre équipe commerciale reçoit uniquement les leads chauds." },
    { icon: "Zap", title: "Enrichissement et routing instantané", desc: "Les leads sont enrichis (secteur, taille, LinkedIn) et routés vers le bon commercial en temps réel, dès qu'ils entrent dans votre funnel." },
    { icon: "TrendingUp", title: "Reporting automatisé", desc: "Vos dashboards se mettent à jour automatiquement. Ads, CRM, analytics — tout est consolidé et livré chaque semaine sans intervention manuelle." },
    { icon: "RefreshCw", title: "CRM toujours propre et synchronisé", desc: "Les doublons sont détectés et fusionnés. Les données sont normalisées à l'entrée. Votre CRM reflète fidèlement l'état réel de votre pipeline." },
    { icon: "Clock", title: "Relances nurturing automatisées", desc: "Séquences d'emails personnalisées déclenchées selon le comportement du lead — visite, téléchargement, inactivité — sans action manuelle." },
    { icon: "Users", title: "Plus de temps pour la stratégie", desc: "L'opérationnel répétitif est délégué aux workflows. Vos équipes se concentrent sur la créa, la strat et la relation client." },
  ],
  usecases: [
    { tag: "Cas #1", title: "Pipeline lead-to-CRM automatisé", desc: "Chaque lead entrant (form, ads, LinkedIn) est enrichi, scoré et créé dans le CRM avec les bonnes propriétés — sans ressaisie manuelle." },
    { tag: "Cas #2", title: "Reporting hebdomadaire automatique", desc: "Chaque lundi matin, un rapport consolidé (Google Ads, Meta, CRM, GA4) est envoyé automatiquement à toute l'équipe via Slack ou email." },
    { tag: "Cas #3", title: "Nurturing comportemental", desc: "Un lead visite votre page prix 3 fois sans convertir ? Un workflow déclenche automatiquement une relance personnalisée 24h après." },
  ],
  process: [
    { step: "1", title: "Audit de votre stack et de vos flux", desc: "On cartographie vos outils (CRM, ads, analytics, email), vos sources de leads et vos points de friction. On identifie les 3 automations à plus fort impact." },
    { step: "2", title: "Mise en place des workflows prioritaires", desc: "Je configure les workflows n8n connectés à votre stack existant — HubSpot, Pipedrive, Google Sheets, Slack, Mailchimp — sans migration ni changement d'outil." },
    { step: "3", title: "Itération et montée en puissance", desc: "On mesure l'impact des premières automations, on ajuste, puis on itère pour couvrir de nouveaux cas d'usage au fil des semaines." },
  ],
  faq: [
    { q: "On utilise déjà HubSpot / Pipedrive — est-ce compatible ?", a: "Oui, n8n s'intègre nativement avec HubSpot, Pipedrive, Salesforce et la plupart des CRM du marché. On travaille sur votre stack actuel sans migration." },
    { q: "Peut-on automatiser le reporting Google Ads + Meta en même temps ?", a: "Absolument. C'est même l'un des cas d'usage les plus fréquents — consolider Google Ads, Meta Ads, GA4 et CRM dans un seul dashboard ou rapport automatique." },
    { q: "Combien d'automations peut-on mettre en place ?", a: "On démarre généralement par 2 à 3 workflows à fort impact, puis on itère. Il n'y a pas de limite technique — on priorise selon votre ROI attendu." },
    { q: "Et si on change d'outil dans 6 mois ?", a: "Les workflows n8n sont modulaires et faciles à reconfigurer. Changer de CRM ou d'outil email ne nécessite qu'une mise à jour du connecteur, pas de tout reconstruire." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatisation pour agences marketing",
  provider: { "@type": "Person", name: "Mehdi Sahari", url: "https://mehdisahari.fr" },
  description: "Workflows n8n + IA pour automatiser le lead scoring, l'enrichissement, la synchronisation CRM et le reporting marketing des agences.",
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Automatisation & Intégration IA",
  url: "https://mehdisahari.fr/agences-marketing",
};

export default function AgencesMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LandingTemplate content={content} />
    </>
  );
}
