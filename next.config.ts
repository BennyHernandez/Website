import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  output: process.env.NODE_ENV !== "production" ? "standalone" : "export",
};

export default nextConfig;
