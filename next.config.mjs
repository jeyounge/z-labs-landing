/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export' can be used if we want SSG completely, but let's keep it default
  images: {
    unoptimized: true, // Useful for Vercel/static deployments if not using next/image advanced features yet
  },
};

export default nextConfig;
