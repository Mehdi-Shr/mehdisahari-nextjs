"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, Unplug, BarChart2, AlertTriangle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import type { LucideIcon } from "lucide-react";

const pains: {
  Icon: LucideIcon;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}[] = [
  {
    Icon: FileSpreadsheet,
    titleFr: "Des heures perdues sur des tâches répétitives",
    titleEn: "Hours lost on repetitive tasks",
    descFr: "Saisie manuelle, copier-coller entre outils, relances à la main... Votre équipe passe plus de temps sur l'opérationnel que sur les projets à forte valeur.",
    descEn: "Manual data entry, copy-pasting between tools, manual follow-ups... Your team spends more time on operations than on high-value projects.",
  },
  {
    Icon: Unplug,
    titleFr: "Des outils déconnectés les uns des autres",
    titleEn: "Disconnected tools across your stack",
    descFr: "CRM, facturation, emails, tableurs — chaque outil vit sa vie. Les données sont éparpillées et personne n'a une vue d'ensemble fiable.",
    descEn: "CRM, invoicing, emails, spreadsheets — each tool lives in its own silo. Data is scattered and nobody has a reliable overview.",
  },
  {
    Icon: BarChart2,
    titleFr: "Des rapports longs à produire",
    titleEn: "Time-consuming reporting",
    descFr: "Consolider les chiffres de la semaine prend des heures. Les tableaux de bord sont rarement à jour et les décisions se prennent sur des données incomplètes.",
    descEn: "Consolidating weekly figures takes hours. Dashboards are rarely up to date and decisions are made on incomplete data.",
  },
  {
    Icon: AlertTriangle,
    titleFr: "Des erreurs humaines dans les process manuels",
    titleEn: "Human errors in manual processes",
    descFr: "Un email oublié, une facture en doublon, un lead mal assigné — les erreurs manuelles coûtent du temps, de l'argent et de la crédibilité.",
    descEn: "A forgotten email, a duplicate invoice, a misassigned lead — manual errors cost time, money and credibility.",
  },
];

export default function Pains() {
  const { t } = useLang();
  const isDesktop = useIsDesktop();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            {t("Problèmes fréquents", "Common problems")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            {t("Ce qui ralentit votre activité aujourd'hui", "What's slowing your business down today")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {pains.map((p, i) => {
            const card = (
              <div className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <p.Icon size={20} className="text-red-500" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-900 mb-1">
                    {t(p.titleFr, p.titleEn)}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {t(p.descFr, p.descEn)}
                  </p>
                </div>
              </div>
            );

            if (!mounted || !isDesktop) return <div key={i}>{card}</div>;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
