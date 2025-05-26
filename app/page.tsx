'use client';

import { Button } from './components/ui/button';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Home() {
  const { userId, isLoaded } = useAuth();
  const isSignedIn = isLoaded && !!userId;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold text-blue-600">时间邮局</div>
          <div className="space-x-4">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button>进入控制台</Button>
              </Link>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="outline">登录</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>注册</Button>
                </Link>
              </>
            )}
          </div>
        </header>
        
        <main className="max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              给未来写一封信
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              在时间邮局，写下你的思考与情感，在未来的某一天，它会准时送达。
              给明天的自己一个惊喜，给未来的朋友一份祝福，或者留下珍贵的回忆。
            </p>
            <div className="py-8">
              <Link href={isSignedIn ? "/dashboard/letters/new" : "/sign-up"}>
                <Button size="lg" className="px-8 py-3 text-lg">
                  {isSignedIn ? "写一封新信" : "立即开始"}
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-500 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">创建账号</h3>
              <p className="text-gray-600">
                注册一个账号，开始使用时间邮局的全部功能。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-500 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">撰写信件</h3>
              <p className="text-gray-600">
                写下你想表达的一切，选择收件人并设定发送日期。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-500 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">未来送达</h3>
              <p className="text-gray-600">
                当约定的日期到来时，你的信件将会准时送达收件人的邮箱。
              </p>
            </div>
          </div>
        </main>
        
        <footer className="mt-24 py-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 时间邮局 - 给未来写一封信</p>
        </footer>
      </div>
    </div>
  );
}
