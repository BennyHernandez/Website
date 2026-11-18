import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  output: process.env.NODE_ENV !== "production" ? "standalone" : "export",
  turbopack: {
    rules: {
      "*.md": {
        loaders: [
          {
            loader: "frontmatter-markdown-loader",
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
