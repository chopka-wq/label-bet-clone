import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock } from 'lucide-react';

const BettingTable = () => {
  const upcomingMatches = [
    { id: 1, sport: 'Football', match: 'Real Madrid vs Barcelona', date: 'Today 20:00', odds1: '2.10', oddsX: '3.40', odds2: '2.80' },
    { id: 2, sport: 'Basketball', match: 'Lakers vs Warriors', date: 'Today 22:30', odds1: '1.85', oddsX: '-', odds2: '1.95' },
    { id: 3, sport: 'Tennis', match: 'Djokovic vs Nadal', date: 'Tomorrow 15:00', odds1: '1.75', oddsX: '-', odds2: '2.05' },
    { id: 4, sport: 'Football', match: 'Manchester United vs Liverpool', date: 'Tomorrow 18:00', odds1: '2.30', oddsX: '3.20', odds2: '2.60' },
    { id: 5, sport: 'Hockey', match: 'Maple Leafs vs Canadiens', date: 'Tomorrow 20:00', odds1: '1.90', oddsX: '3.50', odds2: '1.85' },
  ];

  return (
    <section className="container py-12 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Upcoming <span className="text-primary">Matches</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Check out the latest betting odds for upcoming matches across all sports
        </p>
      </div>

      <Card className="gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Best Odds
          </CardTitle>
          <CardDescription>Live odds updated in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Sport</TableHead>
                <TableHead>Match</TableHead>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    Date & Time
                  </div>
                </TableHead>
                <TableHead className="text-center">1</TableHead>
                <TableHead className="text-center">X</TableHead>
                <TableHead className="text-center">2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingMatches.map((match) => (
                <TableRow key={match.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell>
                    <Badge variant="outline">{match.sport}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{match.match}</TableCell>
                  <TableCell className="text-center text-muted-foreground">{match.date}</TableCell>
                  <TableCell className="text-center">
                    <span className="font-bold text-primary">{match.odds1}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    {match.oddsX !== '-' ? (
                      <span className="font-bold text-primary">{match.oddsX}</span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-bold text-primary">{match.odds2}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default BettingTable;

