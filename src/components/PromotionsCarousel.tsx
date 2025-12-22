import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Trophy, Zap, Star, DollarSign } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: 'Welcome Bonus',
    description: 'Get 100% bonus up to $500 on your first deposit',
    icon: Gift,
    bgGradient: 'from-blue-600 to-purple-600',
    buttonText: 'Claim Now',
  },
  {
    id: 2,
    title: 'Daily Cashback',
    description: 'Enjoy 10% cashback on all lost bets every day',
    icon: DollarSign,
    bgGradient: 'from-green-600 to-teal-600',
    buttonText: 'Learn More',
  },
  {
    id: 3,
    title: 'Weekly Tournament',
    description: 'Compete for $10,000 prize pool every week',
    icon: Trophy,
    bgGradient: 'from-yellow-600 to-orange-600',
    buttonText: 'Join Now',
  },
  {
    id: 4,
    title: 'VIP Program',
    description: 'Unlock exclusive rewards and personalized offers',
    icon: Star,
    bgGradient: 'from-purple-600 to-pink-600',
    buttonText: 'Become VIP',
  },
  {
    id: 5,
    title: 'Lightning Bets',
    description: 'Place bets in under 5 seconds with instant payouts',
    icon: Zap,
    bgGradient: 'from-red-600 to-orange-600',
    buttonText: 'Try Now',
  },
];

const PromotionsCarousel = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exclusive Promotions
          </h2>
          <p className="text-muted-foreground text-lg">
            Take advantage of our amazing offers and boost your winnings
          </p>
        </div>
        
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {promotions.map((promo) => {
              const Icon = promo.icon;
              return (
                <CarouselItem key={promo.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-2 hover:border-primary transition-colors">
                      <div className={`h-32 bg-gradient-to-br ${promo.bgGradient} flex items-center justify-center`}>
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                        <p className="text-muted-foreground mb-4 min-h-[48px]">
                          {promo.description}
                        </p>
                        <Button className="w-full" size="lg">
                          {promo.buttonText}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PromotionsCarousel;
