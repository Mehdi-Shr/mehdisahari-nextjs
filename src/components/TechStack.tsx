"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const row1 = ["Next.js", "React", "Java Spring Boot", "Django REST", "Node.js", "NestJS", "Prisma"];
const row2 = ["PostgreSQL", "Docker", "n8n", "Claude", "Gemini", "Kimi", "OpenAI", "Tailwind", "GCP", "TypeScript", "Redis"];

const Badge = ({ label }: { label: string }) => (
  <span className="font-mono text-xs border border-primary/25 text-primary/80 px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0">
    {label}
  </span>
);

const InfiniteRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-3"
        style={{ width: "max-content" }}
        animate={{ x: reverse ? ["-25%", "0%"] : ["0%", "-25%"] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {duplicated.map((item, i) => (
          <Badge key={i} label={item} />
        ))}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  const { t } = useLang();

  return (
    <section id="stack" className="py-24">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("Stack technique", "Tech stack")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            {t("Technologies maîtrisées", "My tech stack")}
          </h2>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 overflow-hidden">
        <InfiniteRow items={row1} />
        <InfiniteRow items={row2} reverse />
      </div>
    </section>
  );
};

export default TechStack;
