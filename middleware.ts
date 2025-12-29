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

  // Проверяем наличие двойных языковых префиксов (например, /pl/en/...)
  const doubleLocalePattern = /^\/(pl|en)\/(pl|en)\//;
  if (doubleLocalePattern.test(pathname)) {
    // Удаляем первый префикс и оставляем второй
    const cleanPath = pathname.replace(/^\/(pl|en)/, '');
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    return NextResponse.redirect(url);
  }

  // Проверяем, есть ли уже правильный языковой префикс
  const pathnameHasLocale = supportedLanguages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Если есть правильный языковой префикс, пропускаем
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

