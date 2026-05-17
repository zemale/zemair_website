import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LayoutGrid, Heart, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#16130b] text-[#F5F1E6] font-sans selection:bg-[#f2ca50] selection:text-black">
      {/* Top Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || location.pathname !== '/' ? 'bg-[#16130b]/80 backdrop-blur-md py-4' : 'py-6 px-4'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <Link to="/" className="font-display text-3xl md:text-4xl font-normal tracking-wide transition-transform hover:scale-105 cursor-pointer px-1 uppercase block">
            ZEMAIR
          </Link>

          <div className="hidden md:flex gap-10 items-center">
            {navLinks.filter(l => l.path !== '/').map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 font-medium ${
                  location.pathname === link.path ? 'text-[#f2ca50]' : 'text-[#8E8E93] hover:text-[#f2ca50]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <button className="hidden sm:block bg-[#d4af37] text-[#16130b] px-8 py-3 font-display text-xs font-bold uppercase tracking-widest hover:scale-95 transition-transform cursor-pointer">
              ЗАПРОС
            </button>
            <button 
              className="md:hidden text-[#F5F1E6]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#16130b]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-display text-2xl uppercase tracking-widest text-[#F5F1E6]"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-[#d4af37] text-[#16130b] px-12 py-4 font-display text-sm font-bold uppercase tracking-widest">
              ЗАПРОС
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#16130b] border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display text-2xl font-black mb-2 opacity-80 uppercase">ZEMAIR</div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Architectural Systems. Engineered for Silence.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { name: 'FAQ', path: '/faq' },
              { name: 'Руководство', path: '/user-manual' },
              { name: 'Документация', path: '/manuals' },
              { name: 'Продажи', path: '/sales' },
              { name: 'Пресс-кит', path: '/press' },
              { name: 'Конфиденциальность', path: '/privacy' }
            ].map(item => (
              <Link key={item.path} to={item.path} className="font-display text-[9px] uppercase tracking-widest text-[#8E8E93] hover:text-[#f2ca50] transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-[10px] text-zinc-600 text-center md:text-right">
            © 2024 ZEMAIR Architectural Systems.<br />
            Инженерия тишины.
          </div>
        </div>
      </footer>

      {/* Simple Bottom Nav for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#16130b]/80 backdrop-blur-xl border-t border-zinc-900 flex justify-around items-center py-5 z-50">
        <Link to="/catalog" className="text-zinc-500 flex flex-col items-center gap-1 group">
          <LayoutGrid size={20} />
          <span className="text-[8px] uppercase tracking-widest font-display">Каталог</span>
        </Link>
        <Link to="/store" className="text-[#f2ca50] flex flex-col items-center gap-1 group">
          <Menu size={20} />
          <span className="text-[8px] uppercase tracking-widest font-display">Магазин</span>
        </Link>
        <Link to="/support" className="text-zinc-500 flex flex-col items-center gap-1">
          <Heart size={20} />
          <span className="text-[8px] uppercase tracking-widest font-display">Сервис</span>
        </Link>
        <button className="text-zinc-500 flex flex-col items-center gap-1">
           <ArrowUpRight size={20} />
           <span className="text-[8px] uppercase tracking-widest font-display">Запрос</span>
        </button>
      </div>
    </div>
  );
}
