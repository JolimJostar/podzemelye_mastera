import { useState, useEffect } from 'react';
import { Dices, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Обо мне', href: '#about' },
        { name: 'Кампании', href: '#campaigns' },
        { name: 'Цены', href: '#pricing' },
        { name: 'Персонажи', href: '#characters' },
        // { name: 'Сессии', href: '#sessions' },
        { name: 'Файлы', href: '#resources' },
        { name: 'Ресурсы', href: '#links' },
        { name: 'Контакты', href: '#contact' },
    ];

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Header height
            const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg border-b border-amber-900/30'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-3 text-amber-100 hover:text-amber-300 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        <Dices className="w-8 h-8 text-amber-400" />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className={`px-4 py-2 rounded-lg transition-all 'text-gray-300 hover:text-amber-400 hover:bg-amber-900/20`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-amber-100 hover:text-amber-400 hover:bg-amber-900/20"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-amber-900/30 pt-4">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) =>
                                            handleNavClick(e, link.href)
                                        }
                                        className={`px-4 py-3 rounded-lg transition-all 'text-gray-300 hover:text-amber-400 hover:bg-amber-900/20'`}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
