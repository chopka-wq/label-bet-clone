import { Button } from '@/components/ui/button';
import { Monitor } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="container py-12 lg:py-16 scroll-mt-32">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image/Device Mockup */}
        <div className="relative order-2 lg:order-1">
          <div className="gradient-card rounded-2xl p-8 border border-border shadow-card">
            <div className="relative">
              {/* Laptop mockup */}
              <div className="bg-secondary rounded-t-xl p-2 pb-0">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="bg-background rounded-t-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-xl font-bold">
                        <span className="text-primary">BET</span>
                        <span className="text-foreground">LABEL</span>
                      </span>
                    </div>
                    <p className="text-lg font-bold text-foreground">
                      BETLABEL
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      CASINO & SPORT BETTING
                    </p>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="bg-secondary/80 h-4 rounded-b-lg mx-8" />
              <div className="bg-secondary/60 h-2 rounded-b-xl mx-4" />
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-card rounded-full p-3 border border-border shadow-card">
            <div className="text-sm font-bold">
              <span className="text-primary">BET</span>
              <span className="text-foreground">LABEL</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
            Welcome to the exciting world of{' '}
            <span className="text-primary">BetLabel</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            On the one hand, BetLabel is younger than many of its competitors, but on the other hand, it can no longer be considered a complete newcomer to the industry: we have been operating since 2023, are present in dozens of jurisdictions on all continents, and have managed to gain recognition and attract a six-figure number of regular customers. A distinctive feature of our establishment is that we are both a bookmaker and an online casino, which means that all the most popular types of gambling entertainment are available in one place. The company's global motto could be formulated as follows: whatever your gambling preferences may be, we are committed to making them a reality.
          </p>
          <Button variant="hero" size="lg">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
