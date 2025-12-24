import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://m.media-amazon.com/images/I/813TAs+ZTeL._SL1500_.jpg')],
  },
};

export default nextConfig;
