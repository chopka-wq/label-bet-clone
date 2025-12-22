import { Gamepad2, Trophy, Radio, Joystick, Swords, Gift } from 'lucide-react';

const categories = [
  { name: 'Casino', icon: Gamepad2, color: 'from-primary/20 to-primary/5' },
  { name: 'Betting', icon: Trophy, color: 'from-primary/20 to-primary/5' },
  { name: 'Live', icon: Radio, color: 'from-accent/20 to-accent/5' },
  { name: 'Slots', icon: Joystick, color: 'from-primary/20 to-primary/5' },
  { name: 'Esports', icon: Swords, color: 'from-primary/20 to-primary/5' },
  { name: 'Bonuses', icon: Gift, color: 'from-accent/20 to-accent/5' },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="container py-8 scroll-mt-32">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#"
            className={`group relative gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow cursor-pointer overflow-hidden`}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/20 transition-colors duration-300">
                <category.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {category.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
