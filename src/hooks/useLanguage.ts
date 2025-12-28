import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'pl';

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Определяем текущий язык из пути
  const getCurrentLanguage = (): Language => {
    const path = location.pathname;
    if (path.startsWith('/pl')) {
      return 'pl';
    }
    return 'en';
  };

  const currentLanguage = getCurrentLanguage();

  // Получаем путь без языкового префикса
  const getPathWithoutLanguage = (): string => {
    const path = location.pathname;
    if (path.startsWith('/pl')) {
      return path.replace('/pl', '') || '/';
    }
    return path;
  };

  // Переключение языка с сохранением текущей страницы
  const switchLanguage = (newLanguage: Language) => {
    const currentPath = getPathWithoutLanguage();
    const newPath = newLanguage === 'pl' 
      ? `/pl${currentPath}`
      : currentPath;
    
    navigate(newPath);
  };

  // Получаем путь с учетом языка
  const getLocalizedPath = (path: string): string => {
    // Если путь уже содержит языковой префикс, возвращаем как есть
    if (path.startsWith('/pl') || path.startsWith('/en')) {
      return path;
    }
    
    if (currentLanguage === 'pl') {
      return `/pl${path}`;
    }
    return path;
  };

  return {
    language: currentLanguage,
    switchLanguage,
    getLocalizedPath,
    getPathWithoutLanguage,
  };
};

