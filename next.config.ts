import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/personal-website",
  assetPrefix: "/personal-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
