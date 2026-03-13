import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
    Swords,
    Wand2,
    Shield,
    Target,
    Heart,
    Sparkles,
    Search,
    ChevronLeft,
    ChevronRight,
    Filter,
    X,
    Axe,
    Guitar,
    Brain,
    Leaf,
    Sword,
    HandFist,
    BowArrow,
    Ghost,
    HatGlasses,
    Wand,
    BookMarked,
} from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from './ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';
import { Label } from './ui/label';

export function CharactersSection() {
    const all = 'Все';

    enum Class {
        Fighter = 'Воин',
        Ranger = 'Следопыт',
        Wizard = 'Волшебник',
        Barbarian = 'Варвар',
        Cleric = 'Жрец',
        Rogue = 'Плут',
        Sorcerer = 'Чародей',
        Warlock = 'Колдун',
        Druid = 'Друид',
        Paladin = 'Паладин',
        Monk = 'Монах',
        Bard = 'Бард',
        Artificer = 'Изобретатель',
    }

    enum Race {
        Human = 'Человек',
        Dwarf = 'Гном',
        HalfOrc = 'Полу-орк',
        Elf = 'Эльф',
        Halfling = 'Полурослик',
        Dragonborn = 'Драконорождённый',
        Orc = 'Орк',
        Tiefling = 'Тифлинг',
    }

    function convertStringToEnum(value: string): Class {
        return (Object.values(Class) as Array<string>).includes(value)
            ? (value as Class)
            : Class.Artificer;
    }

    function classIcon(characterClass: Class) {
        switch (characterClass) {
            case Class.Artificer:
                return Brain;
            case Class.Barbarian:
                return Axe;
            case Class.Bard:
                return Guitar;
            case Class.Cleric:
                return Heart;
            case Class.Druid:
                return Leaf;
            case Class.Fighter:
                return Sword;
            case Class.Monk:
                return HandFist;
            case Class.Paladin:
                return Shield;
            case Class.Ranger:
                return BowArrow;
            case Class.Rogue:
                return HatGlasses;
            case Class.Sorcerer:
                return Sparkles;
            case Class.Warlock:
                return Wand;
            case Class.Wizard:
                return BookMarked;
        }
    }

    const allCharacters = [
        {
            name: 'Thorin Ironforge',
            race: Race.Dwarf,
            class: Class.Fighter,
            level: 8,
            image: 'https://images.unsplash.com/photo-1624382497233-15a185a7c90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZHdhcmYlMjBibGFja3NtaXRofGVufDF8fHx8MTc3MzE4MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description:
                'A stalwart defender with a heart of gold and an axe of steel.',
        },
        {
            name: 'Elara Moonwhisper',
            race: Race.Elf,
            class: Class.Ranger,
            level: 7,
            image: 'https://images.unsplash.com/photo-1631290235496-b73219233bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZWxmJTIwYXJjaGVyfGVufDF8fHx8MTc3MzE4MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description: 'Silent as shadow, deadly as moonlight on a blade.',
        },
        {
            name: 'Zephyr the Wise',
            race: Race.Human,
            class: Class.Wizard,
            level: 10,
            image: 'https://images.unsplash.com/photo-1634409884980-a30da0b2b010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2l6YXJkJTIwbWFnaWN8ZW58MXx8fHwxNzczMTY5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description:
                'Master of arcane arts, seeker of forbidden knowledge.',
        },
        {
            name: 'Kara Stormborn',
            race: Race.HalfOrc,
            class: Class.Barbarian,
            level: 6,
            image: 'https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2hhcmFjdGVyJTIwd2FycmlvcnxlbnwxfHx8fDE3NzMxNjE4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description: 'Rage incarnate, a tempest on the battlefield.',
        },
        {
            name: 'Lyra Brightstone',
            race: Race.Human,
            class: Class.Cleric,
            level: 9,
            image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2xlcmljJTIwcHJpZXN0fGVufDF8fHx8MTc3MzE4MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description: 'Bearer of divine light, healer of the wounded.',
        },
        {
            name: 'Finn Shadowstep',
            race: Race.Halfling,
            class: Class.Rogue,
            level: 5,
            image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcm9ndWUlMjBhc3Nhc3NpbnxlbnwxfHx8fDE3NzMxODE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description:
                'Quick fingers and quicker wit, master of the unexpected.',
        },
        {
            name: 'Thalia Stormcaller',
            race: Race.Dragonborn,
            class: Class.Sorcerer,
            level: 8,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwc29yY2VyZXIlMjBkcmFnb258ZW58MXx8fHwxNzczMTgxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description:
                'Lightning courses through her veins, chaos in her eyes.',
        },
        {
            name: 'Grom Ironhide',
            race: Race.Orc,
            class: Class.Fighter,
            level: 7,
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwb3JjJTIwd2FycmlvcnxlbnwxfHx8fDE3NzMxODE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description:
                'Unbreakable will, immovable force, protector of the weak.',
        },
        {
            name: 'Seraphina Wildwood',
            race: Race.Elf,
            class: Class.Druid,
            level: 6,
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZWxmJTIwZHJ1aWR8ZW58MXx8fHwxNzczMTgxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description: "Nature's voice, guardian of the ancient forests.",
        },
        {
            name: 'Marcus Lightbringer',
            race: Race.Human,
            class: Class.Paladin,
            level: 9,
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcGFsYWRpbiUyMGtuaWdodHxlbnwxfHx8fDE3NzMxODE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description:
                'Oath-bound warrior, champion of justice and righteousness.',
        },
        {
            name: 'Nyx Shadowmoon',
            race: Race.Tiefling,
            class: Class.Warlock,
            level: 10,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwdGllZmxpbmclMjB3YXJsb2NrfGVufDF8fHx8MTc3MzE4MTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description: 'Bound by pact, wielder of eldritch power.',
        },
        {
            name: 'Bjorn Frostbeard',
            race: Race.Dwarf,
            class: Class.Barbarian,
            level: 5,
            image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZHdhcmYlMjBiYXJiYXJpYW58ZW58MXx8fHwxNzczMTgxNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            description:
                'Northern fury unleashed, frost in his beard and fire in his heart.',
        },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClass, setSelectedClass] = useState<string>(all);
    const [selectedRace, setSelectedRace] = useState<string>(all);
    const [selectedLevel, setSelectedLevel] = useState<string>(all);
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const charactersPerPage = 8;

    // Get unique classes and races
    const classes = [
        all,
        ...Array.from(new Set(allCharacters.map((c) => c.class))).sort(),
    ];
    const races = [
        all,
        ...Array.from(new Set(allCharacters.map((c) => c.race))).sort(),
    ];
    const levels = [
        all,
        ...Array.from(
            new Set(allCharacters.map((c) => c.level.toString())),
        ).sort((a, b) => {
            if (a === all) return -1;
            if (b === all) return 1;
            return Number(a) - Number(b);
        }),
    ];

    // Filter characters
    const filteredCharacters = allCharacters.filter((character) => {
        const matchesSearch = character.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesClass =
            selectedClass === all || character.class === selectedClass;
        const matchesRace =
            selectedRace === all || character.race === selectedRace;
        const matchesLevel =
            selectedLevel === all ||
            character.level.toString() === selectedLevel;

        return matchesSearch && matchesClass && matchesRace && matchesLevel;
    });

    // Pagination
    const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    const currentCharacters = filteredCharacters.slice(startIndex, endIndex);

    // Reset to page 1 when filters change
    const handleFilterChange = (
        type: 'class' | 'race' | 'level',
        value: string,
    ) => {
        if (type === 'class') {
            setSelectedClass(value);
        } else if (type === 'race') {
            setSelectedRace(value);
        } else {
            setSelectedLevel(value);
        }
        setCurrentPage(1);
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        setCurrentPage(1);
    };

    return (
        <section id="characters" className="py-20 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center mb-4 text-amber-100">
                    Готовые персонажи
                </h2>
                <p className="text-center text-gray-400 mb-8 text-lg">
                    Выбери героя своей истории
                </p>

                {/* Search and Filters */}
                <div className="mb-8 space-y-4">
                    {/* Search Bar and Filter Button */}
                    <div className="flex gap-3 max-w-2xl mx-auto">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Поиск по имени"
                                value={searchQuery}
                                onChange={(e) =>
                                    handleSearchChange(e.target.value)
                                }
                                className="pl-10 bg-slate-800 border-amber-900/30 text-gray-100 placeholder:text-gray-500 focus:border-amber-700"
                            />
                        </div>
                        <Button
                            onClick={() => setShowFilters(true)}
                            variant="outline"
                            className="border-amber-900/30 text-gray-300 hover:bg-amber-900/20 hover:text-amber-400"
                        >
                            <Filter className="w-4 h-4 mr-2" />
                            Фильтры
                        </Button>
                    </div>
                    {/* Pagination */}
                    {filteredCharacters.length > charactersPerPage && (
                        <div className="flex justify-center items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.max(1, prev - 1),
                                    )
                                }
                                disabled={currentPage === 1}
                                className="border-amber-900/30 text-gray-300 hover:bg-amber-900/20 hover:text-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Предыдущая
                            </Button>

                            <div className="flex gap-1">
                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1,
                                ).map((page) => (
                                    <Button
                                        key={page}
                                        variant={
                                            currentPage === page
                                                ? 'default'
                                                : 'outline'
                                        }
                                        size="sm"
                                        onClick={() => setCurrentPage(page)}
                                        className={
                                            currentPage === page
                                                ? 'bg-amber-600 hover:bg-amber-700 text-white min-w-[2.5rem]'
                                                : 'border-amber-900/30 text-gray-300 hover:bg-amber-900/20 hover:text-amber-400 min-w-[2.5rem]'
                                        }
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(totalPages, prev + 1),
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="border-amber-900/30 text-gray-300 hover:bg-amber-900/20 hover:text-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Следущая
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                    )}
                </div>

                {/* Filter Dialog/Modal */}
                <Dialog open={showFilters} onOpenChange={setShowFilters}>
                    <DialogContent className="bg-slate-800 border-amber-900/30 text-gray-100">
                        <DialogHeader>
                            <DialogTitle className="text-amber-100">
                                Фильтры персонажей
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 pt-4">
                            {/* Class Dropdown */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="class-filter"
                                    className="text-gray-300"
                                >
                                    Класс
                                </Label>
                                <Select
                                    value={selectedClass}
                                    onValueChange={(value) =>
                                        handleFilterChange('class', value)
                                    }
                                >
                                    <SelectTrigger
                                        id="class-filter"
                                        className="bg-slate-700 border-amber-900/30 text-gray-100 focus:border-amber-700"
                                    >
                                        <SelectValue placeholder="Select a class" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-700 border-amber-900/30 text-gray-100">
                                        {classes.map((className) => {
                                            const Icon = classIcon(
                                                convertStringToEnum(className),
                                            );
                                            if (className == all) {
                                                return (
                                                    <SelectItem
                                                        key={className}
                                                        value={className}
                                                        className="focus:bg-amber-900/20 focus:text-amber-400"
                                                    >
                                                        {className}
                                                    </SelectItem>
                                                );
                                            }
                                            return (
                                                <SelectItem
                                                    key={className}
                                                    value={className}
                                                    className="focus:bg-amber-900/20 focus:text-amber-400"
                                                >
                                                    <Icon />
                                                    {className}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Race Dropdown */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="race-filter"
                                    className="text-gray-300"
                                >
                                    Расса
                                </Label>
                                <Select
                                    value={selectedRace}
                                    onValueChange={(value) =>
                                        handleFilterChange('race', value)
                                    }
                                >
                                    <SelectTrigger
                                        id="race-filter"
                                        className="bg-slate-700 border-amber-900/30 text-gray-100 focus:border-amber-700"
                                    >
                                        <SelectValue placeholder="Select a race" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-700 border-amber-900/30 text-gray-100">
                                        {races.map((race) => (
                                            <SelectItem
                                                key={race}
                                                value={race}
                                                className="focus:bg-purple-900/20 focus:text-purple-400"
                                            >
                                                {race}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Level Dropdown */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="level-filter"
                                    className="text-gray-300"
                                >
                                    Уровень
                                </Label>
                                <Select
                                    value={selectedLevel}
                                    onValueChange={(value) =>
                                        handleFilterChange('level', value)
                                    }
                                >
                                    <SelectTrigger
                                        id="level-filter"
                                        className="bg-slate-700 border-amber-900/30 text-gray-100 focus:border-amber-700"
                                    >
                                        <SelectValue placeholder="Select a level" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-700 border-amber-900/30 text-gray-100">
                                        {levels.map((level) => (
                                            <SelectItem
                                                key={level}
                                                value={level}
                                                className="focus:bg-amber-900/20 focus:text-amber-400"
                                            >
                                                {level}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Active Filters Display */}
                            {(selectedClass !== all ||
                                selectedRace !== all ||
                                selectedLevel !== all) && (
                                <div className="pt-4 border-t border-amber-900/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-400">
                                            Активные фильтры:
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => {
                                                setSelectedClass(all);
                                                setSelectedRace(all);
                                                setSelectedLevel(all);
                                                setCurrentPage(1);
                                            }}
                                            className="text-xs text-amber-400 hover:text-amber-300 hover:bg-amber-900/20"
                                        >
                                            Очистить Все
                                        </Button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedClass !== all && (
                                            <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30">
                                                Класс: {selectedClass}
                                                <button
                                                    onClick={() =>
                                                        handleFilterChange(
                                                            'class',
                                                            all,
                                                        )
                                                    }
                                                    className="ml-2 hover:text-amber-200"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </Badge>
                                        )}
                                        {selectedRace !== all && (
                                            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                                                Расса: {selectedRace}
                                                <button
                                                    onClick={() =>
                                                        handleFilterChange(
                                                            'race',
                                                            all,
                                                        )
                                                    }
                                                    className="ml-2 hover:text-purple-200"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </Badge>
                                        )}
                                        {selectedLevel !== all && (
                                            <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30">
                                                Уровень: {selectedLevel}
                                                <button
                                                    onClick={() =>
                                                        handleFilterChange(
                                                            'level',
                                                            all,
                                                        )
                                                    }
                                                    className="ml-2 hover:text-amber-200"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Characters Grid */}
                {currentCharacters.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {currentCharacters.map((character, index) => {
                            const Icon = classIcon(character.class);
                            return (
                                <Card
                                    key={index}
                                    className="bg-slate-800 border-amber-900/30 overflow-hidden group hover:border-amber-700/50 transition-colors"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <ImageWithFallback
                                            src={character.image}
                                            alt={character.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/70 rounded-full p-2">
                                            <Icon className="w-5 h-5 text-amber-400" />
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <div className="flex gap-2 flex-wrap mt-2 pb-3">
                                            <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 hover:bg-amber-600/30">
                                                {character.level} ур.
                                            </Badge>
                                            <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 hover:bg-amber-600/30">
                                                {character.race}
                                            </Badge>
                                            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 hover:bg-purple-600/30">
                                                {character.class}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-amber-100 text-lg">
                                            {character.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-300 italic">
                                            "{character.description}"
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">
                            Не найдено персонажей, соответствующих вашим
                            критериям.
                        </p>
                        <Button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedClass(all);
                                setSelectedRace(all);
                                setSelectedLevel(all);
                                setCurrentPage(1);
                            }}
                            className="mt-4 bg-amber-600 hover:bg-amber-700"
                        >
                            Очистить фильтры
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
