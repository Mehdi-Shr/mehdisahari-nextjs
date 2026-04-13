"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const faqItems = [
  {
    qFr: "Qu'est-ce que l'automatisation avec n8n ?",
    qEn: "What is automation with n8n?",
    aFr: "n8n est un outil open source qui connecte vos logiciels entre eux pour automatiser les tâches répétitives : envoi d'emails, synchronisation CRM, génération de rapports, relances clients... Tout se fait automatiquement, sans intervention manuelle.",
    aEn: "n8n is an open source tool that connects your software together to automate repetitive tasks: sending emails, CRM syncing, report generation, client follow-ups... Everything runs automatically, without manual intervention.",
  },
  {
    qFr: "Combien coûte un projet d'automatisation ?",
    qEn: "How much does an automation project cost?",
    aFr: "Cela dépend de la complexité. Un workflow simple démarre à partir de 500\u00a0€, un projet complet avec plusieurs automatisations et intégrations entre 2\u00a0000\u00a0€ et 8\u00a0000\u00a0€. Chaque projet commence par un audit gratuit pour définir précisément vos besoins.",
    aEn: "It depends on complexity. A simple workflow starts from \u20ac500, a full project with multiple automations and integrations ranges from \u20ac2,000 to \u20ac8,000. Every project starts with a free audit to precisely define your needs.",
  },
  {
    qFr: "Quel est le délai de mise en place ?",
    qEn: "What's the implementation timeline?",
    aFr: "Un workflow simple est livré en 2 à 5 jours. Un projet complet avec plusieurs automatisations prend généralement 2 à 4 semaines. Vous recevez des livraisons intermédiaires tout au long du projet.",
    aEn: "A simple workflow is delivered in 2 to 5 days. A full project with multiple automations typically takes 2 to 4 weeks. You receive intermediate deliveries throughout the project.",
  },
  {
    qFr: "Est-ce que vous travaillez à distance ?",
    qEn: "Do you work remotely?",
    aFr: "Oui, je travaille principalement à distance avec des clients partout en France, en Belgique, au Luxembourg et en Suisse. Les échanges se font par visio, email et messagerie. Je me déplace à Montpellier et ses alentours si nécessaire.",
    aEn: "Yes, I primarily work remotely with clients across France, Belgium, Luxembourg and Switzerland. Communication happens via video calls, email and messaging. I can meet in person in Montpellier and surrounding areas if needed.",
  },
  {
    qFr: "Quels outils et technologies utilisez-vous ?",
    qEn: "What tools and technologies do you use?",
    aFr: "Pour l'automatisation : n8n. Pour le développement web et SaaS : Next.js, React, NestJS, TypeScript, PostgreSQL, Supabase. Pour l'IA : Claude, OpenAI, Gemini. Je m'adapte aussi à vos outils existants (HubSpot, Pipedrive, Google Sheets, Slack...).",
    aEn: "For automation: n8n. For web and SaaS development: Next.js, React, NestJS, TypeScript, PostgreSQL, Supabase. For AI: Claude, OpenAI, Gemini. I also adapt to your existing tools (HubSpot, Pipedrive, Google Sheets, Slack...).",
  },
  {
    qFr: "Que se passe-t-il après la livraison ?",
    qEn: "What happens after delivery?",
    aFr: "Chaque projet inclut 30 jours de support après la livraison. Je reste disponible pour les ajustements, les questions et les évolutions. Si vous avez besoin d'un accompagnement plus long, on peut mettre en place un suivi mensuel.",
    aEn: "Every project includes 30 days of support after delivery. I remain available for adjustments, questions and evolutions. If you need longer support, we can set up monthly follow-up.",
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
        {open ? (
          <ChevronUp size={18} className="text-primary shrink-0 ml-4" />
        ) : (
          <ChevronDown size={18} className="text-slate-400 shrink-0 ml-4" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const isDesktop = useIsDesktop();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("Questions fréquentes", "FAQ")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            {t("Questions fréquentes", "Frequently asked questions")}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const content = (
              <FAQItem
                q={t(item.qFr, item.qEn)}
                a={t(item.aFr, item.aEn)}
              />
            );

            if (!mounted || !isDesktop) {
              return <div key={i}>{content}</div>;
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Export FAQ data for schema generation
export const faqData = faqItems.map((item) => ({
  question: item.qFr,
  answer: item.aFr,
}));
