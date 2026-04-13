"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Workflow, Globe, Rocket, LayoutDashboard, BrainCircuit,
  CheckCircle2, ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "automatisation",
    Icon: Workflow,
    title: "Automatisation & n8n",
    subtitle: "Connectez vos outils, éliminez les tâches manuelles",
    desc: "n8n est un outil open source puissant qui connecte vos logiciels entre eux via des workflows visuels. Chaque workflow est déclenché par un événement — un nouveau lead, un email reçu, une heure précise — et exécute automatiquement une série d'actions sans intervention humaine.",
    benefits: [
      "Synchronisation CRM, emails, facturation en temps réel",
      "Relances clients automatiques basées sur le comportement",
      "Rapports hebdomadaires générés et envoyés automatiquement",
      "Qualification et assignation des leads sans intervention manuelle",
      "Connexion avec plus de 400 outils (HubSpot, Pipedrive, Slack, Google Sheets...)",
    ],
    price: "",
    tags: ["n8n", "APIs", "Webhooks", "CRM"],
  },
  {
    id: "agents-ia",
    Icon: BrainCircuit,
    title: "Agents IA & Automatisation Intelligente",
    subtitle: "L'IA qui travaille pour vous, pas juste qui répond",
    desc: "Les agents IA vont au-delà du simple chatbot. Ce sont des systèmes autonomes capables de lire vos emails, classifier des documents, extraire des données de factures, résumer des réunions, ou alimenter votre CRM automatiquement. Intégrés dans vos workflows n8n, ils deviennent le cerveau de votre automatisation.",
    benefits: [
      "Classification automatique d'emails et de documents",
      "Extraction de données depuis des factures, contrats, CV",
      "Résumés automatiques de réunions et d'appels",
      "Génération de contenu (articles, posts LinkedIn, emails) pilotée par IA",
      "Assistants intelligents connectés à vos données métier",
    ],
    price: "",
    tags: ["Claude", "OpenAI", "Gemini", "n8n AI"],
  },
  {
    id: "saas",
    Icon: Rocket,
    title: "Création de SaaS",
    subtitle: "De l'idée au produit, architecture solide dès le jour 1",
    desc: "Vous avez une idée de produit SaaS ? Je vous accompagne de la conception à la mise en production. Architecture moderne, scalable, avec authentification, paiement, tableau de bord admin et API. Le tout déployé sur une infrastructure fiable et évolutive.",
    benefits: [
      "Architecture Next.js + NestJS + PostgreSQL éprouvée",
      "Authentification, gestion des rôles, multi-tenancy",
      "Intégration Stripe pour les paiements et abonnements",
      "Dashboard admin complet avec analytics",
      "CI/CD, Docker, déploiement automatisé",
    ],
    price: "",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    id: "sites-web",
    Icon: Globe,
    title: "Sites Web & Landing Pages",
    subtitle: "Des sites rapides, SEO-optimisés, pensés pour convertir",
    desc: "Un site web n'est pas une brochure en ligne. C'est votre meilleur commercial, disponible 24h/24. Je crée des sites rapides (score Lighthouse 95+), optimisés SEO, avec des landing pages pensées pour transformer vos visiteurs en clients. Chaque page est conçue pour ranker sur Google et convertir.",
    benefits: [
      "Score Lighthouse 95+ en performance",
      "SEO technique intégré (schema, sitemap, meta, Core Web Vitals)",
      "Landing pages par ville et par secteur pour le SEO local",
      "Design responsive, animations fluides",
      "Formulaire de contact, intégration CRM, analytics",
    ],
    price: "",
    tags: ["Next.js", "React", "Tailwind", "SEO"],
  },
  {
    id: "dashboards",
    Icon: LayoutDashboard,
    title: "Dashboards & Outils Métiers",
    subtitle: "Pilotez votre activité avec des données en temps réel",
    desc: "Fini les tableaux Excel partagés par email. Je crée des dashboards sur mesure qui agrègent vos données depuis tous vos outils (CRM, Google Ads, comptabilité, production) et les présentent dans une interface claire et actionnable. Vos équipes prennent de meilleures décisions, plus vite.",
    benefits: [
      "Données consolidées depuis tous vos outils",
      "Visualisations claires et actionnables",
      "Alertes automatiques sur les KPIs critiques",
      "Accès sécurisé par rôle (direction, commercial, support)",
      "Export automatique de rapports PDF/Excel",
    ],
    price: "",
    tags: ["React", "Prisma", "REST APIs", "GCP"],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-heading font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer"
      >
        <span>{q}</span>
        <ArrowRight size={16} className={`text-primary shrink-0 ml-4 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{a}</div>
      )}
    </div>
  );
}

export default function ServicesPageContent() {
  const { t } = useLang();
  const isDesktop = useIsDesktop();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const animate = mounted && isDesktop;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/15 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            Services
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Automatisation, IA & développement sur mesure
          </h1>
          <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Des workflows n8n aux agents IA, en passant par les SaaS et les sites web — je construis les outils qui font gagner du temps à votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-base shadow-lg">
              Demander un audit gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 px-4 ${idx % 2 === 1 ? "bg-slate-50" : ""}`}
        >
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={animate ? { opacity: 0, x: -20 } : false}
                whileInView={animate ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.Icon size={24} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900">{s.title}</h2>
                  </div>
                </div>
                <p className="text-primary font-medium mb-4">{s.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {s.price && <p className="text-sm font-semibold text-slate-500">{s.price}</p>}
              </motion.div>

              <motion.div
                initial={animate ? { opacity: 0, x: 20 } : false}
                whileInView={animate ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <p className="font-heading font-bold text-slate-900 mb-4">Ce que vous obtenez</p>
                  <ul className="space-y-3">
                    {s.benefits.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}>
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-12">Comment ça se passe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Audit gratuit", desc: "On cartographie vos outils, vos flux et vos points de friction. On identifie les 3 automatisations à plus fort impact." },
              { num: "02", title: "Développement", desc: "Je configure les workflows, développe les outils et intègre l'IA. Livraisons intermédiaires à chaque étape." },
              { num: "03", title: "Livraison + support", desc: "Mise en production, documentation, formation. 30 jours de support inclus après livraison." },
            ].map((step) => (
              <div key={step.num} className="text-left">
                <span className="font-mono text-3xl font-bold text-blue-400/50">{step.num}</span>
                <h3 className="font-heading font-bold text-white text-lg mt-2 mb-2">{step.title}</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-slate-900 text-center mb-12">Questions fréquentes</h2>
          <div className="flex flex-col gap-3">
            <FAQItem q="Quels services proposez-vous ?" a="Automatisation de process avec n8n, intégration d'agents IA, création de SaaS et applications web, sites vitrines et landing pages SEO, dashboards et outils métiers sur mesure." />
            <FAQItem q="Comment fonctionne l'automatisation avec n8n ?" a="n8n est un outil open source qui connecte vos logiciels entre eux via des workflows visuels. Chaque workflow est déclenché par un événement (nouveau lead, email reçu, heure précise) et exécute une série d'actions automatiquement : envoi d'emails, mise à jour CRM, génération de rapports, etc." />
            <FAQItem q="Comment se déroule un projet ?" a="Chaque projet commence par un audit gratuit pour comprendre vos besoins. Ensuite, je développe par itérations avec des livraisons intermédiaires. La livraison finale inclut 30 jours de support." />
            <FAQItem q="Quelles technologies utilisez-vous ?" a="n8n pour l'automatisation, Next.js et React pour le frontend, NestJS et Spring Boot pour le backend, PostgreSQL et Supabase pour les bases de données, Claude et OpenAI pour l'IA, Docker et GCP pour l'infrastructure." />
            <FAQItem q="Travaillez-vous à distance ?" a="Oui, je travaille principalement à distance avec des clients partout en France, en Belgique, au Luxembourg et en Suisse. Je me déplace à Montpellier et ses alentours si nécessaire." />
            <FAQItem q="Que comprend le support après livraison ?" a="Chaque projet inclut 30 jours de support : corrections, ajustements, questions. Au-delà, on peut mettre en place un suivi mensuel adapté à vos besoins." />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <Image src="/photo.jpeg" alt="Mehdi Sahari" width={96} height={96} className="rounded-full border-2 border-primary/20 shadow-xl" />
          </div>
          <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">Un projet en tête ?</h2>
          <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
            Décrivez-moi votre besoin, je vous réponds sous 24h avec une proposition concrète.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary/90 transition-all text-base shadow-lg">
            Démarrer un projet →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
