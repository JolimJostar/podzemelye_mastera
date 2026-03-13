import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CampaignsSection() {
    enum CampainStatus {
        Ready = 'Полностью готова',
        Ranger = 'Следопыт',
        Wizard = 'Волшебник',
    }

    const campaigns = [
        {
            title: 'Проклятье Страда',
            level: '1-15 ур.',
            duration: 'Кампания',
            description: 'Темное готическое фентези о поиске надежды.',
            image: 'https://images.unsplash.com/photo-1745910212356-2932d59557fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZSUyMGRyYWdvbnxlbnwxfHx8fDE3NzMxODE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Мышеловка',
            level: '4 ур.',
            duration: 'Ваншот',
            status: 'Для новичков',
            description:
                'Легкая и прямолинейная история о расследовании пропажи жителей.',
            image: 'https://images.unsplash.com/photo-1634409884980-a30da0b2b010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2l6YXJkJTIwbWFnaWN8ZW58MXx8fHwxNzczMTY5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Трудности с гоблинами',
            level: '1 ур.',
            duration: 'Ваншот',
            status: 'Для новичков',
            description: 'Идеальное приключение для знакомства с игрой.',
            image: 'https://images.unsplash.com/photo-1631290235496-b73219233bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZWxmJTIwYXJjaGVyfGVufDF8fHx8MTc3MzE4MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Проклятье Страда',
            level: '1-15 ур.',
            duration: 'Кампания',
            description: 'Темное готическое фентези о поиске надежды.',
            image: 'https://images.unsplash.com/photo-1745910212356-2932d59557fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZSUyMGRyYWdvbnxlbnwxfHx8fDE3NzMxODE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
    ];

    return (
        <section id="campaigns" className="py-20 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Кампании
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Все кампании и ваншоты которые я веду
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campaigns.map((campaign, index) => {
                        const badge =
                            campaign.status != null ? (
                                <Badge
                                    className={
                                        campaign.status === 'Active'
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : campaign.status ===
                                                'Starting Soon'
                                              ? 'bg-blue-600 hover:bg-blue-700'
                                              : 'bg-gray-600 hover:bg-gray-700'
                                    }
                                >
                                    {campaign.status}
                                </Badge>
                            ) : null;
                        return (
                            <Card
                                key={index}
                                className="bg-slate-900 border-amber-900/30 overflow-hidden group hover:border-amber-700/50 transition-colors"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={campaign.image}
                                        alt={campaign.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    if (campaign.status)
                                    <div className="absolute top-4 right-4">
                                        {badge}
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-amber-100">
                                        {campaign.title}
                                    </CardTitle>
                                    <div className="flex justify-between">
                                        <p>{campaign.duration}</p>
                                        <CardDescription className="text-gray-400">
                                            {campaign.level}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-4">
                                        {campaign.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
