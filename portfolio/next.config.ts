import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-files.yenegetse.com",
        pathname: "/**",
      },
    ],
  },
  // other config options can stay here
};

export default nextConfig;
