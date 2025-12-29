export type Language = 'en' | 'pl';

export const defaultLanguage: Language = 'en';
export const supportedLanguages: Language[] = ['en', 'pl'];

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/pl')) {
    return 'pl';
  }
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'en';
}

export function getPathWithoutLanguage(pathname: string): string {
  // Удаляем языковой префикс если он есть
  if (pathname.startsWith('/pl/')) {
    const path = pathname.replace('/pl', '') || '/';
    return path;
  }
  if (pathname.startsWith('/en/')) {
    const path = pathname.replace('/en', '') || '/';
    return path;
  }
  if (pathname === '/pl' || pathname === '/en') {
    return '/';
  }
  return pathname;
}

export function getLocalizedPath(path: string, language: Language): string {
  // Сначала удаляем существующий языковой префикс
  let cleanPath = path;
  if (path.startsWith('/pl/') || path.startsWith('/en/')) {
    cleanPath = path.replace(/^\/(pl|en)/, '') || '/';
  } else if (path === '/pl' || path === '/en') {
    cleanPath = '/';
  }
  
  // Теперь добавляем нужный префикс
  if (language === 'pl') {
    return `/pl${cleanPath === '/' ? '' : cleanPath}`;
  }
  // Для английского языка префикс /en обязателен
  return `/en${cleanPath === '/' ? '' : cleanPath}`;
}

