"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import WorkflowAnimation from "@/components/WorkflowAnimation";

export default function WorkflowSection() {
  const { t } = useLang();

  return (
    <section
      className="py-16 px-4"
      style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block bg-white/10 text-white/70 text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4">
            {t("Comment ça fonctionne", "How it works")}
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
            {t("Vos outils connectés, vos process automatisés", "Your tools connected, your processes automated")}
          </h2>
        </motion.div>
        <WorkflowAnimation />
      </div>
    </section>
  );
}
