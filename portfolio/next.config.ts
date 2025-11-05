import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    domains: ["dev-files.yenegetse.com"],
  },
  // other config options can stay here
};

export default nextConfig;
