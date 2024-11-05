import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    GROCERY_ADMIN_BASE_URL: process.env.GROCERY_ADMIN_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
