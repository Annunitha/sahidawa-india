import createNextIntlPlugin from 'next-intl/plugin';
import { fileURLToPath } from "node:url";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: fileURLToPath(new URL("../..", import.meta.url)),
  },
  // NOTE: output: 'standalone' is for Docker/Vercel production builds ONLY.
  // It must NOT be set during local dev as it causes the dev server to exit immediately.
  // Uncomment the line below only when building for production Docker images:
  // output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  serverExternalPackages: ['@supabase/ssr', '@supabase/supabase-js'],
};

export default withNextIntl(nextConfig);
