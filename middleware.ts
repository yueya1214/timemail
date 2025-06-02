import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 公开路由，不需要认证
  const publicRoutes = ["/", "/sign-in", "/sign-up"];
  
  // 检查是否为公开路由
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname === route || 
    request.nextUrl.pathname.startsWith(route + '/')
  );

  // 如果是公开路由，直接放行
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // 这里可以添加自定义认证逻辑
  // 例如检查cookie或token

  // 默认放行
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};