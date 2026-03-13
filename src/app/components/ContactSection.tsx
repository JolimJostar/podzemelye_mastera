import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Mail, MessageCircle, Scroll, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 bg-slate-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Начни свое приключение
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Готовы взять свое первое задание? Тогда жду Вашего
                    сообщения!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="bg-slate-800 border-amber-900/30">
                        <CardHeader>
                            <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                                <Scroll className="w-6 h-6 text-amber-400" />
                            </div>
                            <CardTitle className="text-amber-100">
                                Для новичков
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Никогда раньше не играли в DnD? Это не проблема!
                                Я с радостью помогу вам окунуться в новое хобби.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="bg-slate-800 border-amber-900/30">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-purple-400" />
                            </div>
                            <CardTitle className="text-amber-100">
                                Для опытных
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Хочеться найти что-то новое и захватывающее? Я
                                предоставлю Вам интересный вызов и
                                непредсказуемую историю.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <Card className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 border-amber-700/50">
                    <CardContent className="pt-8">
                        <div className="text-center space-y-6">
                            <h3 className="text-2xl text-amber-100">
                                Контакты
                            </h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button
                                    onClick={() => {
                                        window.open(
                                            'mailto:yankochkinv@gmail.com?subject=Хочу%20поиграть%20в%20днд&body=Какой%20у%20вас%20ближайший%20свободный%20слот?',
                                        );
                                    }}
                                    className="bg-amber-600 hover:bg-amber-700 text-white"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    yankochkinv@gmail.com
                                </Button>
                                <Button
                                    onClick={() => {
                                        window.open(
                                            'https://t.me/yan_kochkin?text=Привет, хочу поиграть в ДнД! Какой у тебя ближайший свободный слот?',
                                            '_blank',
                                        );
                                    }}
                                    className="bg-amber-600 hover:bg-amber-700 text-white"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Telegram: @yan_kochkin
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
