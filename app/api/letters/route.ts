import { NextRequest, NextResponse } from 'next/server';

// 获取所有信件
export async function GET(request: NextRequest) {
  try {
    // 这里应该从D1数据库获取信件
    // 示例响应
    return NextResponse.json({ 
      letters: [] 
    });
  } catch (error) {
    console.error('获取信件失败:', error);
    return NextResponse.json({ error: '获取信件失败' }, { status: 500 });
  }
}

// 创建新信件
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 这里应该将信件保存到D1数据库
    // 示例响应
    return NextResponse.json({ 
      success: true,
      letter: {
        id: 'new-letter-id',
        ...data
      }
    });
  } catch (error) {
    console.error('创建信件失败:', error);
    return NextResponse.json({ error: '创建信件失败' }, { status: 500 });
  }
} 