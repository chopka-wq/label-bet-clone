import { Shield, Zap, Headphones, CreditCard, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Licensed',
    description: 'Fully licensed and regulated platform with top-tier security protocols.',
  },
  {
    icon: Zap,
    title: 'Instant Payouts',
    description: 'Fast and hassle-free withdrawals processed within hours.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Professional customer support available around the clock.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Options',
    description: 'Wide range of deposit and withdrawal methods available.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Available in multiple countries with localized experience.',
  },
  {
    icon: Award,
    title: 'Generous Bonuses',
    description: 'Regular promotions and rewards for all players.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="container py-12 lg:py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-4">
        Why Choose <span className="text-primary">BetLabel</span>?
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Experience the best in online betting and casino gaming with our premium features.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
