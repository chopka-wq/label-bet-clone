import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLanguage, supportedLanguages } from './src/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Пропускаем статические файлы и API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/og-image.png')
  ) {
    return NextResponse.next();
  }

  // Проверяем, есть ли уже языковой префикс
  const pathnameHasLocale = supportedLanguages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Если есть языковой префикс, пропускаем
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Редиректим на версию с языковым префиксом
  const newPathname = `/${defaultLanguage}${pathname === '/' ? '' : pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = newPathname;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|og-image.png).*)',
  ],
};

