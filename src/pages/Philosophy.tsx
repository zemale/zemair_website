import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Circle, ShieldCheck, Zap, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Philosophy() {
  const pillars = [
    {
      icon: <EyeOff className="text-[#f2ca50]" size={32} />,
      title: "Эстетика невидимости",
      desc: "Мы верим, что технологии не должны кричать о себе. ZEMAIR — это архитектурный акцент, который растворяется в пространстве, обеспечивая его функциональность без визуального шума."
    },
    {
      icon: <ShieldCheck className="text-[#f2ca50]" size={32} />,
      title: "Чистота как стандарт",
      desc: "Воздух — это основа жизни. Мы используем медицинские стандарты фильтрации H13, чтобы ваш дом стал крепостью, защищенной от внешних загрязнений мегаполиса."
    },
    {
      icon: <Zap className="text-[#f2ca50]" size={32} />,
      title: "Интеллектуальный покой",
      desc: "Настоящий комфорт — это когда вам не нужно о нем думать. Наши системы реагируют на изменения качества воздуха мгновенно и бесшумно."
    }
  ];

  return (
    <div className="bg-[#0a0904] text-[#F5F1E6] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="ZEMAIR Philosophy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0904]/50 to-[#0a0904]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.6em] text-[#f2ca50] mb-8 block font-medium"
          >
            ФИЛОСОФИЯ ZEMAIR
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-8xl lg:text-9xl mb-12 tracking-tighter leading-[0.9]"
          >
            Архитектура <br /> чистого воздуха
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-20 h-[1px] bg-[#f2ca50] mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Manifest Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl mb-12 leading-tight">
              За пределами функциональности.
            </h2>
            <div className="space-y-8 text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Мы начали с простого вопроса: почему техника, отвечающая за наше здоровье, выглядит как дешевый пластик?
              </p>
              <p>
                В ZEMAIR мы пересмотрели роль очистителя воздуха. Для нас это не прибор, это <span className="text-[#F5F1E6] font-normal italic">монолит</span>. Это часть стены, часть вашего выбора в пользу архитектурной честности.
              </p>
              <p>
                Мы используем только благородные металлы: анодированный алюминий, медь, латунь. Мы верим в тактильность и вечность материалов.
              </p>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 border border-[#f2ca50]/20 translate-x-6 translate-y-6"></div>
            <img 
               src="https://images.unsplash.com/photo-1554995207-c18c2036a2cb?q=80&w=1200&auto=format&fit=crop"
               className="w-full h-full object-cover grayscale brightness-75 relative z-10"
               alt="Philosophy Visual"
            />
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-32 px-6 bg-[#111009]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col gap-8"
              >
                <div className="w-16 h-16 border border-[#f2ca50]/30 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wider">{pillar.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Circle className="mx-auto text-[#f2ca50] mb-12 opacity-50" size={12} fill="currentColor" />
          <h2 className="font-display text-3xl md:text-5xl italic leading-relaxed mb-12">
            "Чистый воздух не должен быть роскошью, он должен быть стандартом пространства, уважающего человека."
          </h2>
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">— КОМАНДА ZEMAIR</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto border border-zinc-800 p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 bg-gradient-to-br from-zinc-900/50 to-black">
          <div className="max-w-xl">
            <h3 className="font-display text-3xl md:text-5xl mb-6">Готовы изменить климат своего дома?</h3>
            <p className="text-zinc-500 text-lg">Посмотрите нашу коллекцию Monolith и выберите финиш, который подходит вашему интерьеру.</p>
          </div>
          <Link 
            to="/catalog" 
            className="px-12 py-6 bg-[#f2ca50] text-[#0a0904] font-display text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4 hover:bg-white transition-all group"
          >
            В КАТАЛОГ
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
