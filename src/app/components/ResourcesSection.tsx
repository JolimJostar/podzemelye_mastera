import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import axios from 'axios'
import fileDownload from 'js-file-download'
import playerHandbook from './files/5e_Players_Handbook_-_Kniga_igroka_RUS.pdf';
import apmyatka from './files/Pamyatka_po_dei_774_stviam__HW__LSS-3.pdf';
import preza from './files/днд.pdf';
import {
    Download,
    FileText,
    Map,
    BookOpen,
    Scroll,
    Shield,
    Sword,
    Sparkles,
    File,
    SquarePen,
} from 'lucide-react';

export function ResourcesSection() {
    const handleDownload = (url: string, filename: string) => {
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename)
  })
}
    const resources = [
        {
            icon: BookOpen,
            title: 'Книга игрока',
            description:
                'это самый необходимый инструмент для любого игрока, который собирается отправиться покорять пространства подземелий и драконов.',
            fileSize: '41,6 МБ',
            format: 'PDF',
            color: 'amber',
            file: playerHandbook,
            fileName: 'Книга игрока.pdf',
        },
        {
            icon: File,
            title: 'Памятка для игрока',
            description:
                'Одностраничный файл с выжимкой о том, что Вы можете сделать в свой ход.',
            fileSize: '1,8 МБ',
            format: 'PDF',
            color: 'purple',
            file: apmyatka,
            fileName: 'Памятка.pdf',
        },
        {
            icon: SquarePen,
            title: 'Презентация для новичков',
            description:
                'Самая важная информация для начала игры в простой и наглядной форме.',
            fileSize: '6,9 МБ',
            format: 'PDF',
            color: 'blue',
            file: preza,
            fileName: 'Как играть в Подземелья и Драконы.pdf',
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<
            string,
            { bg: string; text: string; hover: string }
        > = {
            amber: {
                bg: 'bg-amber-600/20',
                text: 'text-amber-400',
                hover: 'hover:bg-amber-600',
            },
            purple: {
                bg: 'bg-purple-600/20',
                text: 'text-purple-400',
                hover: 'hover:bg-purple-600',
            },
            blue: {
                bg: 'bg-blue-600/20',
                text: 'text-blue-400',
                hover: 'hover:bg-blue-600',
            },
            indigo: {
                bg: 'bg-indigo-600/20',
                text: 'text-indigo-400',
                hover: 'hover:bg-indigo-600',
            },
            red: {
                bg: 'bg-red-600/20',
                text: 'text-red-400',
                hover: 'hover:bg-red-600',
            },
            emerald: {
                bg: 'bg-emerald-600/20',
                text: 'text-emerald-400',
                hover: 'hover:bg-emerald-600',
            },
            pink: {
                bg: 'bg-pink-600/20',
                text: 'text-pink-400',
                hover: 'hover:bg-pink-600',
            },
            orange: {
                bg: 'bg-orange-600/20',
                text: 'text-orange-400',
                hover: 'hover:bg-orange-600',
            },
        };
        return colors[color];
    };

    return (
        <section id="resources" className="py-20 px-6 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Полезные файлы
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Тайные знания для тех кто ищет
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource, index) => {
                        const Icon = resource.icon;
                        const colors = getColorClasses(resource.color);

                        return (
                            <Card
                                key={index}
                                className="flex justify-between bg-slate-950 border-amber-900/30 hover:border-amber-700/50 transition-all group"
                            >
                                <div>
                                    <CardHeader>
                                        <div
                                            className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon
                                                className={`w-6 h-6 ${colors.text}`}
                                            />
                                        </div>
                                        <CardTitle className="text-amber-100 text-lg">
                                            {resource.title}
                                        </CardTitle>
                                        <CardDescription className="text-base text-gray-400 min-h-[60px]">
                                            {resource.description}
                                        </CardDescription>
                                    </CardHeader>
                                </div>
                                <div className="mb-4">
                                    <CardContent>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-gray-500">
                                                {resource.format}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {resource.fileSize}
                                            </span>
                                        </div>
                                    </CardContent>
                                    <div className="px-6">
                                        <Button
                                        onClick={() => handleDownload(resource.file, resource.fileName)}
                                            className={`w-full bg-amber-600  hover:bg-amber-700 text-white transition-colors`}
                                            size="sm"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Скачать
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
