import { createClient } from "@supabase/supabase-js";
import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 3600; // ISR: régénère toutes les heures

export const metadata: Metadata = {
  title: "Blog IA & Automatisation — Mehdi Sahari",
  description:
    "Articles quotidiens sur l'IA et l'automatisation : n8n, agents IA, SaaS, no-code. Par Mehdi Sahari, freelance Montpellier.",
  alternates: { canonical: "https://mehdisahari.fr/blog" },
  openGraph: {
    title: "Blog IA & Automatisation — Mehdi Sahari",
    description: "Articles quotidiens sur l'IA, n8n, les agents et l'automatisation.",
    url: "https://mehdisahari.fr/blog",
  },
};

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover_url?: string;
  created_at: string;
}

async function getPosts(): Promise<Post[]> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return [];
  const supabase = createClient(url, key);
  const { data } = await supabase
    .from("posts")
    .select("id, slug, title, excerpt, cover_url, created_at")
    .order("created_at", { ascending: false })
    .limit(50);
  return data ?? [];
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <BlogList initialPosts={posts} />
      <Footer />
    </div>
  );
}
