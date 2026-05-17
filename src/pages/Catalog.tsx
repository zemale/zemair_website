import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { catalogItems } from '../types';
import { BreezerInterior } from '../components/BreezerInterior';

export default function Catalog() {
  const breezers = catalogItems.filter(i => i.category === 'breezer');
  const monolithSeries = breezers.filter(i => i.series === 'Monolith');
  const compactSeries = breezers.filter(i => i.series === 'Compact');
  const components = catalogItems.filter(i => i.category !== 'breezer');

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#0a0904]">
      {/* Sub Navigation */}
      <div className="sticky top-[72px] z-40 bg-[#0a0904]/80 backdrop-blur-md border-y border-zinc-900 overflow-x-auto hide-scrollbar">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-12 whitespace-nowrap">
           {['СЕРИЯ MONOLITH', 'СЕРИЯ COMPACT', 'КАСТОМИЗАЦИЯ', 'ХАРАКТЕРИСТИКИ'].map(link => (
             <button key={link} className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 hover:text-[#f2ca50] transition-colors">
               {link}
             </button>
           ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16">
        {/* Monolith Section */}
        <section className="mb-48 text-center" id="monolith">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#f2ca50] mb-8 block font-medium font-sans">АРХИТЕКТУРНЫЙ МАСШТАБ</span>
            <h1 className="font-display text-7xl md:text-9xl mb-12 tracking-tight">Monolith</h1>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-20 text-sm uppercase tracking-[0.2em] leading-relaxed">
              Флагманская серия для больших пространств. Сочетание монументального дизайна и максимальной производительности.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {monolithSeries.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link to={`/catalog/${item.id}`} className="block">
                    <div className="aspect-[3/4] relative overflow-hidden bg-zinc-900 border border-zinc-800/20 group-hover:border-zinc-500/30 transition-all duration-700 shadow-2xl mb-12">
                      <BreezerInterior 
                        image={item.img || ''} 
                        type={item.variant || 'black'}
                        title=""
                        subtitle=""
                        className="w-full h-full"
                      />
                      <div className="absolute inset-x-0 bottom-12 text-center pointer-events-none">
                          <span className="text-[8px] uppercase tracking-[0.5em] text-[#F5F1E6]/40 font-display">ZEMAIR MONOLITH</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-4xl mb-2 text-[#F5F1E6] group-hover:text-[#f2ca50] transition-colors">{item.title}</h3>
                      <p className="font-display text-[9px] text-zinc-500 uppercase tracking-[0.5em]">{item.subtitle}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
        </section>

        {/* Compact Section */}
        <section className="mb-48 text-center" id="compact">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#f2ca50] mb-8 block font-medium font-sans">ИНТЕЛЛЕКТУАЛЬНАЯ КОМПАКТНОСТЬ</span>
            <h2 className="font-display text-7xl md:text-9xl mb-12 tracking-tight">Compact</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-20 text-sm uppercase tracking-[0.2em] leading-relaxed">
              Новая линейка для жилых комнат. Габарит 400х260х132мм. Невидимое присутствие, ощутимый комфорт.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {compactSeries.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link to={`/catalog/${item.id}`} className="block">
                    <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900 border border-zinc-800/20 group-hover:border-zinc-500/30 transition-all duration-700 shadow-2xl mb-12">
                      <BreezerInterior 
                        image={item.img || ''} 
                        type={item.variant || 'black'}
                        title=""
                        subtitle=""
                        className="w-full h-full"
                      />
                      <div className="absolute inset-x-0 bottom-8 text-center pointer-events-none">
                          <span className="text-[8px] uppercase tracking-[0.5em] text-[#F5F1E6]/40 font-display">ZEMAIR COMPACT</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-4xl mb-2 text-[#F5F1E6] group-hover:text-[#f2ca50] transition-colors">{item.title}</h3>
                      <p className="font-display text-[9px] text-zinc-500 uppercase tracking-[0.5em]">{item.subtitle}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
        </section>

        <section className="mb-32">
          <header className="mb-20">
            <h2 className="font-display text-4xl md:text-6xl mb-8 tracking-tight uppercase">Дополнительно</h2>
            <p className="text-zinc-500 max-w-2xl text-sm leading-relaxed uppercase tracking-widest">Запасные части и выносные датчики для поддержания идеального микроклимата.</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {components.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[1/1] bg-[#1f1b13] relative overflow-hidden border border-zinc-800/20 group-hover:border-zinc-700/50 transition-colors">
                  <img 
                    src={item.img || ''} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-display text-xl text-white mb-1 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-[#f2ca50] font-display text-[10px] tracking-widest uppercase">{item.price?.toLocaleString()} ₽</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Section */}
        <section className="py-24 border-t border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-6xl mb-8 italic text-[#f2ca50]">Bespoke <br/> Service</h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Индивидуальное исполнение корпуса ZEMAIR из материала вашей отделки: от редких пород дерева до цельного куска мрамора. Работаем в коллаборации с вашим дизайнером.
              </p>
              <button className="bg-transparent border border-[#f2ca50] text-[#f2ca50] px-12 py-5 font-sans text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#f2ca50] hover:text-[#16130b] transition-all">
                ОБСУДИТЬ ПРОЕКТ
              </button>
            </div>
            <div className="aspect-[4/5] bg-zinc-900/50 relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1618219951462-ebec7f3f4760?q=80&w=2000&auto=format&fit=crop"
                 alt="Custom finishes"
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0904] to-transparent" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
