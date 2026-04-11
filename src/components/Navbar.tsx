"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "@/components/LanguageToggle";
import { X } from "lucide-react";

const Navbar = () => {
  const { t } = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#stack", label: "Stack" },
    { href: "#about", label: t("À propos", "About") },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto py-4 px-4 lg:px-8 flex items-center justify-between lg:grid lg:grid-cols-3">
          <Link href="/" className={`font-heading font-bold overflow-hidden transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
            <AnimatePresence mode="wait">
              {scrolled ? (
                <motion.span key="full" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="block text-xl">
                  Mehdi Sahari
                </motion.span>
              ) : (
                <motion.span key="initials" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="block text-2xl">
                  MS
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className={`font-body text-sm font-semibold transition-colors hover:text-primary whitespace-nowrap cursor-pointer ${scrolled ? "text-slate-700" : "text-white/90"}`}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <Link href="/blog" className={`font-body text-sm font-semibold transition-colors hover:text-primary ${scrolled ? "text-slate-700" : "text-white/90"}`}>
                Blog
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-4">
            <LanguageToggle />
            <button
              onClick={() => scrollTo("#contact")}
              className={`font-body text-sm font-semibold px-4 py-2 rounded transition-all whitespace-nowrap cursor-pointer ${scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}
            >
              {t("Démarrer un projet", "Start a project")}
            </button>
          </div>

          <button className="lg:hidden flex flex-col gap-1.5 z-50" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <span className={`w-6 h-0.5 transition-colors ${scrolled ? "bg-primary" : "bg-white"}`} />
            <span className={`w-6 h-0.5 transition-colors ${scrolled ? "bg-primary" : "bg-white"}`} />
            <span className={`w-4 h-0.5 transition-colors ${scrolled ? "bg-primary" : "bg-white"}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.28 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-4/5 max-w-sm flex flex-col overflow-hidden"
              style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              <div className="relative z-10 flex justify-end p-6">
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all">
                  <X size={18} />
                </button>
              </div>
              <nav className="relative z-10 flex-1 flex flex-col justify-center px-8 gap-2">
                {links.map((l, i) => (
                  <motion.button key={l.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }} onClick={() => scrollTo(l.href)} className="group flex items-center gap-4 py-4 border-b border-white/8 text-left">
                    <span className="font-mono text-xs text-blue-400/60 w-6">0{i + 1}</span>
                    <span className="font-heading font-bold text-2xl text-white group-hover:text-blue-300 transition-colors">{l.label}</span>
                    <span className="ml-auto text-white/20 group-hover:text-blue-300 transition-colors">→</span>
                  </motion.button>
                ))}
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + links.length * 0.07, duration: 0.35 }}>
                  <Link href="/blog" onClick={() => setMobileOpen(false)} className="group flex items-center gap-4 py-4 border-b border-white/8">
                    <span className="font-mono text-xs text-blue-400/60 w-6">0{links.length + 1}</span>
                    <span className="font-heading font-bold text-2xl text-white group-hover:text-blue-300 transition-colors">Blog</span>
                    <span className="ml-auto text-white/20 group-hover:text-blue-300 transition-colors">→</span>
                  </Link>
                </motion.div>
              </nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="relative z-10 p-8 flex flex-col gap-4 border-t border-white/10">
                <button onClick={() => scrollTo("#contact")} className="w-full bg-white text-primary font-body font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                  {t("Démarrer un projet →", "Start a project →")}
                </button>
                <div className="flex justify-center"><LanguageToggle /></div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
