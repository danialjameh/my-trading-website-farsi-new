/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This line is crucial for static export on Vercel

  // Optional: Set a base path if your site is deployed to a sub-path (e.g. yourdomain.com/blog)
  // basePath: '/blog',

  // Optional: Configure image optimization for local development, Vercel handles it automatically in production
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export, Vercel's built-in optimization will handle it.
  },
};

module.exports = nextConfig;