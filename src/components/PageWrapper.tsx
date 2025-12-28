import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const PageWrapper = ({ children, title, description }: PageWrapperProps) => {
  const location = useLocation();
  const { language, getPathWithoutLanguage } = useLanguage();
  
  const currentPath = getPathWithoutLanguage();

  useEffect(() => {
    // Используем динамический baseUrl из window.location
    const currentBaseUrl = window.location.origin;
    
    // Обновляем lang атрибут HTML элемента
    document.documentElement.lang = language;

    // Обновляем title и description если они переданы
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Добавляем/обновляем canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${currentBaseUrl}${location.pathname}`);

    // Добавляем/обновляем hreflang ссылки
    const languages = [
      { code: 'en', path: currentPath },
      { code: 'pl', path: `/pl${currentPath}` },
    ];

    // Удаляем старые hreflang ссылки
    const oldHreflangs = document.querySelectorAll('link[rel="alternate"][hrefLang]');
    oldHreflangs.forEach(link => link.remove());

    // Добавляем новые hreflang ссылки
    languages.forEach((lang) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hrefLang', lang.code);
      link.setAttribute('href', `${currentBaseUrl}${lang.path === '/' ? '' : lang.path}`);
      document.head.appendChild(link);
    });

    // Добавляем x-default
    const xDefaultLink = document.createElement('link');
    xDefaultLink.setAttribute('rel', 'alternate');
    xDefaultLink.setAttribute('hrefLang', 'x-default');
    xDefaultLink.setAttribute('href', `${currentBaseUrl}${currentPath === '/' ? '' : currentPath}`);
    document.head.appendChild(xDefaultLink);
  }, [language, location.pathname, title, description, currentPath]);

  return <>{children}</>;
};

export default PageWrapper;

