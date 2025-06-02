'use client';

import React from 'react';
import Link from 'next/link';

export default function LettersPage() {
  // 模拟信件数据
  const letters = [
    {
      id: '1',
      title: '给未来的自己',
      scheduledDate: '2025-12-31',
      status: 'pending',
    },
    {
      id: '2',
      title: '新年计划',
      scheduledDate: '2024-01-01',
      status: 'sent',
    },
    {
      id: '3',
      title: '生日祝福',
      scheduledDate: '2024-05-15',
      status: 'sent',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">我的信件</h1>
        <Link
          href="/dashboard/letters/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          新建信件
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                标题
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                计划发送日期
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                状态
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">操作</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {letters.map((letter) => (
              <tr key={letter.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {letter.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{letter.scheduledDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      letter.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {letter.status === 'pending' ? '等待发送' : '已发送'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/dashboard/letters/${letter.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    查看
                  </Link>
                  {letter.status === 'pending' && (
                    <Link
                      href={`/dashboard/letters/${letter.id}/edit`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      编辑
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 