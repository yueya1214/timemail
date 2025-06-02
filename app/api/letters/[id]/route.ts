import { NextRequest, NextResponse } from 'next/server';

// 获取单个信件
export async function GET(
  request: NextRequest,
) {
  try {
    // 从URL中提取ID参数
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    
    if (!id) {
      return NextResponse.json({ error: '缺少信件ID' }, { status: 400 });
    }
    
    // 这里应该从D1数据库获取特定信件
    // 示例响应
    return NextResponse.json({ 
      letter: {
        id,
        title: '示例信件',
        content: '这是一封示例信件内容',
        scheduledDate: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('获取信件失败:', error);
    return NextResponse.json({ error: '获取信件失败' }, { status: 500 });
  }
}

// 更新信件
export async function PUT(
  request: NextRequest,
) {
  try {
    // 从URL中提取ID参数
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    
    const data = await request.json();
    
    // 这里应该更新D1数据库中的信件
    // 示例响应
    return NextResponse.json({ 
      success: true,
      letter: {
        id,
        ...data,
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('更新信件失败:', error);
    return NextResponse.json({ error: '更新信件失败' }, { status: 500 });
  }
}

// 删除信件
export async function DELETE(
  request: NextRequest,
) {
  try {
    // 从URL中提取ID参数
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    
    // 这里应该从D1数据库删除信件
    // 示例响应
    return NextResponse.json({ 
      success: true,
      deletedId: id
    });
  } catch (error) {
    console.error('删除信件失败:', error);
    return NextResponse.json({ error: '删除信件失败' }, { status: 500 });
  }
} 