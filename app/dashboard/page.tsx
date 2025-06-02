import React from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">仪表盘</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">信件统计</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-gray-500">待发送</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-sm text-gray-500">已发送</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">近期活动</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <p className="text-sm">
                <span className="font-medium">给未来的自己</span> 将在 3 天后发送
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm">
                <span className="font-medium">新年计划</span> 已于 2023-01-01 发送
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm">
                <span className="font-medium">生日祝福</span> 已于 2023-05-15 发送
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 