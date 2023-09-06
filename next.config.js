/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    NEXT_PUBLIC_MAPBOX_API_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
    NEXT_PUPLIC_GOOGLE_MAP_API_KEY: process.env.NEXT_PUPLIC_GOOGLE_MAP_API_KEY,
  },
};

module.exports = nextConfig;
