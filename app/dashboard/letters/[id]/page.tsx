'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function LetterDetailPage() {
  const params = useParams();
  const letterId = params.id as string;
  
  // 在实际应用中，这里应该从API获取信件数据
  const [letter] = useState({
    id: letterId,
    title: '给未来的自己',
    content: '这是一封写给未来自己的信，希望你能记住现在的决心和期望。无论未来如何，请保持乐观和坚持。',
    scheduledDate: '2025-12-31',
    createdAt: '2023-06-01',
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{letter.title}</h1>
        <div className="space-x-2">
          <Link
            href={`/dashboard/letters/${letterId}/edit`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            编辑
          </Link>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            删除
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="mb-4 text-sm text-gray-500">
          <p>创建于: {letter.createdAt}</p>
          <p>计划发送: {letter.scheduledDate}</p>
        </div>
        <div className="prose max-w-none">
          <p>{letter.content}</p>
        </div>
      </div>
    </div>
  );
} 