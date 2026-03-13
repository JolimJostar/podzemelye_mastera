import { Scroll, Dices, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1549056572-75914d5d5fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwZHJhZ29ucyUyMGZhbnRhc3klMjB0YWJsZXRvcHxlbnwxfHx8fDE3NzMxODE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="D&D Tabletop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                <div className="flex justify-center mb-6">
                    <Dices className="w-20 h-20 text-amber-400" />
                </div>
                <h1 className="text-5xl md:text-7xl mb-6 text-amber-100">
                    Подземелье мастера
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                    Ткач историй • Архитектор приключений • Проводник героев
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Sparkles className="w-5 h-5" />
                        Стать приключенцем
                    </a>
                    <a
                        href="#campaigns"
                        className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Scroll className="w-5 h-5" />
                        Доступные кампании
                    </a>
                </div>
            </div>
        </section>
    );
}
