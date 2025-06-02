// Cloudflare Pages Functions API路由处理程序
// 这个文件会捕获所有 /api/* 路径的请求

export const onRequest = async (context: any) => {
  // 获取请求路径
  const url = new URL(context.request.url);
  const path = url.pathname;
  
  // 处理API请求
  // 这里可以根据路径进行不同的处理
  if (path.startsWith('/api/letters')) {
    // 处理信件相关的API
    const env = context.env;
    const db = env.DB; // 这里使用wrangler.toml中配置的D1数据库
    
    // 示例响应
    return new Response(JSON.stringify({
      success: true,
      message: '这是来自Cloudflare Pages Functions的响应',
      path: path
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  // 默认响应
  return new Response(JSON.stringify({
    error: '未找到API路由'
  }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}; 