"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingDown, Zap, Clock, ShieldCheck } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const metrics = [
  {
    icon: TrendingDown,
    value: "−80%",
    labelFr: "de tâches manuelles",
    labelEn: "manual tasks",
  },
  {
    icon: Zap,
    value: "×3",
    labelFr: "de productivité",
    labelEn: "productivity",
  },
  {
    icon: Clock,
    value: "<30j",
    labelFr: "pour un ROI positif",
    labelEn: "to positive ROI",
  },
  {
    icon: ShieldCheck,
    value: "99%",
    labelFr: "de fiabilité",
    labelEn: "reliability",
  },
];

export default function Metrics() {
  const { t } = useLang();
  const isDesktop = useIsDesktop();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="metrics" className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {t("Impact concret", "Concrete impact")}
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          {t("L\u2019impact de l\u2019automatisation", "The impact of automation")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            const card = (
              <div className="flex flex-col items-center gap-3 border border-primary/10 rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-heading font-bold bg-gradient-to-br from-primary to-blue-400 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-sm text-slate-500">
                  {t(metric.labelFr, metric.labelEn)}
                </span>
              </div>
            );

            if (!mounted || !isDesktop) {
              return <div key={i}>{card}</div>;
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
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
