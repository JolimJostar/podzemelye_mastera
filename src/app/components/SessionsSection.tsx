import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Badge } from './ui/badge';

export function SessionsSection() {
    const sessions = [
        {
            campaign: 'The Shadow Throne',
            date: 'March 15, 2026',
            time: '6:00 PM - 10:00 PM',
            location: 'Gaming Room, 123 Dragon St',
            status: 'Upcoming',
            players: 5,
            sessionNumber: 29,
        },
        {
            campaign: 'Echoes of the Feywild',
            date: 'March 22, 2026',
            time: '7:00 PM - 11:00 PM',
            location: 'Online - Discord',
            status: 'Open Spots',
            players: 2,
            sessionNumber: 1,
        },
        {
            campaign: 'The Shadow Throne',
            date: 'March 29, 2026',
            time: '6:00 PM - 10:00 PM',
            location: 'Gaming Room, 123 Dragon St',
            status: 'Scheduled',
            players: 5,
            sessionNumber: 30,
        },
    ];

    return (
        <section id="sessions" className="py-20 px-6 bg-slate-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Upcoming Sessions
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Schedule your next adventure
                </p>

                <div className="space-y-6">
                    {sessions.map((session, index) => (
                        <Card
                            key={index}
                            className="bg-slate-900 border-amber-900/30 hover:border-amber-700/50 transition-colors"
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-amber-100 text-xl">
                                            {session.campaign}
                                        </CardTitle>
                                        <CardDescription className="text-gray-400 mt-1">
                                            Session #{session.sessionNumber}
                                        </CardDescription>
                                    </div>
                                    <Badge
                                        className={
                                            session.status === 'Open Spots'
                                                ? 'bg-green-600 hover:bg-green-700'
                                                : session.status === 'Upcoming'
                                                  ? 'bg-amber-600 hover:bg-amber-700'
                                                  : 'bg-blue-600 hover:bg-blue-700'
                                        }
                                    >
                                        {session.status}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Calendar className="w-5 h-5 text-amber-400" />
                                        <span>{session.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Clock className="w-5 h-5 text-amber-400" />
                                        <span>{session.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <MapPin className="w-5 h-5 text-amber-400" />
                                        <span>{session.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Users className="w-5 h-5 text-amber-400" />
                                        <span>{session.players} Players</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
