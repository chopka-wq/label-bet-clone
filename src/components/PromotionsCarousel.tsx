'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Gift, Sparkles, Trophy, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const PromotionsCarousel = () => {
  const promotions = [
    {
      id: 1,
      title: 'Welcome Bonus',
      description: 'Get 1500€ + 150 Free Spins on your first deposit',
      icon: Gift,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      code: 'BETPLUS',
    },
    {
      id: 2,
      title: 'Cashback Offer',
      description: 'Get 10% cashback on all your losses this week',
      icon: Sparkles,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      code: 'CASHBACK10',
    },
    {
      id: 3,
      title: 'VIP Rewards',
      description: 'Exclusive bonuses and perks for VIP members',
      icon: Trophy,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      code: 'VIP2024',
    },
    {
      id: 4,
      title: 'Flash Sale',
      description: 'Limited time offer: Double your deposit up to 500€',
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      code: 'FLASH2X',
    },
  ];

  return (
    <section className="container py-12 lg:py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4">
        Special <span className="text-primary">Offers</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Take advantage of our exclusive promotions and boost your winnings
      </p>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {promotions.map((promo) => (
            <CarouselItem key={promo.id} className="md:basis-1/2 lg:basis-1/2">
              <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-xl ${promo.bgColor} flex items-center justify-center mb-4`}>
                    <promo.icon className={`w-8 h-8 ${promo.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {promo.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono">
                      {promo.code}
                    </Badge>
                    <Button variant="hero" size="sm">
                      Claim Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default PromotionsCarousel;
