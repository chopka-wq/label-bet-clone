import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dice6, Coins, Sparkles, Crown } from 'lucide-react';
import ImageTextSection from '@/components/ImageTextSection';
import StickyRegisterButton from '@/components/StickyRegisterButton';
import PageWrapper from '@/components/PageWrapper';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/utils/translations';

const Casino = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const casinoGames = [
    { id: 1, name: 'Blackjack Classic', provider: 'Evolution Gaming', minBet: '€5', maxBet: '€10,000', type: 'Table Game' },
    { id: 2, name: 'European Roulette', provider: 'NetEnt', minBet: '€1', maxBet: '€5,000', type: 'Table Game' },
    { id: 3, name: 'Baccarat VIP', provider: 'Playtech', minBet: '€10', maxBet: '€50,000', type: 'Table Game' },
    { id: 4, name: 'Poker Texas Hold\'em', provider: 'Microgaming', minBet: '€2', maxBet: '€20,000', type: 'Poker' },
    { id: 5, name: 'Live Dealer Blackjack', provider: 'Evolution Gaming', minBet: '€5', maxBet: '€10,000', type: 'Live Casino' },
  ];

  const categories = [
    { name: 'Live Casino', icon: Dice6, count: 156, color: 'text-primary' },
    { name: 'Table Games', icon: Coins, count: 89, color: 'text-primary' },
    { name: 'Poker', icon: Sparkles, count: 45, color: 'text-primary' },
    { name: 'VIP Games', icon: Crown, count: 23, color: 'text-primary' },
  ];

  return (
    <PageWrapper
      title={`${t.casino.title} - BetLabel`}
      description={t.casino.subtitle}
    >
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pb-20 sm:pb-0">
          <section className="container py-12 lg:py-20">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                <span className="text-primary">{t.casino.title.split(' ')[0]}</span> {t.casino.title.split(' ').slice(1).join(' ')}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t.casino.subtitle}
              </p>
            </div>

            {/* Image Text Section */}
            <ImageTextSection
              title={
                <>
                  {t.casino.imageTextTitle.replace('Casino Experience', '').trim()}{' '}
                  <span className="text-primary">Casino Experience</span>
                </>
              }
              text={t.casino.imageTextContent}
              imageLeft={true}
              buttonText={t.buttons.playNow}
            />

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category) => (
              <Card key={category.name} className="gradient-card border-border hover:border-primary transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <category.icon className={`h-8 w-8 ${category.color} mx-auto mb-2`} />
                  <CardTitle className="text-base">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary">{category.count}</div>
                  <CardDescription>{t.casino.gamesAvailable}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

            {/* Casino Games */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">{t.casino.featuredGames}</h2>
            {casinoGames.map((game) => (
              <Card key={game.id} className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{game.name}</CardTitle>
                      <CardDescription>{game.provider}</CardDescription>
                    </div>
                    <Badge variant="outline">{game.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Min Bet</div>
                      <div className="text-lg font-bold text-foreground">{game.minBet}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Max Bet</div>
                      <div className="text-lg font-bold text-foreground">{game.maxBet}</div>
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full" variant="default">
                        {t.buttons.playNow}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </section>
        </main>
        <div className="pb-20 sm:pb-0">
          <Footer />
        </div>
        <StickyRegisterButton />
      </div>
    </PageWrapper>
  );
};

export default Casino;

