"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto items-center">
          {/* Left - Photo + socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full border-2 border-primary/50 shadow-[0_0_30px_hsl(221_83%_53%/_0.2)] overflow-hidden mb-6">
              <Image
                src="/photo.jpeg"
                alt="Mehdi Sahari — Consultant en automatisation et IA à Montpellier"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <a
              href="https://www.linkedin.com/in/mehdi-sahari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 bg-primary/8 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            >
              <ExternalLink size={15} />
              LinkedIn
            </a>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t("À propos", "About")}
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              {t(
                "Consultant en automatisation avec une obsession pour l'efficacité.",
                "Automation consultant with an obsession for efficiency."
              )}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "3 ans d'expérience sur des projets réels — grands comptes (Engie, Crédit Agricole) et startups (CILcare). Je ne livre pas du code : je livre des systèmes qui résolvent des problèmes concrets et font gagner du temps à mes clients. Basé à Montpellier, disponible à distance partout en France et en Europe.",
                "3 years of experience on real projects — enterprise clients (Engie, Crédit Agricole) and startups (CILcare). I don't just ship code: I deliver systems that solve real problems and save my clients time. Based in Montpellier, available remotely across France and Europe."
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
