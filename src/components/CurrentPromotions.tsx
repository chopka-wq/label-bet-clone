import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CurrentPromotions = () => {
  const promotions = [
    {
      id: 1,
      category: 'SPORT',
      title: 'CHRISTMAS DROP',
      description: 'Spinbetter gives free bets every day for an open gift after each deposit',
      image: '🎄',
    },
    {
      id: 2,
      category: 'SPORT',
      title: 'SPORT HALLOWEEN',
      description: 'Make a deposit of €15 or more and receive guaranteed free bets of €3-200 every day!',
      image: '🎃',
    },
    {
      id: 3,
      category: 'SPORT',
      title: 'NHL X NBA JACKPOT',
      description: 'Place bets on hockey and basketball starting at €8 and receive tickets for a chance to win big cash prizes.',
      image: '🏀',
    },
    {
      id: 4,
      category: 'ESPORT',
      title: 'CYBER FREEBET',
      description: 'Place bets from 10 EUR on The International and get a freebet up to 200 EUR!',
      image: '🎮',
    },
  ];

  return (
    <section className="py-12 lg:py-20" style={{ background: 'linear-gradient(135deg, hsl(120 40% 15%) 0%, hsl(120 50% 10%) 100%)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            CURRENT <span className="text-primary">BETLABEL</span> PROMOTIONS AND BONUSES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="gradient-card border-2 border-purple-500/50 hover:border-purple-500/80 transition-all duration-300 overflow-hidden bg-card/90"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-yellow-500 text-black font-bold text-xs px-2 py-1 border-0">
                      {promo.category}
                    </Badge>
                  </div>
                  <div className="w-full h-48 bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-green-900/40 flex items-center justify-center text-6xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-green-500/20"></div>
                    <span className="relative z-10">{promo.image}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3 uppercase">{promo.title}</h3>
                  <p className="text-sm text-green-300/90 leading-relaxed">{promo.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentPromotions;

