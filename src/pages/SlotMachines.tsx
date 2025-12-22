import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Zap, Trophy } from 'lucide-react';

const SlotMachines = () => {
  const featuredSlots = [
    { id: 1, name: 'Mega Fortune', provider: 'NetEnt', rtp: '96.4%', volatility: 'Medium', jackpot: '€2.5M' },
    { id: 2, name: 'Starburst', provider: 'NetEnt', rtp: '96.1%', volatility: 'Low', jackpot: '€250K' },
    { id: 3, name: 'Book of Dead', provider: 'Play\'n GO', rtp: '96.2%', volatility: 'High', jackpot: '€500K' },
    { id: 4, name: 'Gonzo\'s Quest', provider: 'NetEnt', rtp: '95.97%', volatility: 'Medium', jackpot: '€2.5M' },
    { id: 5, name: 'Dead or Alive 2', provider: 'NetEnt', rtp: '96.8%', volatility: 'High', jackpot: '€1.2M' },
  ];

  const popularSlots = [
    { id: 1, name: 'Sweet Bonanza', image: '🎰', rating: 4.8 },
    { id: 2, name: 'Gates of Olympus', image: '⚡', rating: 4.9 },
    { id: 3, name: 'Big Bass Bonanza', image: '🎣', rating: 4.7 },
    { id: 4, name: 'Fire Joker', image: '🔥', rating: 4.6 },
    { id: 5, name: 'Reactoonz', image: '👾', rating: 4.8 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-12 lg:py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Slot</span> Machines
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Spin the reels and win big with our collection of premium slot games. From classic fruit machines to modern video slots with massive jackpots.
            </p>
          </div>

          {/* Popular Slots Carousel */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Popular Slots</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {popularSlots.map((slot) => (
                  <CarouselItem key={slot.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
                      <CardHeader>
                        <div className="text-6xl mb-4 text-center">{slot.image}</div>
                        <CardTitle className="text-center">{slot.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-4">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-sm font-semibold">{slot.rating}</span>
                        </div>
                        <Button className="w-full" variant="default">
                          Play Now
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Featured Slots */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Slots</h2>
            {featuredSlots.map((slot) => (
              <Card key={slot.id} className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2 flex items-center gap-2">
                        {slot.name}
                        {slot.jackpot && (
                          <Badge variant="destructive" className="flex items-center gap-1">
                            <Trophy className="h-3 w-3" />
                            Jackpot
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{slot.provider}</CardDescription>
                    </div>
                    <Badge variant="outline">{slot.volatility}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">RTP</div>
                      <div className="text-lg font-bold text-primary flex items-center gap-1">
                        <Zap className="h-4 w-4" />
                        {slot.rtp}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Jackpot</div>
                      <div className="text-lg font-bold text-foreground">{slot.jackpot}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Volatility</div>
                      <div className="text-lg font-bold text-foreground">{slot.volatility}</div>
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full" variant="default">
                        Play Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SlotMachines;

