import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import { NextResponse } from "next/server";

const TOPICS = [
  "automatisation n8n workflows entreprise 2026",
  "agents IA autonomes business automatisation",
  "GPT-4o cas d'usage concrets freelance",
  "créer SaaS IA stack moderne 2026",
  "n8n vs Make vs Zapier comparatif 2026",
  "automatiser prospection commerciale IA",
  "outils automatisation freelance productivité 2026",
  "RAG retrieval augmented generation applications pratiques",
  "chatbot IA site web intégration guide",
  "automatisation marketing digital IA stratégie 2026",
  "webhooks API intégration no-code automatisation",
  "monétiser application IA freelance revenus",
  "Supabase stack IA applications intelligentes",
  "veille technologique IA automatisation outils",
  "LLM local Ollama vs cloud ChatGPT comparatif",
  "prompt engineering techniques avancées production",
  "pipeline données n8n Supabase PostgreSQL",
  "no-code automatisation tendances 2026",
  "IA générative contenu SEO bonnes pratiques",
  "Claude vs GPT-4 vs Gemini comparatif LLM 2026",
  "rapports business automatisés IA dashboard",
  "agents IA production retour expérience cas réels",
  "Stripe paiement automatisation IA facturation",
  "multi-agent système IA orchestration",
  "NestJS API REST IA intégration backend",
  "réseaux sociaux automatisation IA scheduling 2026",
  "OpenAI Assistants API tutoriel pratique",
  "Vercel AI SDK React intégration streaming",
  "analyse données clients IA insights automatiques",
  "documentation technique IA génération automatique",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDailyTopic(): string {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return TOPICS[dayOfYear % TOPICS.length];
}

export async function GET(request: Request) {
  return handleGenerate(request, null);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return handleGenerate(request, body);
}

async function handleGenerate(request: Request, body: Record<string, string> | null) {
  // Auth
  const authHeader = request.headers.get("authorization");
  const xSecret = request.headers.get("x-cron-secret");
  const secret = process.env.CRON_SECRET;

  if (secret) {
    const isVercelCron = authHeader === `Bearer ${secret}`;
    const isManualPost = body?.secret === secret || xSecret === secret;
    if (!isVercelCron && !isManualPost) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
  }

  const topic = body?.topic ?? getDailyTopic();
  const slug = `${slugify(topic)}-${new Date().toISOString().slice(0, 10)}`;

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );

  // Avoid duplicates
  const { data: existing } = await supabase
    .from("posts")
    .select("id")
    .eq("slug", slug)
    .single();

  if (existing) {
    return NextResponse.json({ message: "Article déjà généré aujourd'hui", slug });
  }

  // Perplexity — compatible OpenAI SDK, cherche le web en temps réel
  const perplexity = new OpenAI({
    apiKey: process.env.PERPLEXITY_API_KEY,
    baseURL: "https://api.perplexity.ai",
  });

  const completion = await perplexity.chat.completions.create({
    model: "sonar-pro",
    messages: [
      {
        role: "system",
        content: `Tu es Mehdi Sahari, développeur fullstack freelance basé à Montpellier, expert en IA et automatisation.
Tu rédiges des articles de blog en français qui :
- S'appuient sur des articles et actualités récents que tu trouves sur le web
- Expliquent les concepts à ta manière, concrète et orientée action
- Sont optimisés SEO avec des mots-clés naturellement intégrés
- S'adressent à des entrepreneurs, PME et développeurs qui veulent gagner du temps avec l'IA
- Incluent des exemples tirés de ta pratique de freelance
Ton ton : expert mais accessible, direct, sans blabla.`,
      },
      {
        role: "user",
        content: `Recherche les articles et actualités récents sur : "${topic}"

Puis rédige un article de blog SEO complet en Markdown en t'inspirant de ce que tu trouves, réécrit à ta manière avec tes propres mots et tes expériences de freelance.

Structure obligatoire :
# [Titre accrocheur et SEO incluant les mots-clés principaux]

[Introduction : pose le problème, pourquoi c'est important maintenant, 2-3 paragraphes]

## [Section 1 : ce qui se passe actuellement / contexte]
[Basé sur l'actu récente, chiffres concrets si disponibles]

## [Section 2 : comment ça marche concrètement]
[Explications claires, exemples pratiques]

## [Section 3 : comment tu l'appliques en tant que freelance]
[Ton retour d'expérience, cas concrets de projets clients]

## [Section 4 : comment le mettre en place step by step]
[Guide actionable, étapes numérotées]

## FAQ

**[Question fréquente 1 ?]**
[Réponse concise]

**[Question fréquente 2 ?]**
[Réponse concise]

**[Question fréquente 3 ?]**
[Réponse concise]

## Conclusion

[Résumé des points clés + appel à l'action pour contacter Mehdi Sahari sur https://mehdisahari.fr/#contact]

Longueur cible : 1200-1500 mots. Intègre naturellement les mots-clés SEO liés au sujet tout au long de l'article.`,
      },
    ],
  });

  const content = completion.choices[0].message.content!;
  const firstLine = content.split("\n")[0].replace(/^#+\s*/, "").trim();
  const excerpt = content
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#"))
    .slice(0, 3)
    .join(" ")
    .replace(/[*_]/g, "")
    .slice(0, 220)
    .trim();

  const { error } = await supabase.from("posts").insert({
    slug,
    title: firstLine || topic,
    excerpt,
    content,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "Erreur insertion base de données" }, { status: 500 });
  }

  return NextResponse.json({ success: true, slug, title: firstLine || topic });
}
