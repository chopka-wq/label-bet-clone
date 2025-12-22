import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Zap, Headphones, CreditCard, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Licensed',
    description: 'Fully licensed and regulated platform with top-tier security protocols. We use advanced encryption technology to protect your personal data and financial transactions.',
  },
  {
    icon: Zap,
    title: 'Instant Payouts',
    description: 'Fast and hassle-free withdrawals processed within hours. No more waiting days for your winnings — get your money when you need it.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Professional customer support available around the clock. Our dedicated team is ready to assist you via live chat, email, or phone.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Options',
    description: 'Wide range of deposit and withdrawal methods available including credit cards, e-wallets, cryptocurrencies, and bank transfers.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Available in multiple countries with localized experience. Enjoy betting in your preferred language and currency.',
  },
  {
    icon: Award,
    title: 'Generous Bonuses',
    description: 'Regular promotions and rewards for all players. From welcome bonuses to loyalty programs — we value every player.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-12 lg:py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">BetLabel</span>?
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experience the best in online betting and casino gaming with our premium features and unmatched service quality.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group gradient-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="gradient-card rounded-2xl p-8 lg:p-12 border border-border">
            <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-8">
              Trusted by <span className="text-primary">Millions</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
