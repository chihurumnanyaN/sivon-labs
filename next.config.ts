import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "assets.brandfetch.io",
      },
      {
        protocol: "https",
        hostname: "api.brandfetch.io",
      },
    ],
  },
};

export default nextConfig;
