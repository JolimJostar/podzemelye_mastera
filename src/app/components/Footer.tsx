import { Dices } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-400 py-12 px-6 border-t border-amber-900/30">
            <div className="max-w-6xl mx-auto text-center space-y-4">
                <div className="flex justify-center">
                    <Dices className="w-8 h-8 text-amber-400" />
                </div>
                <p className="text-lg text-amber-100">
                    Подземелье мастера
                </p>
                <p className="text-xs text-gray-500 pt-4">
                    "Кубики не врут, но у мастера всегда есть план." © 2026
                </p>
            </div>
        </footer>
    );
}
