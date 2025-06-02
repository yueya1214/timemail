/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages支持
  output: 'standalone',
  
  // 确保兼容性
  experimental: {
    serverComponentsExternalPackages: [],
  },
  
  // 环境变量
  env: {
    NEXT_PUBLIC_ENVIRONMENT: process.env.NODE_ENV,
  },
};

module.exports = nextConfig; 