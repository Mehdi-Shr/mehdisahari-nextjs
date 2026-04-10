import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading font-bold text-6xl text-primary mb-4">404</h1>
      <p className="text-slate-500 text-lg mb-8">Cette page n'existe pas.</p>
      <Link href="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
        Retour à l'accueil
      </Link>
    </div>
  );
}
