import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 纯静态导出：next build 产物输出到 out/ 目录，可部署到任意静态托管
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
