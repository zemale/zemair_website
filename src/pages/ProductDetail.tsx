import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Zap, Wind, ArrowRight, ShoppingCart } from 'lucide-react';
import { catalogItems } from '../types';
import { BreezerInterior } from '../components/BreezerInterior';

export default function ProductDetail() {
  const { id } = useParams();
  const item = catalogItems.find(i => i.id === id);

  if (!item) return <div className="pt-32 text-center h-screen">Продукт не найден</div>;

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/catalog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#f2ca50] transition-colors mb-12 uppercase text-[10px] tracking-widest font-bold">
          <ArrowLeft size={14} /> Назад в каталог
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="aspect-[1/1.5] relative overflow-hidden bg-zinc-900 border border-zinc-800/20 shadow-2xl">
              <BreezerInterior 
                image={item.img || ''} 
                type={item.variant || 'black'}
                title=""
                subtitle=""
                className="w-full h-full"
              />
              <div className="absolute top-12 left-12">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-[#f2ca50]/40 font-display">ZEMAIR ARCHITECTURAL EDITION</span>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#f2ca50] mb-4 block">
              The {item.series} Series
            </span>
            <h1 className="font-display text-6xl md:text-8xl mb-4 tracking-tighter uppercase">{item.title}</h1>
            <p className="font-display text-[10px] text-zinc-500 uppercase tracking-[0.5em] mb-12">{item.subtitle}</p>
            
            <div className="mb-12">
               <span className="text-4xl font-display text-[#f2ca50]">{item.price?.toLocaleString()} ₽</span>
               <span className="ml-4 text-zinc-600 text-[10px] uppercase tracking-widest font-light">В НАЛИЧИИ В БУТИКЕ</span>
            </div>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12">
              {item.description || "Совершенство формы и функции. Этот монолитный очиститель воздуха разработан для самых взыскательных интерьеров."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {[
                { icon: <ShieldCheck className="text-[#f2ca50]" size={20} />, title: "Очистка H13", desc: "99.97% вирусной фильтрации" },
                { icon: <Zap className="text-[#f2ca50]" size={20} />, title: "Smart Sync", desc: "Автономное управление" },
                { icon: <Wind className="text-[#f2ca50]" size={20} />, title: "Heating", desc: "Мягкий климат-контроль" },
                { icon: <ArrowRight className="text-[#f2ca50]" size={20} />, title: "Silent", desc: "Инженерия тишины 18дБ" },
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-[#1f1b13] border border-zinc-800/10">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="font-display text-sm uppercase tracking-widest mb-1">{feature.title}</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{feature.desc}</p>
                </div>
              ))}
            </div>

            {item.specs && (
              <div className="mb-16">
                <h3 className="font-display text-lg uppercase tracking-widest border-b border-zinc-800 pb-4 mb-8">Спецификации</h3>
                <div className="space-y-4">
                  {Object.entries(item.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500">{key}</span>
                      <span className="text-[11px] uppercase tracking-widest font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <Link 
                to="/store"
                className="flex items-center justify-center gap-3 w-full bg-[#f2ca50] text-[#16130b] py-6 font-display text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-1"
              >
                КУПИТЬ В БУТИКЕ
                <ShoppingCart size={16} />
              </Link>
              <a 
                href="mailto:air@zemair.ru"
                className="inline-block w-full border border-zinc-800 text-zinc-500 py-6 font-display text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#f2ca50] hover:text-[#f2ca50] transition-all text-center"
              >
                ЗАКАЗАТЬ КАСТОМИЗАЦИЮ
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
