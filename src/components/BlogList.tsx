"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover_url?: string;
  created_at: string;
}

export default function BlogList({ initialPosts }: { initialPosts: Post[] }) {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-sm font-mono px-4 py-1.5 rounded-full mb-6">
              <BookOpen size={14} />
              Publié chaque jour
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">Blog IA & Automatisation</h1>
            <p className="text-blue-100/80 text-lg max-w-xl mx-auto">
              Un article par jour sur l'IA, n8n, les agents et l'automatisation — par Mehdi Sahari, freelance à Montpellier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {initialPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Aucun article pour le moment.</p>
              <p className="text-slate-400 text-sm mt-2">Le premier article sera publié demain.</p>
            </div>
          )}
          {initialPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialPosts.map((post, i) => (
                <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-full h-44 overflow-hidden bg-slate-100 shrink-0">
                      {post.cover_url ? (
                        <img src={post.cover_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      ) : (
                        <div className="w-full h-full" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }} />
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                        <Calendar size={12} />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                      <h2 className="font-heading font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                      {post.excerpt && <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>}
                      <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                        Lire l'article <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
