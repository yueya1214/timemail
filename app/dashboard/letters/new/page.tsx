'use client';

import React from 'react';
import Link from 'next/link';

export default function NewLetterPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">新建信件</h1>
        <Link
          href="/dashboard/letters"
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          返回列表
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              标题
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="输入信件标题"
            />
          </div>

          <div>
            <label htmlFor="scheduled-date" className="block text-sm font-medium text-gray-700">
              计划发送日期
            </label>
            <input
              type="date"
              id="scheduled-date"
              name="scheduledDate"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              内容
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="写下您想要发送的内容..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 