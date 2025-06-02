/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages支持
  output: 'standalone',
  
  // 确保兼容性
  experimental: {
    // 已移除过时配置
  },
  
  // 服务器外部包
  serverExternalPackages: [],
  
  // 环境变量
  env: {
    NEXT_PUBLIC_ENVIRONMENT: process.env.NODE_ENV,
  },
};

module.exports = nextConfig; 