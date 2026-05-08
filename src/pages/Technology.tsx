import React from 'react';
import { motion } from 'motion/react';
import { Filter, Wind, ShieldCheck, Cpu, Droplets, Zap } from 'lucide-react';

export default function Technology() {
  const techSpecs = [
    {
      icon: <Filter size={40} className="text-[#f2ca50]" />,
      title: "Hyper-H13 Filtech",
      desc: "Нано-волокнистая структура, задерживающая частицы размером до 0.1 микрона. Эффективность против PM2.5 и летучих органических соединений (VOC)."
    },
    {
      icon: <Wind size={40} className="text-[#f2ca50]" />,
      title: "Flow Dynamic Engine",
      desc: "Турбированная система забора воздуха с 360-градусным покрытием. Обеспечивает полную циркуляцию в помещении 100м² за 12 минут."
    },
    {
      icon: <Cpu size={40} className="text-[#f2ca50]" />,
      title: "Neural Engine AI",
      desc: "Адаптивное управление интенсивностью на основе датчиков лазерного сканирования качества воздуха. Оптимизация энергопотребления."
    },
    {
      icon: <Zap size={40} className="text-[#f2ca50]" />,
      title: "Thermal Mesh",
      desc: "Интегрированный керамический нагревательный элемент, который прогревает очищенный воздух без сжигания кислорода."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-xs uppercase tracking-[0.4em] text-[#f2ca50] mb-6 block"
          >
            Engineering Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl tracking-tight mb-12"
          >
            Инженерия тишины
          </motion.h1>
          <p className="text-zinc-500 max-w-3xl mx-auto text-xl font-light">
            ZEMAIR объединяет передовые аэродинамические решения с эстетикой минимализма. Каждый компонент спроектирован для достижения максимальной эффективности при минимальном шумовом загрязнении.
          </p>
        </header>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/20 border border-zinc-800/20 mb-32">
          {techSpecs.map((spec, i) => (
            <div key={i} className="bg-[#1f1b13] p-16 group hover:bg-[#231f17] transition-colors">
              <div className="mb-10">{spec.icon}</div>
              <h3 className="font-display text-3xl mb-6 tracking-wide">{spec.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Infographic Section */}
        <section className="bg-[#110e07] p-12 md:p-24 border border-zinc-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12">
                <h2 className="font-display text-4xl mb-8">Пятислойный щит</h2>
                {[
                  { num: "01", label: "Предфильтр", desc: "Улавливает пыльцу и крупные частицы" },
                  { num: "02", label: "HEPA H13", desc: "Антибактериальный и антивирусный слой" },
                  { num: "03", label: "Activated Carbon", desc: "Нейтрализация запахов и газов" },
                  { num: "04", label: "Cold Catalyst", desc: "Расщепление формальдегидов" },
                  { num: "05", label: "Ionizer", desc: "Отрицательно заряженные частицы для свежести" },
                ].map(l => (
                  <div key={l.num} className="flex gap-8 group">
                    <span className="font-display text-xl text-[#f2ca50] opacity-30 group-hover:opacity-100 transition-opacity">{l.num}</span>
                    <div>
                      <h4 className="font-display text-lg uppercase tracking-widest mb-1">{l.label}</h4>
                      <p className="text-sm text-zinc-500 uppercase tracking-[0.1em]">{l.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
             <div className="relative aspect-square border border-zinc-800/30 flex items-center justify-center p-12 overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-0 opacity-5"
                >
                   <Droplets size={600} strokeWidth={0.1} />
                </motion.div>
                <div className="relative z-10 text-center">
                   <ShieldCheck size={120} className="text-[#f2ca50] mx-auto mb-8 opacity-50" />
                   <p className="font-display text-xs uppercase tracking-[0.5em] text-[#f2ca50]">Certified Protection</p>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
