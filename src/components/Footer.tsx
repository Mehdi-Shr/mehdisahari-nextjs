"use client";

import { useLang } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  const { t } = useLang();
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          <div>
            <span className="font-heading text-xl font-bold neon-text">MS</span>
            <p className="text-muted-foreground text-sm mt-2">
              {t("Développeur freelance · Montpellier", "Freelance developer · Montpellier, France")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-center">
            {[
              { href: "#services", label: "Services" },
              { href: "#stack", label: "Stack" },
              { href: "#about", label: t("À propos", "About") },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <div className="flex gap-4 md:justify-end">
            <a href="https://www.linkedin.com/in/mehdi-sahari/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink size={16} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-6 text-center text-xs text-muted-foreground">
          <span>© 2026 Mehdi Sahari</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
