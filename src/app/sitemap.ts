import { createClient } from "@supabase/supabase-js";
import type { MetadataRoute } from "next";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return [
    { url: "https://mehdisahari.fr/", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: "https://mehdisahari.fr/blog", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: "https://mehdisahari.fr/notaires", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://mehdisahari.fr/agences-marketing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://mehdisahari.fr/comptables", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
  const supabase = createClient(url, key);
  const { data: posts } = await supabase
    .from("posts")
    .select("slug, created_at")
    .order("created_at", { ascending: false });

  const postUrls: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `https://mehdisahari.fr/blog/${post.slug}`,
    lastModified: post.created_at,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: "https://mehdisahari.fr/", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: "https://mehdisahari.fr/blog", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: "https://mehdisahari.fr/notaires", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://mehdisahari.fr/agences-marketing", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://mehdisahari.fr/comptables", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...postUrls,
  ];
}
