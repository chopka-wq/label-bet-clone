import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 2, seconds: 55 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('BETPLUS');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="hero" className="container py-8 lg:py-12 scroll-mt-32">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            BetLabel
          </h1>
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
            Nowadays, gambling has become a kind of spice for everyday life: humanity has strived so long and hard for comfort and security, and now that it has achieved them, it suddenly realises that it is rather boring. However, sports betting and casino games allow us to get our adrenaline pumping, even though we never actually leave our comfort zone, and this is precisely the compromise that satisfies the needs of the majority. Today, in search of gambling, you don't even have to leave your home, although you can go out and play on the go: online platforms solve the problem of universal access, and one of the most successful in the industry is BetLabel.
          </p>
        </div>

        {/* Bonus Card */}
        <div className="gradient-card rounded-2xl p-6 lg:p-8 border border-border shadow-card relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Timer */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-2xl lg:text-3xl font-bold tracking-wider font-mono">
                {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
              </span>
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            </div>

            {/* Bonus Info */}
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
              Welcome Bonus
            </h2>
            <p className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              1500 € + 150 Free Spins
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Use the promo code when registering to receive a bonus!
            </p>

            {/* Promo Code */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 bg-secondary/50 rounded-lg px-4 py-3 border border-border">
                <span className="text-primary font-bold text-lg">BETPLUS</span>
              </div>
              <button
                onClick={handleCopy}
                className="p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-primary" />
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="w-full">
              GET BONUS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
