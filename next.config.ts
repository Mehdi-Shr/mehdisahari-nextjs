import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Les composants copiés depuis Vite ont des types framer-motion moins stricts
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.supabase.co" },
    ],
  },
};

export default nextConfig;
