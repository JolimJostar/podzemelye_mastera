import { Book, Users, Trophy, Sword, Clock } from 'lucide-react';
import { Card } from './ui/card';

export function AboutSection() {
    const stats = [
        { icon: Book, label: 'Провел кампаний и ваншотов', value: '15+' },
        {
            icon: Users,
            label: 'Приключенцев создали свою историю',
            value: '35+',
        },
        { icon: Clock, label: 'Часов ведения игр', value: '600+' },
        { icon: Trophy, label: 'Новичков влюбил в DnD', value: '12' },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-12 text-amber-100">
                    Знакомство с мастером
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="text-gray-300 space-y-4">
                        <p className="text-lg">
                            Приветствую, искатель приключений! Меня зовут Ян. Я
                            - Мастер Подземелий, Ваш проводник в мир интриг,
                            опасностей и захватывающих историй, где ты решаешь,
                            какая судьба ждет этот мир.
                        </p>
                        <p className="text-lg">
                            В моих играх Вас ждут: упор на сюжет,
                            сбалансированая боевка, интерсные головоломки.
                        </p>
                        <p className="text-lg">
                            Неважно какой у Вас опыт, матерый ветеран или
                            новичек с нуля, за моим столом для Вас всегда
                            найдется место. Доставайте кубики и мы создадим
                            историю вместе!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <Card
                                    key={index}
                                    className="p-6 bg-slate-800 border-amber-900/30 text-center"
                                >
                                    <Icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                                    <div className="text-3xl text-amber-100 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {stat.label}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
