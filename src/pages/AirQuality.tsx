import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Info, Droplets } from 'lucide-react';

export default function AirQuality() {
  const metrics = [
    { label: 'PM 2.5', value: '08', status: 'Идеально', icon: <CheckCircle2 size={14} />, color: 'text-emerald-500', border: 'border-[#f2ca50]' },
    { label: 'CO2', value: '420', status: 'Норма', icon: <Info size={14} />, color: 'text-[#8E8E93]', border: 'border-zinc-800' },
    { label: 'Влажность', value: '45%', status: 'Комфорт', icon: <Droplets size={14} />, color: 'text-[#8E8E93]', border: 'border-zinc-800' },
    { label: 'TVOC', value: '0.1', status: 'Чисто', icon: <CheckCircle2 size={14} />, color: 'text-emerald-500', border: 'border-zinc-800' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center md:text-left">
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-8">Качество воздуха</h1>
          <p className="text-zinc-500 max-w-2xl text-xl font-light">
            ZEMAIR постоянно мониторит окружающую среду, используя высокоточные лазерные датчики. Мы делаем невидимые угрозы видимыми и устраняем их мгновенно.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {metrics.map((item, idx) => (
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
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
                <h2 className="font-display text-4xl mb-8 tracking-tight">Интеллектуальный мониторинг</h2>
                <div className="space-y-12">
                   {[
                     { title: "Лазерное сканирование", desc: "Датчики фиксируют частицы до 0.1 микрона в режиме реального времени, обеспечивая мгновенную реакцию системы." },
                     { title: "История данных", desc: "Облачная синхронизация позволяет отслеживать изменения качества воздуха в вашем доме за любой период через приложение." },
                     { title: "Адаптивные сценарии", desc: "Система предугадывает ваши потребности, усиливая очистку во время приготовления пищи или активного отдыха." }
                   ].map(f => (
                     <div key={f.title} className="border-l border-[#f2ca50] pl-8">
                        <h4 className="font-display text-xl mb-3 tracking-wide">{f.title}</h4>
                        <p className="text-zinc-500 leading-relaxed font-light">{f.desc}</p>
                     </div>
                   ))}
                </div>
            </div>
            <div className="order-1 md:order-2 aspect-square bg-[#110e07] relative overflow-hidden flex items-center justify-center p-12 border border-zinc-800/30">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="w-full h-full border border-[#f2ca50]/10 rounded-full flex items-center justify-center"
               >
                  <div className="w-3/4 h-3/4 border border-[#f2ca50]/20 rounded-full flex items-center justify-center">
                     <div className="w-1/2 h-1/2 border border-[#f2ca50]/40 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#f2ca50] rounded-full led-glow shadow-[0_0_50px_rgba(242,202,80,0.5)]"></div>
                     </div>
                  </div>
               </motion.div>
            </div>
        </section>
      </div>
    </div>
  );
}
