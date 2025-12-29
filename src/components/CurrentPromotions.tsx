'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CurrentPromotions = () => {
  const promotions = [
    {
      id: 1,
      category: 'SPORT',
      title: 'CHRISTMAS DROP',
      description: 'Spinbetter gives free bets every day for an open gift after each deposit',
      image: '🎄',
    },
    {
      id: 2,
      category: 'SPORT',
      title: 'SPORT HALLOWEEN',
      description: 'Make a deposit of €15 or more and receive guaranteed free bets of €3-200 every day!',
      image: '🎃',
    },
    {
      id: 3,
      category: 'SPORT',
      title: 'NHL X NBA JACKPOT',
      description: 'Place bets on hockey and basketball starting at €8 and receive tickets for a chance to win big cash prizes.',
      image: '🏀',
    },
    {
      id: 4,
      category: 'ESPORT',
      title: 'CYBER FREEBET',
      description: 'Get free bets for esports matches every Friday',
      image: '🎮',
    },
  ];

  return (
    <section className="container py-12 lg:py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4">
        Current <span className="text-primary">Promotions</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Don't miss out on our latest offers and bonuses
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {promotions.map((promo) => (
          <Card key={promo.id} className="gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-6">
              <div className="text-4xl mb-4 text-center">{promo.image}</div>
              <Badge variant="outline" className="mb-3">
                {promo.category}
              </Badge>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {promo.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {promo.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CurrentPromotions;
