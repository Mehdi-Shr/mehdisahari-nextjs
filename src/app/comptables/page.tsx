import type { Metadata } from "next";
import LandingTemplate, { type LandingContent } from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Automatisation pour Cabinets Comptables — Workflows IA & n8n | Mehdi Sahari",
  description: "Automatisez la prospection et le suivi commercial de votre cabinet comptable. Relances automatisées, centralisation des leads et suivi prospects sans charge manuelle.",
  alternates: { canonical: "https://mehdisahari.fr/comptables" },
  openGraph: {
    title: "Automatisation pour Cabinets Comptables — Workflows IA & n8n",
    description: "Prospection régulière, relances automatiques, suivi propre. Workflows n8n + IA pour les cabinets comptables.",
    url: "https://mehdisahari.fr/comptables",
  },
};

const content: LandingContent = {
  hero: {
    badge: "Automatisation · Cabinets Comptables",
    title: "Automatisez la prospection et le suivi commercial de votre cabinet comptable",
    subtitle: "Workflows n8n + IA pour centraliser vos leads, déclencher les relances au bon moment, enrichir vos données et libérer du temps pour le conseil client.",
    cta: "Demander un audit de prospection →",
  },
  metier: "cabinet",
  pains: [
    { icon: "AlertCircle", title: "Prospection irrégulière voire inexistante", desc: "Entre les déclarations, les bilans et le quotidien clients, la prospection passe toujours après. Le pipeline se vide sans que vous vous en rendiez compte." },
    { icon: "UserX", title: "Suivi des prospects artisanal", desc: "Les contacts prospects sont éparpillés dans des tableaux, des emails, des post-its. Impossible de savoir où en est chaque prospect sans chercher." },
    { icon: "Clock", title: "Relances oubliées, opportunités perdues", desc: "Un prospect intéressé mais pas encore prêt est rarement recontacté au bon moment. Les relances manuelles tombent dans l'oubli dès que le quotidien reprend." },
    { icon: "Inbox", title: "Pas de visibilité sur le pipe commercial", desc: "Vous ne savez pas combien de prospects sont en cours, à quel stade ils en sont, ni quelle action est prioritaire cette semaine." },
  ],
  results: [
    { icon: "CalendarCheck", title: "Prospection régulière sans effort", desc: "Un workflow de prospection tourne en continu — identification de leads, envoi de premiers messages, suivi — sans que vous ayez à y penser chaque semaine." },
    { icon: "Zap", title: "Relances automatiques au bon moment", desc: "Chaque prospect est relancé automatiquement selon un calendrier adapté à sa situation — plus jamais une opportunité oubliée faute de suivi." },
    { icon: "TrendingUp", title: "Pipeline commercial toujours à jour", desc: "Votre tableau de bord prospect est mis à jour automatiquement à chaque interaction. Vous savez à tout moment où en est chaque contact." },
    { icon: "Users", title: "Ciblage précis des bons prospects", desc: "L'IA identifie et enrichit les prospects correspondant à votre cible — secteur, taille, localisation — pour que vos actions commerciales soient rentables." },
    { icon: "BarChart2", title: "Reporting commercial automatisé", desc: "Chaque semaine, un résumé de votre activité commerciale — contacts pris, réponses, rendez-vous — vous est envoyé automatiquement." },
    { icon: "RefreshCw", title: "Plus de temps pour le conseil", desc: "Déléguer l'opérationnel commercial aux workflows vous libère de la bande passante pour vous concentrer sur ce que vous faites de mieux : conseiller vos clients." },
  ],
  usecases: [
    { tag: "Cas #1", title: "Prospection outbound automatisée", desc: "Un workflow identifie chaque semaine de nouveaux prospects (Sirène, annuaires professionnels, bases de données), les enrichit et déclenche une prise de contact personnalisée." },
    { tag: "Cas #2", title: "Séquence de relances multicanal", desc: "Prospect silencieux depuis 2 semaines ? Le workflow déclenche une relance email à J+14, puis un rappel à J+21, avec le bon message selon son profil." },
    { tag: "Cas #3", title: "Centralisation et scoring des leads entrants", desc: "Chaque demande entrante (site, recommandation, réseau) est automatiquement centralisée, qualifiée et priorisée dans votre outil de suivi." },
  ],
  process: [
    { step: "1", title: "Audit de votre prospection actuelle", desc: "On analyse vos process de prospection actuels, vos cibles prioritaires, vos outils et vos points de blocage. 30 minutes pour identifier les quick wins." },
    { step: "2", title: "Mise en place du système de suivi et des relances", desc: "Je configure un tableau de bord prospect centralisé et les workflows de relances automatiques, connectés à vos outils existants (Gmail, Notion, Sheets, HubSpot)." },
    { step: "3", title: "Activation de la prospection automatisée", desc: "On met en place le workflow de prospection sortante, adapté à votre cible et votre positionnement, pour alimenter régulièrement votre pipe sans effort." },
  ],
  faq: [
    { q: "On n'a pas de CRM — est-ce un problème ?", a: "Non. On peut démarrer avec un simple Google Sheets ou Notion comme base de données prospects. Si vous souhaitez évoluer vers un vrai CRM, je peux vous aider à le mettre en place." },
    { q: "Le cabinet est small — est-ce adapté à notre taille ?", a: "C'est même là que l'automatisation a le plus d'impact. Un cabinet de 2 à 10 personnes n'a pas les ressources d'un grand cabinet — automatiser la prospection, c'est avoir l'efficacité d'une équipe commerciale sans l'embauche." },
    { q: "Est-ce que les messages envoyés aux prospects sont personnalisés ?", a: "Oui. Les messages sont personnalisés selon le profil du prospect (secteur, taille, localisation) et son stade dans le pipeline. Pas de copier-coller générique." },
    { q: "Combien de temps pour avoir un système opérationnel ?", a: "Un premier système de suivi et de relances peut être en place en 1 semaine. Le workflow de prospection outbound demande généralement 2 à 3 semaines pour être bien calibré." },
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
  name: "Automatisation pour cabinets comptables",
  provider: { "@type": "Person", name: "Mehdi Sahari", url: "https://mehdisahari.fr" },
  description: "Workflows n8n + IA pour automatiser la prospection, les relances commerciales et le suivi des prospects des cabinets comptables.",
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Automatisation & Intégration IA",
  url: "https://mehdisahari.fr/comptables",
};

export default function ComptablesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LandingTemplate content={content} />
    </>
  );
}
