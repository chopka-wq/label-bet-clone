import type { Metadata } from 'next';
import { getLanguageFromPath, supportedLanguages } from '@/lib/i18n';
import { getTranslation } from '@/utils/translations';

export async function generateStaticParams() {
  return supportedLanguages.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const language = getLanguageFromPath(`/${locale}`) || 'en';
  const t = getTranslation(language);

  return {
    title: 'BetLabel - Online Betting & Casino | 1500€ Welcome Bonus',
    description: t.index.heroText.substring(0, 160),
    alternates: {
      languages: {
        'en': '/en',
        'pl': '/pl',
        'x-default': '/en',
      },
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
