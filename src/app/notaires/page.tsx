import type { Metadata } from "next";
import LandingTemplate, { type LandingContent } from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Automatisation pour Notaires — Workflows IA & n8n | Mehdi Sahari",
  description: "Automatisez le traitement des demandes entrantes de votre étude notariale. Qualification, collecte de pièces, relances automatisées — sans perdre le contrôle.",
  alternates: { canonical: "https://mehdisahari.fr/notaires" },
  openGraph: {
    title: "Automatisation pour Notaires — Workflows IA & n8n",
    description: "Moins d'allers-retours, plus de fluidité. Workflows n8n + IA pour les études notariales.",
    url: "https://mehdisahari.fr/notaires",
  },
};

const content: LandingContent = {
  hero: {
    badge: "Automatisation · Études notariales",
    title: "Réduisez les allers-retours et automatisez le traitement des demandes de votre étude",
    subtitle: "Workflows n8n + IA pour qualifier les demandes entrantes, organiser les pièces, accélérer les réponses et fluidifier le parcours client — avec contrôle humain total.",
    cta: "Demander un audit gratuit →",
  },
  metier: "étude notariale",
  pains: [
    { icon: "Inbox", title: "Boîte mail saturée de demandes incomplètes", desc: "Chaque demande entrante déclenche une chaîne d'emails pour récupérer les pièces manquantes. Votre équipe perd un temps précieux sur des allers-retours évitables." },
    { icon: "FileX", title: "Dossiers incomplets qui bloquent l'avancement", desc: "Les clients ne savent pas ce qu'ils doivent fournir. Les pièces arrivent au compte-gouttes, les dossiers s'accumulent sans pouvoir avancer." },
    { icon: "Clock", title: "Relances manuelles chronophages", desc: "Votre équipe relance manuellement chaque client pour les pièces manquantes, les signatures, les rendez-vous — des tâches répétitives qui pourraient être automatisées." },
    { icon: "RefreshCw", title: "Saisies redondantes entre vos outils", desc: "Les mêmes informations sont re-saisies dans plusieurs logiciels. Chaque resaisie est une source d'erreur et une perte de temps." },
  ],
  results: [
    { icon: "CheckCircle", title: "Demandes qualifiées automatiquement", desc: "Un formulaire intelligent collecte les bonnes informations dès le premier contact. Votre équipe reçoit uniquement des demandes complètes." },
    { icon: "FolderOpen", title: "Collecte de pièces guidée", desc: "Le client est guidé étape par étape pour fournir les documents nécessaires. Les relances sont déclenchées automatiquement si une pièce tarde." },
    { icon: "Zap", title: "Réponses plus rapides, meilleure expérience", desc: "Grâce à la qualification en amont, votre équipe traite uniquement les dossiers prêts à avancer. Les délais de réponse sont divisés." },
    { icon: "Users", title: "Plus de temps pour le conseil client", desc: "Vos collaborateurs se concentrent sur la valeur ajoutée — le conseil, la relation client — plutôt que sur la gestion administrative des demandes." },
    { icon: "MessageSquare", title: "Communication fluide et traçable", desc: "Toutes les communications clients sont centralisées, horodatées et consultables. Fini les informations perdues dans les boîtes mail individuelles." },
    { icon: "ShieldCheck", title: "Contrôle humain à chaque étape", desc: "L'automatisation s'arrête là où vous le décidez. Chaque étape critique nécessitant validation humaine reste entre vos mains." },
  ],
  usecases: [
    { tag: "Cas #1", title: "Qualification automatique des demandes", desc: "Un formulaire structuré collecte le type d'acte, la situation, les parties concernées. L'IA pré-qualifie la demande et la route vers le bon collaborateur." },
    { tag: "Cas #2", title: "Collecte et relance de pièces", desc: "Le client reçoit une liste personnalisée des documents à fournir. Des relances automatiques sont envoyées tous les 3 jours si une pièce manque." },
    { tag: "Cas #3", title: "Confirmation de rendez-vous automatisée", desc: "Rappels automatiques 48h et 24h avant le rendez-vous avec lien de confirmation, réduisant les no-shows et les relances téléphoniques." },
  ],
  process: [
    { step: "1", title: "Audit de vos process actuels", desc: "On cartographie ensemble vos flux de demandes, vos outils, vos points de friction. 30 minutes suffisent pour identifier les quick wins." },
    { step: "2", title: "Conception et mise en place des workflows", desc: "Je configure les workflows n8n adaptés à votre étude — formulaires, relances, routing — avec vos outils existants (email, agenda, GED)." },
    { step: "3", title: "Formation et suivi", desc: "Votre équipe est formée sur les nouveaux process. Je reste disponible pour ajuster les workflows au fil de vos retours." },
  ],
  faq: [
    { q: "Est-ce compatible avec les contraintes réglementaires du notariat ?", a: "Oui. Les workflows automatisent uniquement la partie administrative et communicationnelle — collecte d'informations, relances, organisation des pièces. La validation et la signature restent toujours entre vos mains." },
    { q: "Quels outils sont nécessaires pour démarrer ?", a: "N'importe quelle boîte mail professionnelle, un formulaire en ligne et votre agenda suffisent pour commencer. On s'adapte à vos outils existants. Pas besoin de changer de logiciel métier." },
    { q: "Combien de temps pour voir les premiers résultats ?", a: "Un premier workflow fonctionnel peut être mis en place en 1 à 2 semaines. Les premiers gains de temps sont visibles dès la première semaine d'utilisation." },
    { q: "Faut-il des compétences techniques pour utiliser les workflows ?", a: "Non. Une fois en place, les workflows tournent de manière autonome. Votre équipe reçoit les informations directement dans ses outils habituels — email, agenda, tableur." },
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
  name: "Automatisation pour études notariales",
  provider: { "@type": "Person", name: "Mehdi Sahari", url: "https://mehdisahari.fr" },
  description: "Workflows n8n + IA pour qualifier les demandes entrantes, organiser les pièces, automatiser les relances et fluidifier le parcours client des études notariales.",
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Automatisation & Intégration IA",
  url: "https://mehdisahari.fr/notaires",
};

export default function NotairesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LandingTemplate content={content} />
    </>
  );
}
