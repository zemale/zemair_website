import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  VolumeX, 
  Filter, 
  Cpu, 
  CheckCircle2, 
  Info, 
  Droplets,
  ArrowUpRight 
} from 'lucide-react';
import { catalogItems } from '../types';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Hu5hUGdrFg__UPkuHArB1rhJS4W3SIbwv7p81jAUbdz2ifsaCgS3_wrM5jZjVLMvPLjhdJzedwkJjLgeK51t-DkH0IS9jvWNF4SDHYjnkuI52unnCm-3ooHCoxe9tJZXCUKoEqZRs9zV17gquoUFQynTCqvLZu8UD-OE2LDlB_hZoJx-LftcculVL6OX3mFsRaCTtvmbO8kXP1BOkziqDRzZWWvvICy7RerldKGvUGDk-IR_BdyVH1HfyyEpHSiJ4vNmeu_aiuA"
            alt="ZEMAIR Interior"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16130b] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#f2ca50] mb-6 block">
              Инженерное совершенство
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[110px] leading-[0.95] mb-10 font-normal tracking-tight">
              Архитектура чистого воздуха
            </h1>
            <p className="font-sans text-[#F5F1E6]/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
              ZEMAIR — это не обычный приточный очиститель воздуха с подогревом. Это монолитный элемент интерьера, защищающий вас от пыли, вирусов и аллергенов. Технологическое безмолвие для пространств высшего порядка.
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <button className="bg-[#f2ca50] text-[#16130b] px-12 py-5 font-sans text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[#d4af37] transition-all flex items-center justify-center gap-3 cursor-pointer">
                Запрос на интеграцию
                <ArrowRight size={14} />
              </button>
              <div className="flex items-center gap-4 px-6 border-l border-zinc-800">
                <div className="w-16 h-[2px] bg-[#f2ca50] relative overflow-hidden">
                  <motion.div 
                    animate={{ x: [0, 64, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/50 blur-sm"
                  />
                </div>
                <span className="font-display text-[10px] uppercase tracking-widest text-[#8E8E93]">
                  Статус: В норме
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Secondary Nav */}
      <div className="sticky top-[72px] w-full z-30 bg-[#1f1b13]/90 backdrop-blur-md border-b border-zinc-800/30 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 md:gap-12 overflow-x-auto whitespace-nowrap hide-scrollbar">
          {['Серия Monolith', 'Кастомизация', 'Характеристики', 'Материалы'].map((item) => (
            <a key={item} href="#catalog" className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F1E6]/60 hover:text-[#f2ca50] transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Preview Catalog */}
      <section id="catalog" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#f2ca50] mb-6 font-semibold">Каталог продукции</h2>
          <h3 className="font-display text-4xl md:text-5xl font-normal tracking-tight">Серия Monolith</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {catalogItems.slice(0, 5).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="monolith-card group cursor-pointer"
            >
              <Link to={`/catalog/${item.id}`}>
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
              </Link>
              <div className="mt-8 px-2">
                <div className="flex justify-between items-end">
                  <Link to={`/catalog/${item.id}`}>
                    <h3 className="font-display text-2xl mb-1 group-hover:text-[#f2ca50] transition-colors">{item.title}</h3>
                    <p className="font-display text-[10px] text-zinc-500 uppercase tracking-widest">{item.subtitle}</p>
                  </Link>
                  <ArrowUpRight size={20} className="text-zinc-700 group-hover:text-[#f2ca50] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="bg-[#231f17] p-10 flex flex-col justify-center items-center text-center border border-zinc-700/30">
            <VolumeX className="text-[#f2ca50] mb-8" size={64} strokeWidth={1} />
            <h3 className="font-display text-2xl mb-4">Индивидуальный проект</h3>
            <p className="text-sm text-zinc-400 mb-10 leading-relaxed">Создаем уникальные финиши под ваш интерьер: от натурального камня до редких сплавов.</p>
            <button className="border border-[#f2ca50] text-[#f2ca50] px-10 py-3 font-display text-[10px] uppercase tracking-widest hover:bg-[#f2ca50] hover:text-[#16130b] transition-all duration-300 cursor-pointer">
              ОБСУДИТЬ
            </button>
          </div>
        </div>
        <div className="mt-16 text-center">
            <Link to="/catalog" className="font-display text-sm uppercase tracking-[0.2em] border-b border-[#f2ca50] py-2 text-[#f2ca50]">
                Посмотреть весь каталог
            </Link>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 border border-zinc-800/50">
          <div className="md:col-span-7 relative h-[400px] md:h-auto overflow-hidden">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9pWhkgzgat8xjB0-1F0EGfx-dby_XPEVkXQo_g0WOUAduBzAYposqus12tRepacDx_TDhgPGkfWLL3fIhXZVBw5oC8jB0JUFunKXeA7pGMxIphZxdgenHcxMUYhhsGcZ6Ayed2E8TWFIH3qOFjDrk5g0SIw7KFPbeFcpp__7CioPEB03n3lu-M113rpIDlh_PboZOqpVvSKZ5BbLVZ8GjSw6OB3tOHUEE-CKUP7lKU7TLErz19QII4ExozK7bMDiAhRYrI0WDLY"
              alt="Customization"
              className="w-full h-full object-cover grayscale brightness-50 contrast-125"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#16130b] to-transparent hidden md:block"></div>
          </div>
          <div className="md:col-span-5 bg-[#16130b] p-8 md:p-20 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">Архитектурная кастомизация</h2>
            <p className="text-zinc-400 mb-10 leading-relaxed text-sm md:text-base">
              ZEMAIR — это не бытовой прибор, а часть архитектуры. Мы интегрируем системы очистки воздуха в стены, колонны и мебельные конструкции, сохраняя чистоту линий вашего проекта.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#f2ca50] rounded-full"></div>
                <span className="font-display text-[10px] uppercase tracking-widest opacity-80">Интеграция в «Умный дом»</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#f2ca50] rounded-full"></div>
                <span className="font-display text-[10px] uppercase tracking-widest opacity-80">Скрытый монтаж</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#f2ca50] rounded-full"></div>
                <span className="font-display text-[10px] uppercase tracking-widest opacity-80">Эксклюзивные материалы</span>
              </li>
            </ul>
            <Link to="/technology" className="font-display text-[10px] uppercase tracking-widest text-[#f2ca50] flex items-center gap-2 group border-b border-[#f2ca50] w-fit py-2">
              ПОДРОБНЕЕ О ТЕХНОЛОГИЯХ 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Specifications Bento */}
      <section id="tech" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-sm mb-16 text-center uppercase tracking-[0.4em] text-zinc-500 font-bold">
          Технологическое превосходство
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:min-h-[650px]">
          <div className="md:col-span-2 md:row-span-2 bg-[#1f1b13] p-8 md:p-12 flex flex-col justify-end border border-zinc-800/10 relative group overflow-hidden min-h-[300px]">
            <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-10 group-hover:opacity-20 transition-opacity">
               <Filter size={80} md:size={120} strokeWidth={0.5} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-xl md:text-2xl mb-4 uppercase tracking-wider">H13 HEPA Фильтрация</h4>
              <p className="text-zinc-400 leading-relaxed text-xs md:text-base">
                Пятиступенчатая система очистки задерживает 99.97% частиц, включая вирусы и аллергены. Тишина работы на уровне шепота.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-2 bg-[#1f1b13] p-8 md:p-10 flex items-center justify-between border border-zinc-800/10 group">
            <div className="max-w-[70%]">
              <h4 className="font-display text-lg md:text-xl mb-2 text-[#f2ca50]">Smart Sync</h4>
              <p className="text-[10px] md:text-sm text-zinc-500">Автоматическая адаптация к качеству воздуха в реальном времени.</p>
            </div>
            <Cpu size={32} md:size={48} strokeWidth={1} className="text-[#f2ca50]/50 group-hover:text-[#f2ca50] transition-colors" />
          </div>

          <div className="bg-[#1f1b13] p-8 md:p-10 border border-zinc-800/10 flex flex-col justify-center items-center text-center">
            <span className="text-4xl md:text-5xl font-display font-light text-[#f2ca50] mb-2">18дБ</span>
            <p className="font-display text-[9px] uppercase tracking-widest text-[#8E8E93]">Уровень шума</p>
          </div>
          
          <div className="bg-[#1f1b13] p-8 md:p-10 border border-zinc-800/10 flex flex-col justify-center items-center text-center group">
            <span className="text-4xl md:text-5xl font-display font-light text-[#f2ca50] mb-2 group-hover:scale-110 transition-transform duration-500">600</span>
            <p className="font-display text-[9px] uppercase tracking-widest text-[#8E8E93]">м³/час поток</p>
          </div>
        </div>
      </section>

      {/* Final Form CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto py-24 border border-zinc-800/50 bg-[#1f1b13]/40 backdrop-blur-sm relative overflow-hidden text-center px-8 md:px-20">
          <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-[#f2ca50]/30"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-[#f2ca50]/30"></div>
          
          <h2 className="font-display text-4xl mb-6 uppercase tracking-tight">Создайте свою архитектуру воздуха</h2>
          <p className="text-[#F5F1E6]/70 text-lg mb-12 opacity-70">
            Оставьте запрос на персональную консультацию и интеграцию системы в ваш проект.
          </p>
          
          <form className="max-w-md mx-auto space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative border-b border-zinc-700 focus-within:border-[#f2ca50] transition-colors group">
              <input 
                type="text" 
                placeholder="ИМЯ" 
                className="w-full bg-transparent border-none py-4 text-[#F5F1E6] focus:ring-0 font-display text-[10px] tracking-[0.2em] placeholder:text-zinc-600 outline-none"
              />
            </div>
            <div className="relative border-b border-zinc-700 focus-within:border-[#f2ca50] transition-colors group">
              <input 
                type="email" 
                placeholder="ЭЛЕКТРОННАЯ ПОЧТА" 
                className="w-full bg-transparent border-none py-4 text-[#F5F1E6] focus:ring-0 font-display text-[10px] tracking-[0.2em] placeholder:text-zinc-600 outline-none"
              />
            </div>
            <button className="w-full bg-[#f2ca50] text-[#16130b] py-6 font-display text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#d4af37] transition-all transform hover:-translate-y-1 cursor-pointer">
              ОТПРАВИТЬ ЗАЯВКУ
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
