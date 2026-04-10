import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostContent from "@/components/BlogPostContent";

export const revalidate = 3600; // ISR: régénère toutes les heures

interface Post {
  id: string;
  slug: string;
  title: string;
  seo_title?: string;
  meta_description?: string;
  keywords?: string[];
  excerpt: string;
  content: string;
  cover_url?: string;
  created_at: string;
}

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

async function getPost(slug: string): Promise<Post | null> {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.from("posts").select("*").eq("slug", slug).single();
  return data ?? null;
}

// Pré-génère les 50 derniers articles au build (ISR pour le reste)
export async function generateStaticParams() {
  const sb = getSupabase();
  if (!sb) return [];
  const { data } = await sb
    .from("posts")
    .select("slug")
    .order("created_at", { ascending: false })
    .limit(50);
  return (data ?? []).map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const image = post.cover_url ?? "https://mehdisahari.fr/og-image.svg";
  return {
    title: `${post.seo_title ?? post.title} — Mehdi Sahari`,
    description: post.meta_description ?? post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://mehdisahari.fr/blog/${post.slug}` },
    openGraph: {
      title: post.seo_title ?? post.title,
      description: post.meta_description ?? post.excerpt,
      url: `https://mehdisahari.fr/blog/${post.slug}`,
      type: "article",
      publishedTime: post.created_at,
      authors: ["Mehdi Sahari"],
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo_title ?? post.title,
      description: post.meta_description ?? post.excerpt,
      images: [image],
    },
  };
}

function extractFAQ(html: string): Array<{ question: string; answer: string }> {
  // Extraction côté serveur via regex (pas de DOMParser en Node.js)
  const faqs: Array<{ question: string; answer: string }> = [];
  // Trouve la section FAQ
  const faqMatch = html.match(/<h[23][^>]*>[^<]*(faq|question|foire)[^<]*<\/h[23]>/i);
  if (!faqMatch) return faqs;
  const afterFaq = html.slice(html.indexOf(faqMatch[0]) + faqMatch[0].length);
  // Extrait les paires h3 + p suivantes
  const pairRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gis;
  let match;
  while ((match = pairRegex.exec(afterFaq)) !== null) {
    // Stop si on atteint un h2
    if (afterFaq.slice(0, match.index).includes("<h2")) break;
    const question = match[1].replace(/<[^>]+>/g, "").trim();
    const answer = match[2].replace(/<[^>]+>/g, "").trim();
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  // Rendu HTML côté serveur — visible sans JS pour les bots/LLMs
  const contentWithoutH1 = post.content.replace(/^#[^\n]*\n+/, "").trim();
  const html = await marked(contentWithoutH1, { gfm: true });

  // Schema.org BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description ?? post.excerpt,
    image: post.cover_url ?? "https://mehdisahari.fr/og-image.svg",
    datePublished: post.created_at,
    dateModified: post.created_at,
    url: `https://mehdisahari.fr/blog/${post.slug}`,
    keywords: post.keywords?.join(", "),
    author: { "@type": "Person", name: "Mehdi Sahari", url: "https://mehdisahari.fr" },
    publisher: { "@type": "Person", name: "Mehdi Sahari", url: "https://mehdisahari.fr" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://mehdisahari.fr/blog/${post.slug}` },
  };

  // Schema.org FAQPage (si section FAQ détectée)
  const faqs = extractFAQ(html);
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* JSON-LD injecté côté serveur — visible sans JS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />
      <BlogPostContent post={post} html={html} />
      <Footer />
    </div>
  );
}
