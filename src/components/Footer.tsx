"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const geoLinks = {
  France: [
    { city: "Montpellier", slug: "automatisation-montpellier" },
    { city: "Paris", slug: "automatisation-paris" },
    { city: "Lyon", slug: "automatisation-lyon" },
    { city: "Marseille", slug: "automatisation-marseille" },
    { city: "Toulouse", slug: "automatisation-toulouse" },
    { city: "Bordeaux", slug: "automatisation-bordeaux" },
    { city: "Nantes", slug: "automatisation-nantes" },
    { city: "Lille", slug: "automatisation-lille" },
    { city: "Strasbourg", slug: "automatisation-strasbourg" },
    { city: "Nice", slug: "automatisation-nice" },
    { city: "Rennes", slug: "automatisation-rennes" },
    { city: "Metz", slug: "automatisation-metz" },
  ],
  Belgique: [
    { city: "Bruxelles", slug: "automatisation-bruxelles" },
    { city: "Liège", slug: "automatisation-liege" },
    { city: "Charleroi", slug: "automatisation-charleroi" },
    { city: "Namur", slug: "automatisation-namur" },
    { city: "Wallonie", slug: "automatisation-wallonie" },
  ],
  "Luxembourg & Suisse": [
    { city: "Luxembourg", slug: "automatisation-luxembourg" },
    { city: "Genève", slug: "automatisation-geneve" },
    { city: "Lausanne", slug: "automatisation-lausanne" },
    { city: "Zurich", slug: "automatisation-zurich" },
  ],
};

const Footer = ({ location }: { location?: string }) => {
  const { t } = useLang();
  const loc = location || "Montpellier";
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-primary/10 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          <div>
            <span className="font-heading text-xl font-bold neon-text">MS</span>
            <p className="text-muted-foreground text-sm mt-2">
              {t(`Consultant en automatisation · ${loc}`, `Automation Consultant · ${loc}`)}
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

        {/* Geo links grid */}
        <div className="border-t border-primary/10 pt-8 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {t("Zones d'intervention", "Service areas")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(geoLinks).map(([region, cities]) => (
              <div key={region}>
                <p className="text-xs font-semibold text-slate-500 mb-2">{region}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {c.city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/10 pt-6 text-center text-xs text-muted-foreground">
          <span>&copy; 2026 Mehdi Sahari</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
