"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const Urgency = () => {
  const { t } = useLang();

  return (
    <section className="py-16 px-4" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}>
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <TrendingUp size={20} className="text-white" />
          </div>
          <p className="text-white text-xl md:text-2xl font-heading font-bold leading-snug">
            {t(
              "Les PME qui automatisent aujourd'hui prennent de l'avance sur celles qui attendent.",
              "SMBs that automate today get ahead of those that wait."
            )}{" "}
            <span className="text-blue-300">
              {t(
                "Workflows n8n, agents IA, intégrations sur mesure",
                "n8n workflows, AI agents, custom integrations"
              )}
            </span>{" "}
            {t(
              "— je vous aide à aller plus vite sans recruter.",
              "— I help you move faster without hiring."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Urgency;
