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
import PageWrapper from '@/components/PageWrapper';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/utils/translations';

const Index = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <PageWrapper
      title="BetLabel - Online Betting & Casino | 1500€ Welcome Bonus"
      description={t.index.heroText.substring(0, 160)}
    >
      <div className="min-h-screen bg-background">
        <Header />
      <main className="pb-20 sm:pb-0">
        <HeroSection />
        <CategoryGrid />
        <WelcomeSection />
        <BettingTable />
        <CurrentPromotions />
        <PromotionsCarousel />
        <FAQSection />
      </main>
      <div className="pb-20 sm:pb-0">
        <Footer />
      </div>
        <StickyRegisterButton />
      </div>
    </PageWrapper>
  );
};

export default Index;
