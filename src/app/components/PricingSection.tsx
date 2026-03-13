import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Check, Clock, Users } from 'lucide-react';
import { Badge } from './ui/badge';

export function PricingSection() {
    const pricingOptions = [
        {
            title: 'Короткая',
            description: 'Идеально для ваншотов',
            duration: '4 часа',
            price: '1,500',
            priceDetail: 'с человека за всю сессию',
            icon: Clock,
        },
        {
            title: 'Продолжительная',
            description: 'Идеально для полного погружения',
            duration: 'от 4 до 8 часов',
            price: '340 за час',
            priceDetail: 'с человека',
            icon: Users,
        },
    ];

    return (
        <section id="pricing" className="py-20 px-6 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Цены
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
                    Выберите длительность сессии.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pricingOptions.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <Card
                                key={index}
                                className={`bg-slate-950 overflow-hidden transition-all ${'border-amber-700/50 shadow-lg shadow-amber-900/20'}`}
                            >
                                <CardHeader className="text-center pb-4">
                                    <div className="flex justify-center mb-4">
                                        <Icon className="w-8 h-8 text-amber-400" />
                                    </div>
                                    <CardTitle className="text-2xl text-amber-100 mb-2">
                                        {option.title}
                                    </CardTitle>
                                    <Badge className=" bg-slate-800 text-xl text-amber-400 border-amber-700/30 mx-auto">
                                        {option.duration}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="mb-6 pb-6">
                                        <div className="text-4xl text-amber-100 mb-1">
                                            {option.price}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {option.priceDetail}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <p className="text-center text-gray-400 mt-12 text-lg max-w-2xl mx-auto"></p>
            </div>
        </section>
    );
}
