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
  if (pathname.startsWith('/pl')) {
    const path = pathname.replace('/pl', '') || '/';
    return path;
  }
  return pathname;
}

export function getLocalizedPath(path: string, language: Language): string {
  if (path.startsWith('/pl') || path.startsWith('/en')) {
    return path;
  }
  
  if (language === 'pl') {
    return `/pl${path}`;
  }
  return path;
}

