import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import {
    ExternalLink,
    Dices,
    BookOpen,
    Users,
    Compass,
    Wand2,
    Calculator,
} from 'lucide-react';

export function UsefulLinksSection() {
    const linkCategories = [
        {
            icon: Calculator,
            title: 'Ресурсы на Русском',
            color: 'red',
            links: [
                {
                    name: 'Справочник по D&D 5e',
                    url: 'https://5e14.ttg.club',
                    description: 'Самый удобный сайт со всех информацией об игре',
                },
                {
                    name: 'dnd.su',
                    url: 'https://dnd.su/',
                    description: 'Еще один недурный сайт с информацией об игре',
                },
            ],
        },
        {
            icon: BookOpen,
            title: 'Оффициальные ресурсы',
            color: 'amber',
            links: [
                {
                    name: 'D&D Beyond',
                    url: 'https://www.dndbeyond.com',
                    description: 'Официальный цифровой инструментарий',
                },
                {
                    name: 'Wizards of the Coast',
                    url: 'https://dnd.wizards.com',
                    description: 'Официальный сайт DnD',
                },
            ],
        },
        {
            icon: Dices,
            title: 'Генераторы',
            color: 'purple',
            links: [
                {
                    name: 'Генератор портретов',
                    url: 'https://perchance.org/dndcharactergeneratornew',
                    description: 'Хороший и простой генератор портретов для ваших персонажей',
                },
                {
                    name: 'Рандомайзер всякой всячины',
                    url: 'https://autorolltables.github.io/#',
                    description: 'Многофункциональный рандомайзер для всего что может встетиться в кампании',
                },
            ],
        },
        {
            icon: Wand2,
            title: 'Создание персонажа',
            color: 'blue',
            links: [
                {
                    name: 'Long Stroy Short',
                    url: 'https://longstoryshort.app/characters/list/',
                    description: 'Лучший сайт для создания и хранения персонажей',
                },
                {
                    name: 'Готовые персонажи',
                    url: 'https://longstoryshort.app/characters/',
                    description: 'Удобный выбор из готовых персонажей 1 уровня',
                },
                {
                    name: 'Гайд по созданию',
                    url: 'https://longstoryshort.app/long/character-creation/',
                    description: 'Наглядный гайд о создании собственного персонажа',
                },
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<
            string,
            { bg: string; text: string; border: string }
        > = {
            amber: {
                bg: 'bg-amber-600/20',
                text: 'text-amber-400',
                border: 'border-amber-700/50',
            },
            purple: {
                bg: 'bg-purple-600/20',
                text: 'text-purple-400',
                border: 'border-purple-700/50',
            },
            blue: {
                bg: 'bg-blue-600/20',
                text: 'text-blue-400',
                border: 'border-blue-700/50',
            },
            indigo: {
                bg: 'bg-indigo-600/20',
                text: 'text-indigo-400',
                border: 'border-indigo-700/50',
            },
            red: {
                bg: 'bg-red-600/20',
                text: 'text-red-400',
                border: 'border-red-700/50',
            },
            emerald: {
                bg: 'bg-emerald-600/20',
                text: 'text-emerald-400',
                border: 'border-emerald-700/50',
            },
        };
        return colors[color];
    };

    return (
        <section id="links" className="py-20 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Полезные ссылки
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Здесь есть все, что может вам понадобитсья
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {linkCategories.map((category, index) => {
                        const Icon = category.icon;
                        const colors = getColorClasses(category.color);

                        return (
                            <Card
                                key={index}
                                className="bg-slate-800 border-amber-900/30 hover:border-amber-700/50 transition-colors"
                            >
                                <CardHeader>
                                    <div
                                        className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}
                                    >
                                        <Icon
                                            className={`w-6 h-6 ${colors.text}`}
                                        />
                                    </div>
                                    <CardTitle className="text-amber-100">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {category.links.map(
                                            (link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex items-start gap-2 text-gray-300 hover:text-amber-400 transition-colors"
                                                    >
                                                        <ExternalLink className="w-4 h-4 mt-2 flex-shrink-0 opacity-50 group-hover:opacity-100" />
                                                        <div>
                                                            <div className="font-medium">
                                                                {link.name}
                                                            </div>
                                                            <div className="text-xs text-gray-500">
                                                                {
                                                                    link.description
                                                                }
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
