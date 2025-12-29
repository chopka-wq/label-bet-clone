import Header from '@/src/components/Header';
import HeroSection from '@/src/components/HeroSection';
import CategoryGrid from '@/src/components/CategoryGrid';
import WelcomeSection from '@/src/components/WelcomeSection';
import BettingTable from '@/src/components/BettingTable';
import PromotionsCarousel from '@/src/components/PromotionsCarousel';
import CurrentPromotions from '@/src/components/CurrentPromotions';
import FAQSection from '@/src/components/FAQSection';
import Footer from '@/src/components/Footer';
import StickyRegisterButton from '@/src/components/StickyRegisterButton';
import { getLanguageFromPath } from '@/src/lib/i18n';
import { getTranslation } from '@/src/utils/translations';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
