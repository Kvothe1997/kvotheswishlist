import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://m.media-amazon.com/images/I/813TAs+ZTeL._SL1500_.jpg'), new URL('https://m.media-amazon.com/images/I/81hXZ1Ib6gL._AC_SL1500_.jpg'), new URL('https://m.media-amazon.com/images/I/71UwQseCCfL._AC_SL1500_.jpg')],
  },
};

export default nextConfig;
