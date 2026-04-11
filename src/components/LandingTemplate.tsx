"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

function Icon({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const Comp = (LucideIcons as Record<string, LucideIcons.LucideIcon>)[name];
  if (!Comp) return null;
  return <Comp size={size} className={className} />;
}

export interface LandingContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  pains: { icon: string; title: string; desc: string }[];
  results: { icon: string; title: string; desc: string }[];
  usecases: { title: string; desc: string; tag: string }[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  metier: string;
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-heading font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer"
      >
        <span>{q}</span>
        {open ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function LandingTemplate({ content }: { content: LandingContent }) {
  const { hero, pains, results, usecases, process, faq, metier } = content;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center px-4 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white text-sm font-mono font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
              {hero.badge}
            </span>
          </motion.div>
          <motion.h1 {...fade(0.1)} className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {hero.title}
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {hero.subtitle}
          </motion.p>
          <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-base shadow-lg">
              {hero.cta}
            </Link>
          </motion.div>
          <motion.div {...fade(0.4)} className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              ✓ Audit offert
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              ✓ Livraison + 30 jours de support inclus
            </span>
          </motion.div>
        </div>
      </section>

      {/* DOULEURS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fade(0)} className="text-center mb-14">
            <span className="inline-block bg-red-50 text-red-500 text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4">
              Problèmes fréquents
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
              Ce qui ralentit votre {metier} aujourd'hui
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {pains.map((p, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon name={p.icon} size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-900 mb-1">{p.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fade(0)} className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-primary text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4">
              Ce que vous gagnez
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
              Ce qu'on met en place pour vous
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="flex flex-col gap-3 border border-slate-100 rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={r.icon} size={20} className="text-primary" />
                </div>
                <p className="font-heading font-bold text-slate-900">{r.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fade(0)} className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-primary text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4">
              Exemples concrets
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
              Ce qu'on automatise pour vous
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {usecases.map((u, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="bg-white border border-slate-100 rounded-2xl p-6">
                <span className="inline-block bg-primary/10 text-primary text-xs font-mono font-semibold px-2 py-0.5 rounded-full mb-4">{u.tag}</span>
                <p className="font-heading font-bold text-slate-900 mb-2">{u.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fade(0)} className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-primary text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4">
              Comment ça marche
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
              3 étapes pour démarrer
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {process.map((p, i) => (
              <motion.div key={i} {...fade(i * 0.1)} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center font-heading font-bold text-white text-lg shadow-lg shadow-primary/20">
                  {p.step}
                </div>
                <div className="pt-1">
                  <p className="font-heading font-bold text-slate-900 text-lg mb-1">{p.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fade(0)} className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">Questions fréquentes</h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faq.map((f, i) => (
              <motion.div key={i} {...fade(i * 0.06)}>
                <FAQItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}>
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div {...fade(0)} className="flex justify-center mb-6">
            <div className="relative">
              <img src="/photo.jpeg" alt="Mehdi Sahari" className="w-32 h-32 rounded-full object-cover border-2 border-white/20 shadow-xl" />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-[#0f172a]" />
            </div>
          </motion.div>
          <motion.h2 {...fade(0.05)} className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Prêt à automatiser votre {metier} ?
          </motion.h2>
          <motion.p {...fade(0.1)} className="text-blue-100/80 text-lg mb-6">
            Audit de vos process offert — je vous montre ce qu'on peut automatiser en 30 minutes.
          </motion.p>
          <motion.div {...fade(0.15)} className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full">
              ✓ Audit offert
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full">
              ✓ Livraison + 30 jours de support inclus
            </span>
          </motion.div>
          <motion.div {...fade(0.2)}>
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all text-base shadow-lg">
              {hero.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
