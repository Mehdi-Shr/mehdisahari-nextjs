"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Clock, User, ExternalLink } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  keywords?: string[];
  excerpt: string;
  content: string;
  cover_url?: string;
  created_at: string;
  source_guid?: string;
}

function readingTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

export default function BlogPostContent({ post, html }: { post: Post; html: string }) {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 pb-24"
    >
      {/* Hero header */}
      <div
        className="w-full pt-32 pb-16 px-4 mb-14 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}
      >
        {post.cover_url && (
          <div className="absolute inset-0 z-0">
            <img src={post.cover_url} alt="" className="w-full h-full object-cover opacity-20" />
          </div>
        )}
        <div className="container mx-auto max-w-3xl lg:max-w-4xl relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition-colors mb-8">
            <ArrowLeft size={14} />
            Retour au blog
          </Link>
          {post.keywords && post.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.keywords.slice(0, 4).map((kw) => (
                <span key={kw} className="text-xs font-mono bg-white/10 border border-white/20 text-blue-200 px-3 py-1 rounded-full">
                  {kw}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 text-balance">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-blue-100/70 text-lg leading-relaxed mb-8 max-w-2xl">{post.excerpt}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200/60">
            <span className="flex items-center gap-1.5"><User size={13} />Mehdi Sahari</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} />{formatDate(post.created_at)}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{readingTime(post.content)} min de lecture</span>
            {post.source_guid && (
              <a
                href={`https://news.google.com/rss/articles/${post.source_guid}?oc=5`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <ExternalLink size={13} />Article source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Corps de l'article */}
      <div className="container mx-auto max-w-3xl lg:max-w-4xl px-4">
        <div
          className="
            [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-slate-900
            [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-slate-200
            [&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-xl [&_h3]:text-slate-800
            [&_h3]:mt-8 [&_h3]:mb-3
            [&_h4]:font-heading [&_h4]:font-semibold [&_h4]:text-lg [&_h4]:text-slate-700
            [&_h4]:mt-6 [&_h4]:mb-2
            [&_p]:text-slate-600 [&_p]:text-base [&_p]:leading-[1.85] [&_p]:mb-5
            [&_strong]:text-slate-800 [&_strong]:font-semibold
            [&_a]:text-primary [&_a]:font-medium [&_a]:underline-offset-2 [&_a:hover]:underline
            [&_ul]:my-5 [&_ul]:pl-6 [&_ul]:space-y-2
            [&_ol]:my-5 [&_ol]:pl-6 [&_ol]:space-y-2
            [&_li]:text-slate-600 [&_li]:leading-relaxed
            [&_ul_li]:list-disc [&_ol_li]:list-decimal
            [&_blockquote]:border-l-4 [&_blockquote]:border-primary
            [&_blockquote]:bg-blue-50 [&_blockquote]:rounded-r-lg
            [&_blockquote]:px-5 [&_blockquote]:py-3 [&_blockquote]:my-6 [&_blockquote]:text-slate-600
            [&_code]:text-primary [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
            [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:rounded-xl
            [&_pre]:p-5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent
            [&_pre_code]:text-slate-100 [&_pre_code]:p-0
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Liens internes */}
        <div className="mt-16 border border-slate-200 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">Découvrez mes services par secteur</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/notaires" className="text-sm font-medium text-primary hover:underline underline-offset-2">
              Automatisation pour notaires →
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/comptables" className="text-sm font-medium text-primary hover:underline underline-offset-2">
              Automatisation pour comptables →
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/agences-marketing" className="text-sm font-medium text-primary hover:underline underline-offset-2">
              Automatisation pour agences marketing →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl p-10 text-center" style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)" }}>
          <h3 className="font-heading font-bold text-2xl text-white mb-3">Un projet d'automatisation ou d'IA ?</h3>
          <p className="text-blue-100/80 mb-6 max-w-md mx-auto">Discutons de comment l'IA peut transformer votre workflow.</p>
          <Link href="/#contact" className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Démarrer un projet →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
