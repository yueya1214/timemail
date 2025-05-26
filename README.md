# 时间邮局 - 给未来写一封信

时间邮局是一个让用户可以写信给未来的网络应用。用户可以撰写信件，设定未来的发送日期，系统会在指定的日期将这些信件发送给收件人。

## 功能特点

- 用户认证：支持邮箱/密码注册、登录和第三方OAuth登录
- 信件管理：创建、编辑、查看和删除信件
- 富文本编辑：支持简单的文本格式化功能
- 定时发送：在用户指定的日期自动发送信件
- 多收件人：支持给多个收件人发送同一封信

## 技术栈

- **前端**：React + Next.js 14 + TailwindCSS
- **认证**：Clerk
- **数据库**：SQLite (开发环境) / Cloudflare D1 (生产环境)
- **部署**：Cloudflare Pages + Workers

## 快速开始

### 前提条件

- Node.js 18+
- NPM 或 PNPM

### 安装步骤

1. 克隆仓库
   ```
   git clone https://github.com/yourusername/timemail.git
   cd timemail
   ```

2. 安装依赖
   ```
   npm install
   ```

3. 配置环境变量
   ```
   cp .env.example .env.local
   ```
   填写必要的环境变量，尤其是Clerk认证相关的配置。

4. 创建并初始化数据库
   ```
   npx prisma migrate dev
   ```

5. 启动开发服务器
   ```
   npm run dev
   ```

6. 访问 http://localhost:3000

## 部署到Cloudflare

### 前提条件

- Cloudflare账户
- Wrangler CLI工具

### 部署步骤

1. 安装Wrangler
   ```
   npm install -g wrangler
   ```

2. 登录到Cloudflare
   ```
   wrangler login
   ```

3. 创建D1数据库
   ```
   wrangler d1 create timemail
   ```

4. 修改`wrangler.toml`配置，确保数据库ID正确。

5. 应用数据库迁移
   ```
   wrangler d1 migrations apply timemail
   ```

6. 构建并部署
   ```
   npm run build
   wrangler pages publish .next --project-name timemail
   ```

## 贡献指南

欢迎提交PR或Issue来帮助改进这个项目！

## 许可证

MIT
