import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/votewise-ai-election-assistant' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/votewise-ai-election-assistant' : '',
};

export default nextConfig;
