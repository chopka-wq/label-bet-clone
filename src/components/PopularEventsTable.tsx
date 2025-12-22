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
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    sport: 'Football',
    event: 'Manchester United vs Liverpool',
    time: '19:00',
    date: 'Dec 23',
    odds1: '2.10',
    oddsX: '3.40',
    odds2: '3.20',
    status: 'live',
  },
  {
    id: 2,
    sport: 'Basketball',
    event: 'Lakers vs Warriors',
    time: '22:30',
    date: 'Dec 23',
    odds1: '1.85',
    oddsX: '-',
    odds2: '1.95',
    status: 'upcoming',
  },
  {
    id: 3,
    sport: 'Tennis',
    event: 'Djokovic vs Alcaraz',
    time: '15:00',
    date: 'Dec 24',
    odds1: '1.70',
    oddsX: '-',
    odds2: '2.15',
    status: 'upcoming',
  },
  {
    id: 4,
    sport: 'Football',
    event: 'Real Madrid vs Barcelona',
    time: '21:00',
    date: 'Dec 24',
    odds1: '2.45',
    oddsX: '3.30',
    odds2: '2.80',
    status: 'upcoming',
  },
  {
    id: 5,
    sport: 'Ice Hockey',
    event: 'Bruins vs Rangers',
    time: '01:00',
    date: 'Dec 24',
    odds1: '2.20',
    oddsX: '4.10',
    odds2: '2.90',
    status: 'upcoming',
  },
];

const PopularEventsTable = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Popular Events</CardTitle>
            <CardDescription>Don't miss the best betting opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Sport</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead className="w-[100px]">Date/Time</TableHead>
                  <TableHead className="text-center w-[80px]">1</TableHead>
                  <TableHead className="text-center w-[80px]">X</TableHead>
                  <TableHead className="text-center w-[80px]">2</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead className="text-right w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">
                      <Badge variant="outline">{event.sport}</Badge>
                    </TableCell>
                    <TableCell>{event.event}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{event.date}</div>
                        <div className="text-muted-foreground">{event.time}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="h-8 px-2 font-semibold">
                        {event.odds1}
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      {event.oddsX !== '-' ? (
                        <Button variant="ghost" size="sm" className="h-8 px-2 font-semibold">
                          {event.oddsX}
                        </Button>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="h-8 px-2 font-semibold">
                        {event.odds2}
                      </Button>
                    </TableCell>
                    <TableCell>
                      {event.status === 'live' ? (
                        <Badge variant="destructive" className="animate-pulse">
                          LIVE
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Upcoming</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="default">
                        Bet Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PopularEventsTable;
