import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { catalogItems } from '../types';

export default function Catalog() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="font-display text-6xl md:text-8xl mb-8 tracking-tight">Коллекции</h1>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            Исследуйте наши архитектурные решения. От классических металлов до современных анодированных покрытий — каждая модель ZEMAIR создана для идеальной интеграции.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {catalogItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <Link to={`/catalog/${item.id}`} className="block">
                <div className="bg-[#1f1b13] p-12 aspect-[1/1.5] relative flex items-center justify-center overflow-hidden border border-zinc-800/20 group-hover:border-zinc-700/50 transition-colors shadow-2xl">
                  <div className="relative w-full h-full transform transition-transform duration-1000 group-hover:scale-110">
                    {item.img ? (
                      <>
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
                        <motion.div 
                          animate={{ opacity: [0.4, 0.8, 0.4] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          className={`absolute top-1/4 left-0 w-full h-[1px] ${item.led} led-glow`}
                        ></motion.div>
                      </>
                    ) : (
                      <div className={`w-full h-full ${item.color} flex items-center justify-center relative`}>
                         {/* Metallic Texture overlay */}
                         <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/40 opacity-50"></div>
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20"></div>
                         <motion.div 
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className={`absolute top-1/4 left-0 w-full h-[1px] ${item.led} led-glow`}
                         ></motion.div>
                         <span className="font-display text-8xl opacity-10 font-black italic tracking-tighter">Z</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-[9px] uppercase tracking-[0.3em] text-[#F5F1E6]/20 transition-opacity group-hover:opacity-40">
                    ZEMAIR ARCHITECTURAL
                  </div>
                </div>
                <div className="mt-8 px-2 flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-3xl mb-1 group-hover:text-[#f2ca50] transition-colors">{item.title}</h3>
                    <p className="font-display text-[10px] text-zinc-500 uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                  <ArrowUpRight size={24} className="text-zinc-700 group-hover:text-[#f2ca50] transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Section */}
        <section className="mt-32 py-24 border-t border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl mb-8">Индивидуальные решения</h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Мы понимаем, что каждый проект уникален. Наше ателье готово разработать эксклюзивное исполнение ZEMAIR, используя материалы вашей отделки: от шпона редких пород дерева до натурального мрамора.
              </p>
              <button className="bg-transparent border border-[#f2ca50] text-[#f2ca50] px-12 py-5 font-sans text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#f2ca50] hover:text-[#16130b] transition-all">
                СВЯЗАТЬСЯ С ДИЗАЙНЕРОМ
              </button>
            </div>
            <div className="aspect-[4/5] bg-zinc-900/50 relative overflow-hidden group">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBZqBwcMgOAY-CyTwS0XQF2zXSq08cSAgXlXfGSXRo_XoX8tqGZDvzHZb7-1Xrab4YieNDpJaIbx8Ski82eJCCESIJQBhgdO6_KbpuFVtuem0TfeRFGg_p6xTZ8_bBiudfPT-5fiejBMNf5rOZ5TVbkJyIcc6iUVOl3jbhpQnHcxUS6GgfVYXi0KK4b5fbTqGA3JF8PDmCJCXdB5518e0bdPU8vdOjY_d1dhX0vdITYSeJ5ov7EYZCqxdcRBkSo3aiadXntC14ghE"
                 alt="Custom finishes"
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
               />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
