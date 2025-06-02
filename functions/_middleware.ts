// Cloudflare Pages Functions中间件
import type { Context } from '@cloudflare/workers-types';

export const onRequest = async (context: Context) => {
  // 这里可以添加认证、日志等中间件逻辑
  return await context.next();
}; 