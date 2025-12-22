import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, TrendingUp } from 'lucide-react';

const LiveBetting = () => {
  const liveEvents = [
    { id: 1, sport: 'Football', match: 'Real Madrid vs Barcelona', time: '45\'', odds: '2.10', status: 'Live' },
    { id: 2, sport: 'Basketball', match: 'Lakers vs Warriors', time: 'Q3 8:32', odds: '1.85', status: 'Live' },
    { id: 3, sport: 'Tennis', match: 'Djokovic vs Nadal', time: 'Set 2', odds: '1.95', status: 'Live' },
    { id: 4, sport: 'Football', match: 'Manchester United vs Liverpool', time: '23\'', odds: '2.30', status: 'Live' },
    { id: 5, sport: 'Hockey', match: 'Maple Leafs vs Canadiens', time: 'Period 2', odds: '1.75', status: 'Live' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-12 lg:py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Live</span> Betting
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experience the thrill of live betting with real-time odds and instant updates. Bet on your favorite sports as the action unfolds.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="gradient-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Live Events</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">1,247</div>
                <p className="text-xs text-muted-foreground">Active matches</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">45,892</div>
                <p className="text-xs text-muted-foreground">Betting now</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Update</CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">0.3s</div>
                <p className="text-xs text-muted-foreground">Real-time odds</p>
              </CardContent>
            </Card>
          </div>

          {/* Live Events */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Live Events</h2>
            {liveEvents.map((event) => (
              <Card key={event.id} className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
                      <CardTitle className="text-lg">{event.match}</CardTitle>
                    </div>
                    <Badge variant="outline">{event.sport}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Current Odds</span>
                    <span className="text-2xl font-bold text-primary">{event.odds}</span>
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

export default LiveBetting;

