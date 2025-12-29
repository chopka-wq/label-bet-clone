import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Проверяем, есть ли уже языковой префикс
  const pathnameHasLocale = pathname.startsWith('/pl') || pathname === '/pl';
  
  // Если нет языкового префикса и это не статические файлы
  if (!pathnameHasLocale && !pathname.startsWith('/_next') && !pathname.startsWith('/api') && !pathname.includes('.')) {
    // По умолчанию редиректим на английскую версию (без префикса)
    // Можно добавить определение языка по заголовкам Accept-Language
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|og-image.png).*)',
  ],
};

