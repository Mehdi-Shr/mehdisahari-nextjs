"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronDown, Check, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const inputClass =
  "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all";

type Option = { value: string; label: string };

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full bg-white border rounded-xl px-4 py-3 font-body text-sm text-left flex items-center justify-between transition-all ${
          open
            ? "border-primary ring-2 ring-primary/10"
            : "border-slate-200 hover:border-slate-300"
        } ${!selected ? "text-slate-400" : "text-foreground"}`}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} className="text-slate-400" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden"
          >
            {options.map((o) => (
              <li key={o.value}>
                <button
                  type="button"
                  onClick={() => { onChange(o.value); setOpen(false); }}
                  className="w-full px-4 py-3 text-sm font-body text-left flex items-center justify-between hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <span>{o.label}</span>
                  {value === o.value && <Check size={14} className="text-primary" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const serviceOptions: Option[] = [
    { value: "automation", label: t("Automatisation & n8n", "Automation & n8n") },
    { value: "website", label: t("Site web / Landing page", "Website / Landing page") },
    { value: "saas", label: "SaaS" },
    { value: "dashboard", label: "Dashboard" },
    { value: "other", label: t("Autre", "Other") },
  ];

  const budgetOptions: Option[] = [
    { value: "<1k", label: "< 1 000€" },
    { value: "1k-5k", label: "1 000 – 5 000€" },
    { value: "5k-15k", label: "5 000 – 15 000€" },
    { value: "15k+", label: "15 000€+" },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("Contact", "Contact")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            {t("Démarrons un projet", "Let's start a project")}
          </h2>
          <p className="text-muted-foreground">
            {t(
              "Décrivez-moi votre besoin, je vous réponds sous 24h.",
              "Tell me what you need, I'll get back to you within 24h."
            )}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 md:p-8 space-y-4 shadow-sm border border-slate-100"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("Votre nom", "Your name")}
              required
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("Votre email", "Your email")}
              required
              className={inputClass}
            />
          </div>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder={t("Entreprise (optionnel)", "Company (optional)")}
            className={inputClass}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Dropdown
              options={serviceOptions}
              value={form.service}
              onChange={(v) => setForm((f) => ({ ...f, service: v }))}
              placeholder={t("Type de projet", "Project type")}
            />
            <Dropdown
              options={budgetOptions}
              value={form.budget}
              onChange={(v) => setForm((f) => ({ ...f, budget: v }))}
              placeholder={t("Budget estimé", "Estimated budget")}
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("Décrivez votre projet...", "Describe your project...")}
            required
            rows={5}
            className={inputClass + " resize-none"}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full bg-primary text-white font-body font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm shadow-sm disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {status === "loading" && <Loader2 size={16} className="animate-spin" />}
            {status === "loading" && t("Envoi en cours...", "Sending...")}
            {status !== "loading" && t("Envoyer le message →", "Send message →")}
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3"
              >
                <CheckCircle2 size={16} />
                {t("Message envoyé ! Je vous réponds sous 24h.", "Message sent! I'll get back to you within 24h.")}
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
              >
                <AlertCircle size={16} />
                {t("Une erreur s'est produite. Réessayez.", "Something went wrong. Please try again.")}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
