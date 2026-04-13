"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const terminalItems = {
  fr: [
    "n8n workflows →",
    "Agents IA autonomes →",
    "SaaS sur-mesure →",
    "APIs REST →",
    "Dashboards métiers →",
    "Landing pages →",
    "Automatisation IA →",
  ],
  en: [
    "n8n workflows →",
    "Autonomous AI agents →",
    "Custom SaaS →",
    "REST APIs →",
    "Business dashboards →",
    "Landing pages →",
    "AI automation →",
  ],
};

const Hero = ({ city }: { city?: string } = {}) => {
  const { lang, t } = useLang();
  const [termIdx, setTermIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const items = terminalItems[lang];
  const currentWord = items[termIdx % items.length];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting && charIdx < currentWord.length) {
          setCharIdx((c) => c + 1);
        } else if (!deleting && charIdx === currentWord.length) {
          setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && charIdx > 0) {
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setTermIdx((i) => i + 1);
        }
      },
      deleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, currentWord]);

  useEffect(() => {
    setCharIdx(0);
    setDeleting(false);
    setTermIdx(0);
  }, [lang]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, transition: { duration: 0.6, type: "tween", ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1d4ed8]">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, hsl(221 83% 53% / 0.18) 0%, transparent 70%)' }} />
      {/* Scanlines */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none opacity-30" />
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: 12, t: 18, d: 0.3, dur: 5.2 },
          { l: 85, t: 42, d: 1.8, dur: 6.1 },
          { l: 34, t: 72, d: 3.2, dur: 4.8 },
          { l: 67, t: 15, d: 0.9, dur: 7.3 },
          { l: 91, t: 88, d: 4.5, dur: 5.6 },
          { l: 23, t: 55, d: 2.1, dur: 6.8 },
          { l: 56, t: 35, d: 5.0, dur: 4.4 },
          { l: 78, t: 92, d: 1.4, dur: 7.1 },
          { l: 45, t: 8, d: 3.7, dur: 5.9 },
          { l: 8, t: 65, d: 2.8, dur: 6.5 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${p.l}%`,
              top: `${p.t}%`,
              animationDelay: `${p.d}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl"
      >
        <motion.div variants={fadeUp} className="mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-200 text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 sm:px-4 rounded-full border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
            {t("Consultant en Automatisation · Freelance", "Automation Consultant · Freelance")}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-heading font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] mb-6 md:mb-8 text-white"
        >
          {t("Automatisation n8n & IA", "n8n Automation & AI")}
          <br />
          <span className="text-blue-300" style={{ textShadow: '0 0 40px hsl(213 94% 68% / 0.5)' }}>
            {city ? t(`à ${city}`, `in ${city}`) : t("à Montpellier", "in Montpellier")}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-blue-100/70 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed px-2"
        >
          {t(
            "Éliminez les tâches manuelles. Lancez votre SaaS. Obtenez un site qui convertit vraiment.",
            "Kill manual tasks. Launch your SaaS. Get a website that actually converts."
          )}
        </motion.p>

        {/* Terminal typewriter */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-lg px-4 sm:px-6 py-3 mb-8 md:mb-12 font-mono text-xs sm:text-sm text-blue-200 border border-blue-400/20 bg-white/5 backdrop-blur-sm max-w-[90vw]"
        >
          <span className="text-blue-400/60 shrink-0">$</span>
          <span className="truncate">{currentWord.slice(0, charIdx)}</span>
          <span className="w-2 h-4 sm:h-5 bg-blue-300/80 animate-pulse shrink-0" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center px-2">
          <button
            onClick={() => scrollTo("#services")}
            className="font-body border border-white/25 text-white/90 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            {t("Voir mes services ↓", "View my services ↓")}
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="font-body bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
          >
            {t("Prendre contact →", "Get in touch →")}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
