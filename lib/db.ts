import { PrismaClient } from '@prisma/client';

// 防止开发环境下创建多个实例
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 开发环境使用Prisma
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Cloudflare环境检测
export const isCloudflareEnvironment = () => {
  return process.env.CF_PAGES === '1' || process.env.CLOUDFLARE_WORKER === '1';
};

// 在Cloudflare环境中，你需要使用D1而不是Prisma
// 这里需要实现一个适配层