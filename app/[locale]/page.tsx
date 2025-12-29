import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import WelcomeSection from '@/components/WelcomeSection';
import BettingTable from '@/components/BettingTable';
import PromotionsCarousel from '@/components/PromotionsCarousel';
import CurrentPromotions from '@/components/CurrentPromotions';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StickyRegisterButton from '@/components/StickyRegisterButton';
import { getLanguageFromPath, supportedLanguages } from '@/lib/i18n';
import { getTranslation } from '@/utils/translations';
import { Metadata } from 'next';

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
  const currentPath = locale === 'en' ? '' : `/${locale}`;

  return {
    title: 'BetLabel - Online Betting & Casino | 1500€ Welcome Bonus',
    description: t.index.heroText.substring(0, 160),
    alternates: {
      canonical: currentPath || '/',
      languages: {
        'en': '/en',
        'pl': '/pl',
        'x-default': '/en',
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const language = getLanguageFromPath(`/${locale}`) || 'en';
  const t = getTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />
      <main className="pb-20 sm:pb-0">
        <HeroSection locale={locale} />
        <CategoryGrid />
        <WelcomeSection locale={locale} />
        <BettingTable />
        <CurrentPromotions />
        <PromotionsCarousel />
        <FAQSection locale={locale} />
      </main>
      <div className="pb-20 sm:pb-0">
        <Footer locale={locale} />
      </div>
      <StickyRegisterButton locale={locale} />
    </div>
  );
}
