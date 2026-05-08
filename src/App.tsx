import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  VolumeX, 
  Filter, 
  Cpu, 
  CheckCircle2, 
  Info, 
  Droplets,
  LayoutGrid,
  Heart,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

const navLinks = [
  { name: 'Каталог', href: '#catalog' },
  { name: 'Технологии', href: '#tech' },
  { name: 'Качество воздуха', href: '#quality' },
  { name: 'Устойчивое развитие', href: '#sustainability' },
  { name: 'Поддержка', href: '#support' },
];

const catalogItems = [
  { title: 'Satin Brass', subtitle: 'Satin Brass Edition', color: 'bg-[#B5A642]', led: 'bg-white/40', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlncURxnYVLdD_TiuNMSKua80ZuXdukVECbXZRbNWHG-2Mfax1ZobWz14P6LlB1S3PuoXrx00-7UCkQqaGgsSfPUjHUzzoCRbMsJ609Tx_i9Ozcn5xezSSSx7Pwu-XNL9ej8fceyImcQ_Pnhbxcuw13wNR5elxa56BgQDRBptPV8WFk6b6OZa08vCyr68gLnBKTw9YkzWLRsvMDf849D9WQ71BvNAnYeYausYgl4D1vcs46BbCtMduNJhScV9rOYFokHMDRdVH-cs' },
  { title: 'White Gold', subtitle: 'White Gold Finish', color: 'bg-[#F5F1E6]', led: 'bg-[#f2ca50]/40', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbZqBwcMgOAY-CyTwS0XQF2zXSq08cSAgXlXfGSXRo_XoX8tqGZDvzHZb7-1Xrab4YieNDpJaIbx8Ski82eJCCESIJQBhgdO6_KbpuFVtuem0TfeRFGg_p6xTZ8_bBiudfPT-5fiejBMNf5rOZ5TVbkJyIcc6iUVOl3jbhpQnHcxUS6GgfVYXi0KK4b5fbTqGA3JF8PDmCJCXdB5518e0bdPU8vdOjY_d1dhX0vdITYSeJ5ov7EYZCqxdcRBkSo3aiadXntC14ghE' },
  { title: 'Matte Black', subtitle: 'Matte Black Anodized', color: 'bg-[#1A1A1B]', led: 'bg-[#007AFF]/60', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqVFHHPLQbQnh_w26nsfr3wVGJvjh7Nt0y6qmC2ZERHOVdFaGc8INK60zqM6ACKVuT_KlEDhSBXCuYD-GadUvMCNkYtY-L-8JozbZ6JVxsJaHI93IDZZrfw-Ya06R1Gj-yJXU3kGbDqWBJYbLT-AvO8biTZkNhxoQOboZTAU_tfzE284nDUKujGH_Jm0qxcPyUdvHpOT9QJSTf3IYd-aFlpWS8i5HIFkietPEn2iC4nVG8EZDcimTg7Zmb_dpPWYojd3zpTvwlTA' },
  { title: 'Metallic Grey', subtitle: 'Architectural Silver', color: 'bg-[#8E8E93]', led: 'bg-white/60', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm4NKCErNPS1fCM3kSP3FUnyeghGPyM4mXbXOkFyp-KiSgs0AhFAgIOCgDJv2XL3Bfkqe1vng3t_-GVkDTnVKQ_FJ0S3A6GjkmIP-Dgz_9mJjQWG8fPn2Glq1zlv6p1gC0OvpOKfrhTo11MPntDjuzg3JSLMn5aKIAHl2jwCrJkvtJoKNAT_aqayYJLEhGwLMsulDjrpZFj8u0PmTgUzdz6rUu-i0R-kd4VVSVYXfhVSeWdQ2IMfgY2RN2XOzJzKIWDSJg5AJghvk' },
  { title: 'Pure White', subtitle: 'Pure Gallery White', color: 'bg-[#FAFAFA]', led: 'bg-[#f2ca50]/40', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDUe7OV6_wkNWV9MS-_5JIaiQvyOMyVjTJtZEVGyNXqzEhKZ4ek1HO-rIJFjLvpy7eIve1utelsO5bgMCA7YNLPKsR0hjWQLZ23jNPsc3rVrr4bMDZexQwD_ihRg9XqXVipj2n9mQdZF5iQcfH-6e8vZDagM0kpKtjvFI-stAktaMerGakra5myXq9jlOM0Nj4a53JDeAp19t0TYpcORYjkZZOQ7xETn4NLf4KVr8r0La1W8dxWq-nqVkD5d-m0R7xPeDTtXkU_Yc' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#16130b] text-[#F5F1E6] font-sans selection:bg-[#f2ca50] selection:text-black">
      {/* Top Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#16130b]/80 backdrop-blur-md py-4' : 'py-6 px-4'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="font-display text-3xl md:text-4xl font-normal tracking-wide transition-transform hover:scale-105 cursor-pointer px-1 uppercase">
            ZEMAIR
          </div>

          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8E8E93] hover:text-[#f2ca50] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
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
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-widest text-[#F5F1E6]"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#d4af37] text-[#16130b] px-12 py-4 font-display text-sm font-bold uppercase tracking-widest">
              ЗАПРОС
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h1 className="font-display text-7xl md:text-[110px] leading-[0.95] mb-10 font-normal tracking-tight">
              Архитектура чистого воздуха
            </h1>
            <p className="font-sans text-[#F5F1E6]/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
              ZEMAIR — это не просто очиститель воздуха с подогревом. Это монолитный элемент интерьера, защищающий вас от пыли, вирусов и аллергенов. Технологическое безмолвие для пространств высшего порядка.
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
            <a key={item} href="#" className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F1E6]/60 hover:text-[#f2ca50] transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <section id="catalog" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#f2ca50] mb-6 font-semibold">Каталог продукции</h2>
          <h3 className="font-display text-5xl font-normal tracking-tight">Серия Monolith</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {catalogItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="monolith-card group cursor-pointer"
            >
              <div className="bg-[#1f1b13] p-12 aspect-[1/1.5] relative flex items-center justify-center overflow-hidden border border-zinc-800/20 group-hover:border-zinc-700/50 transition-colors shadow-2xl">
                {/* Product Render Placeholder/Image */}
                <div className="relative w-full h-full transform transition-transform duration-1000 group-hover:scale-110">
                  {item.img ? (
                    <>
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      {/* Gradient overlay to simulate studio light */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
                      {/* Overlay for specific item glow */}
                      <motion.div 
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className={`absolute top-1/4 left-0 w-full h-[1px] ${item.led} led-glow`}
                      ></motion.div>
                    </>
                  ) : (
                    <div className={`w-full h-full ${item.color} opacity-20 flex items-center justify-center`}>
                       <span className="font-display text-6xl opacity-5">Z</span>
                    </div>
                  )}
                </div>
                
                {/* Branding on card */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-[9px] uppercase tracking-[0.3em] text-[#F5F1E6]/20 transition-opacity group-hover:opacity-40">
                  ZEMAIR ARCHITECTURAL
                </div>
              </div>
              <div className="mt-8 px-2">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-2xl mb-1 group-hover:text-[#f2ca50] transition-colors">{item.title}</h3>
                    <p className="font-display text-[10px] text-zinc-500 uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-zinc-700 group-hover:text-[#f2ca50] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Individual Inquiry Card */}
          <div className="bg-[#231f17] p-10 flex flex-col justify-center items-center text-center border border-zinc-700/30">
            <VolumeX className="text-[#f2ca50] mb-8" size={64} strokeWidth={1} />
            <h3 className="font-display text-2xl mb-4">Индивидуальный проект</h3>
            <p className="text-sm text-zinc-400 mb-10 leading-relaxed">Создаем уникальные финиши под ваш интерьер: от натурального камня до редких сплавов.</p>
            <button className="border border-[#f2ca50] text-[#f2ca50] px-10 py-3 font-display text-[10px] uppercase tracking-widest hover:bg-[#f2ca50] hover:text-[#16130b] transition-all duration-300 cursor-pointer">
              ОБСУДИТЬ
            </button>
          </div>
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
          <div className="md:col-span-5 bg-bg-dark p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-display text-4xl mb-8 leading-tight">Архитектурная кастомизация</h2>
            <p className="text-zinc-400 mb-10 leading-relaxed">
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
            <a href="#" className="font-display text-[10px] uppercase tracking-widest text-[#f2ca50] flex items-center gap-2 group border-b border-[#f2ca50] w-fit py-2">
              СКАЧАТЬ ТЕХНИЧЕСКИЙ КАТАЛОГ 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Specifications Bento */}
      <section id="tech" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-display text-sm mb-16 text-center uppercase tracking-[0.4em] text-zinc-500 font-bold">
          Технологическое превосходство
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:min-h-[650px]">
          {/* Main Filter Feature */}
          <div className="md:col-span-2 md:row-span-2 bg-[#1f1b13] p-12 flex flex-col justify-end border border-zinc-800/10 relative group overflow-hidden">
            <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
               <Filter size={120} strokeWidth={0.5} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display text-2xl mb-4 uppercase tracking-wider">H13 HEPA Фильтрация</h4>
              <p className="text-zinc-400 leading-relaxed">
                Пятиступенчатая система очистки задерживает 99.97% частиц, включая вирусы и аллергены. Тишина работы на уровне шепота.
              </p>
            </motion.div>
          </div>

          {/* Smart Sync */}
          <div className="md:col-span-2 bg-[#1f1b13] p-10 flex items-center justify-between border border-zinc-800/10 group">
            <div className="max-w-[70%]">
              <h4 className="font-display text-xl mb-2 text-[#f2ca50]">Smart Sync</h4>
              <p className="text-sm text-zinc-500">Автоматическая адаптация к качеству воздуха в реальном времени.</p>
            </div>
            <Cpu size={48} strokeWidth={1} className="text-[#f2ca50]/50 group-hover:text-[#f2ca50] transition-colors" />
          </div>

          {/* Metrics */}
          <div className="bg-[#1f1b13] p-10 border border-zinc-800/10 flex flex-col justify-center items-center text-center">
            <span className="text-5xl font-display font-light text-[#f2ca50] mb-2">18дБ</span>
            <p className="font-display text-[9px] uppercase tracking-widest text-[#8E8E93]">Уровень шума</p>
          </div>
          
          <div className="bg-[#1f1b13] p-10 border border-zinc-800/10 flex flex-col justify-center items-center text-center group">
            <span className="text-5xl font-display font-light text-[#f2ca50] mb-2 group-hover:scale-110 transition-transform duration-500">600</span>
            <p className="font-display text-[9px] uppercase tracking-widest text-[#8E8E93]">м³/час поток</p>
          </div>
        </div>
      </section>

      {/* Ambient Intel Section */}
      <section id="quality" className="py-24 px-6 bg-[#110e07]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl mb-6">Эмбиент-интеллект</h2>
            <p className="text-zinc-400">
              Умное управление без визуального шума. Система ZEMAIR адаптируется к вашему ритму жизни, сигнализируя о качестве воздуха едва заметной световой линией.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'PM 2.5', value: '08', status: 'Идеально', icon: <CheckCircle2 size={14} />, color: 'text-emerald-500', border: 'border-[#f2ca50]' },
            { label: 'CO2', value: '420', status: 'Норма', icon: <Info size={14} />, color: 'text-[#8E8E93]', border: 'border-zinc-800' },
            { label: 'Влажность', value: '45%', status: 'Комфорт', icon: <Droplets size={14} />, color: 'text-[#8E8E93]', border: 'border-zinc-800' },
          ].map((item, idx) => (
            <div key={idx} className={`bg-[#1f1b13] p-8 aspect-square flex flex-col justify-between border-b-2 ${item.border}`}>
              <div>
                <span className="font-display text-[10px] uppercase tracking-widest text-zinc-500">{item.label}</span>
                <div className="text-6xl font-display font-light mt-4">{item.value}</div>
              </div>
              <div className={`flex items-center gap-2 ${item.color}`}>
                {item.icon}
                <span className="font-display text-[9px] uppercase tracking-widest">{item.status}</span>
              </div>
            </div>
          ))}
          
          <div className="bg-[#2d2a21] p-8 aspect-square flex flex-col justify-center items-center relative overflow-hidden group">
             <motion.div 
               animate={{ opacity: [0.3, 0.7, 0.3] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute top-1/3 left-0 w-full h-[1px] bg-[#f2ca50] led-glow"
             />
             <div className="relative z-10 text-center">
                <h5 className="font-display text-xl mb-2">LED Sync</h5>
                <p className="font-display text-[9px] uppercase text-zinc-500 tracking-widest">Визуальный пульс дома</p>
             </div>
          </div>
        </div>
      </section>

      {/* Materials Showcase - Horizontal Bento / Strips */}
      <section className="py-24 px-6 bg-[#110e07]">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="font-display text-4xl mb-6">Палитра материалов</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold">
            Пять аутентичных архитектурных финишей для бесшовной интеграции
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-2 h-auto md:h-[600px] overflow-hidden">
          {catalogItems.map((mat, i) => (
            <motion.div
              key={i}
              whileHover={{ flex: 2 }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              className="relative group overflow-hidden bg-[#1f1b13] flex-1 min-h-[300px] md:min-h-0 border border-zinc-800/10 cursor-pointer"
            >
              <div className="absolute inset-0">
                {mat.img ? (
                  <img 
                    src={mat.img} 
                    alt={mat.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700" 
                  />
                ) : (
                  <div className={`w-full h-full ${mat.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#16130b] via-[#16130b]/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <span className="font-display text-sm uppercase tracking-widest text-[#B5A642] block mb-2">{mat.title}</span>
                <div className="w-0 group-hover:w-12 h-[1px] bg-[#B5A642] transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
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

      {/* Footer */}
      <footer className="bg-[#16130b] border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display text-2xl font-black mb-2 opacity-80">ZEMAIR</div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Architectural Systems. Engineered for Silence.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Политика конфиденциальности', 'Руководства', 'Продажи', 'Пресс-кит'].map(item => (
              <a key={item} href="#" className="font-display text-[9px] uppercase tracking-widest text-[#8E8E93] hover:text-[#f2ca50] transition-colors">
                {item}
              </a>
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
        <button className="text-[#f2ca50] flex flex-col items-center gap-1 group">
          <LayoutGrid size={20} />
          <span className="text-[8px] uppercase tracking-widest font-display">Каталог</span>
        </button>
        <button className="text-zinc-500 flex flex-col items-center gap-1">
          <Heart size={20} />
          <span className="text-[8px] uppercase tracking-widest font-display">Сервис</span>
        </button>
        <button className="text-zinc-500 flex flex-col items-center gap-1">
           <ArrowUpRight size={20} />
           <span className="text-[8px] uppercase tracking-widest font-display">Запрос</span>
        </button>
      </div>
    </div>
  );
}

