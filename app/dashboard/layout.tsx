import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* 侧边栏 */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">TimeMail</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link 
                href="/dashboard" 
                className="block px-4 py-2 hover:bg-gray-700"
              >
                仪表盘
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/letters" 
                className="block px-4 py-2 hover:bg-gray-700"
              >
                我的信件
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/settings" 
                className="block px-4 py-2 hover:bg-gray-700"
              >
                设置
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
} 