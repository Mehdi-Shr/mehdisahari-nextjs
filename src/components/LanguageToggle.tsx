"use client";

import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { lang, toggle } = useLang();
  const isEn = lang === "en";
  return (
    <button
      onClick={toggle}
      className="relative flex items-center w-[72px] h-8 rounded-full border border-primary/30 bg-primary/5 hover:border-primary/60 transition-colors overflow-hidden group"
      aria-label="Toggle language"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5 rounded-full" />
      <motion.div
        className="absolute top-0.5 w-[32px] h-7 rounded-full bg-primary shadow-[0_0_12px_hsl(221_83%_53%/_0.4)]"
        animate={{ left: isEn ? "calc(100% - 34px)" : "2px" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      <span className={`relative z-10 w-1/2 text-center font-mono text-xs font-bold transition-colors duration-200 ${!isEn ? "text-primary-foreground" : "text-muted-foreground"}`}>FR</span>
      <span className={`relative z-10 w-1/2 text-center font-mono text-xs font-bold transition-colors duration-200 ${isEn ? "text-primary-foreground" : "text-muted-foreground"}`}>EN</span>
    </button>
  );
};

export default LanguageToggle;
