import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Gamepad2, Users } from 'lucide-react';

const Esports = () => {
  const tournaments = [
    { id: 1, game: 'CS:GO', tournament: 'ESL Pro League', prize: '$1,000,000', teams: 24, status: 'Upcoming' },
    { id: 2, game: 'Dota 2', tournament: 'The International', prize: '$40,000,000', teams: 18, status: 'Live' },
    { id: 3, game: 'League of Legends', tournament: 'World Championship', prize: '$2,225,000', teams: 22, status: 'Upcoming' },
    { id: 4, game: 'Valorant', tournament: 'Champions Tour', prize: '$1,000,000', teams: 16, status: 'Live' },
    { id: 5, game: 'Overwatch', tournament: 'OWL Grand Finals', prize: '$3,500,000', teams: 20, status: 'Upcoming' },
  ];

  const popularGames = [
    { name: 'CS:GO', players: '2.5M', tournaments: 156 },
    { name: 'Dota 2', players: '1.8M', tournaments: 98 },
    { name: 'League of Legends', players: '3.2M', tournaments: 203 },
    { name: 'Valorant', players: '1.5M', tournaments: 87 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-12 lg:py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Esports</span> Betting
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Bet on the biggest esports tournaments and matches. From CS:GO to League of Legends, experience competitive gaming at its finest.
            </p>
          </div>

          {/* Popular Games */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Popular Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularGames.map((game) => (
                <Card key={game.name} className="gradient-card border-border hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Gamepad2 className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{game.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Players</span>
                        <span className="text-foreground font-semibold">{game.players}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tournaments</span>
                        <span className="text-foreground font-semibold">{game.tournaments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tournaments */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Major Tournaments</h2>
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{tournament.tournament}</CardTitle>
                    </div>
                    <Badge variant={tournament.status === 'Live' ? 'destructive' : 'outline'}>
                      {tournament.status}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2">{tournament.game}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Prize Pool</div>
                      <div className="text-xl font-bold text-primary">{tournament.prize}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Teams</div>
                      <div className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {tournament.teams}
                      </div>
                    </div>
                    <div className="flex items-end">
                      <Badge variant="secondary" className="w-full justify-center py-2">
                        View Matches
                      </Badge>
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

export default Esports;

