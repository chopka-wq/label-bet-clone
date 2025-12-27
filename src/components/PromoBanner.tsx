import { Button } from '@/components/ui/button';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="container py-12 lg:py-16">
      <div className="gradient-card rounded-2xl p-8 lg:p-12 border border-border relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Join <span className="text-primary">1M+</span> Players Worldwide
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Experience the thrill of premium betting and casino gaming. Trusted by millions, 
                licensed and secure. Start your winning journey today!
              </p>
              <Button variant="hero" size="lg" className="mb-8">
                Get Started Now
              </Button>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">1M+</div>
                <div className="text-sm text-muted-foreground">Active Players</div>
              </div>
              <div className="gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-accent fill-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
