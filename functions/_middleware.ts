// Cloudflare Pages Functions中间件

export const onRequest = async (context: any) => {
  // 这里可以添加认证、日志等中间件逻辑
  return await context.next();
}; 