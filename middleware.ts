import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // 公开路由，不需要认证
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};