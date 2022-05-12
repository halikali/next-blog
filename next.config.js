/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
    formats: ["image/webp", "image/avif"],
    optimizeImages: true,
    deviceSizes: [375, 768, 1024, 1200, 1600],
  },
};

module.exports = nextConfig;
