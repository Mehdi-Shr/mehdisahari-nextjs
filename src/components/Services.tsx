"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Workflow, Globe, Rocket, LayoutDashboard, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: {
  Icon: LucideIcon;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  tags: string[];
  accent: string;
}[] = [
  {
    Icon: Workflow,
    titleFr: "Automatisation & n8n",
    titleEn: "Automation & n8n",
    descFr: "Connectez vos outils, éliminez les erreurs humaines, gagnez des heures chaque semaine. Je conçois des workflows n8n sur-mesure adaptés à vos process métiers.",
    descEn: "Connect your tools, eliminate human errors, save hours every week. I design custom n8n workflows tailored to your business processes.",
    tags: ["n8n", "APIs", "VPS", "OpenClaw"],
    accent: "from-blue-500 to-indigo-500",
  },
  {
    Icon: Globe,
    titleFr: "Sites Web & Landing Pages",
    titleEn: "Websites & Landing Pages",
    descFr: "Des sites rapides, SEO-optimisés et pensés pour convertir vos visiteurs en clients.",
    descEn: "Fast, SEO-optimized websites designed to convert visitors into clients.",
    tags: ["Next.js", "React", "Tailwind", "SEO"],
    accent: "from-sky-500 to-blue-400",
  },
  {
    Icon: Rocket,
    titleFr: "Création de SaaS",
    titleEn: "SaaS Development",
    descFr: "De l'idée au produit complet. Architecture solide, stack moderne, scalable dès le jour 1.",
    descEn: "From idea to full product. Solid architecture, modern stack, scalable from day one.",
    tags: ["Spring Boot", "NestJS", "PostgreSQL", "Docker"],
    accent: "from-indigo-500 to-blue-600",
  },
  {
    Icon: LayoutDashboard,
    titleFr: "Dashboards & Outils Métiers",
    titleEn: "Dashboards & Business Tools",
    descFr: "Visualisez vos données en temps réel. Pilotez votre activité avec des outils taillés pour votre équipe.",
    descEn: "Visualize your data in real time. Run your business with tools built for your team.",
    tags: ["React", "Prisma", "REST APIs", "GCP"],
    accent: "from-blue-400 to-cyan-500",
  },
  {
    Icon: BrainCircuit,
    titleFr: "Agents IA & Automatisation Intelligente",
    titleEn: "AI Agents & Intelligent Automation",
    descFr: "Intégrez l'IA directement dans vos process métiers. Agents autonomes, pipelines de traitement de données, assistants intelligents — je conçois des systèmes qui décident et agissent à votre place.",
    descEn: "Embed AI directly into your business processes. Autonomous agents, data pipelines, smart assistants — I build systems that decide and act on your behalf.",
    tags: ["Claude", "Gemini", "Kimi", "n8n AI"],
    accent: "from-violet-500 to-blue-500",
  },
];

const Services = () => {
  const { t } = useLang();
  const isDesktop = useIsDesktop();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const animate = mounted && isDesktop;

  return (
    <section id="services" className="py-16 relative">
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
            {t("Services", "Services")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            {t("Ce que je construis pour vous", "What I build for you")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={animate ? { opacity: 0 } : false}
              whileInView={animate ? { opacity: 1 } : undefined}
              viewport={animate ? { once: true } : undefined}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${s.accent}`} />
              <div className="p-7">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-5 shadow-sm`}>
                  <s.Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-200">
                  {t(s.titleFr, s.titleEn)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {t(s.descFr, s.descEn)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-slate-50 border border-slate-200 text-slate-600 font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
