"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { SearchCheck, GitMerge, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: {
  num: string;
  Icon: LucideIcon;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}[] = [
  {
    num: "01",
    Icon: SearchCheck,
    titleFr: "Analyse & cadrage",
    titleEn: "Discovery & scoping",
    descFr: "On définit ensemble votre besoin, vos contraintes et les livrables attendus.",
    descEn: "We define your need, constraints, and expected deliverables together.",
  },
  {
    num: "02",
    Icon: GitMerge,
    titleFr: "Développement itératif",
    titleEn: "Iterative development",
    descFr: "Livraisons régulières, communication transparente, feedback intégré en continu.",
    descEn: "Regular deliveries, transparent communication, continuous feedback integration.",
  },
  {
    num: "03",
    Icon: PackageCheck,
    titleFr: "Livraison & support",
    titleEn: "Delivery & support",
    descFr: "Mise en production, documentation, formation si nécessaire. Livraison + 30 jours de support inclus.",
    descEn: "Production deployment, documentation, onboarding if needed. Delivery + 30 days of support included.",
  },
];

const Process = () => {
  const { t } = useLang();
  const isDesktop = useIsDesktop();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("Comment ça marche", "How it works")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            {t("Comment je travaille", "How I work")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={isDesktop ? { opacity: 0 } : false}
              whileInView={isDesktop ? { opacity: 1 } : undefined}
              viewport={isDesktop ? { once: true } : undefined}
              transition={{ duration: 0.8, delay: i * 0.18, ease: "easeOut" }}
              className="relative bg-white rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-4xl font-bold leading-none bg-gradient-to-br from-primary to-blue-400 bg-clip-text text-transparent">
                  {step.num}
                </span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                {t(step.titleFr, step.titleEn)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(step.descFr, step.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
