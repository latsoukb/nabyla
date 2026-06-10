import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/nabyla" : "";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isGithubPages,
  },
  trailingSlash: isGithubPages,
};

export default nextConfig;
