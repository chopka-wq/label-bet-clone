import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import WelcomeSection from '@/components/WelcomeSection';
import PromotionsCarousel from '@/components/PromotionsCarousel';
import PopularEventsTable from '@/components/PopularEventsTable';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PromotionsCarousel />
        <CategoryGrid />
        <PopularEventsTable />
        <WelcomeSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
