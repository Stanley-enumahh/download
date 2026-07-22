import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 1024, 1280, 1920],
  },
};

export default nextConfig;
