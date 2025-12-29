import type { Metadata } from 'next';
import { getLanguageFromPath } from '@/src/lib/i18n';
import { getTranslation } from '@/src/utils/translations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
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
