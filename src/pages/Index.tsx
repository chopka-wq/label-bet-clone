import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import WelcomeSection from '@/components/WelcomeSection';
import BettingTable from '@/components/BettingTable';
import PromotionsCarousel from '@/components/PromotionsCarousel';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <WelcomeSection />
        <BettingTable />
        <PromotionsCarousel />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
