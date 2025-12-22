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
      title: 'Tournament Prize',
      description: 'Join our weekly tournament and win €50,000',
      icon: Trophy,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      code: 'TOURNAMENT',
    },
    {
      id: 4,
      title: 'Double Deposit',
      description: 'Double your deposit up to €500 this weekend',
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      code: 'DOUBLE500',
    },
  ];

  return (
    <section className="container py-12 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Special <span className="text-primary">Promotions</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't miss out on our exclusive offers and bonuses
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {promotions.map((promo) => (
            <CarouselItem key={promo.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="gradient-card border-border hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${promo.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                    <promo.icon className={`h-8 w-8 ${promo.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{promo.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{promo.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="font-mono text-xs">
                      {promo.code}
                    </Badge>
                  </div>
                  <Button className="w-full" variant="default">
                    Claim Now
                  </Button>
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

