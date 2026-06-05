import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Cpu, Share2, Activity, Zap, Wind } from 'lucide-react';

export default function Intelligence() {
  const features = [
    {
      icon: <Smartphone size={32} />,
      title: "ZEMAIR Control App",
      desc: "Полное управление климатом в одно касание. Мониторинг качества воздуха в реальном времени, настройка расписаний и адаптивных режимов."
    },
    {
      icon: <Activity size={32} />,
      title: "Bio-Response AI",
      desc: "Бризер самостоятельно подстраивается под уровень CO2 и пыли, увеличивая мощность именно тогда, когда это необходимо вашему организму."
    },
    {
      icon: <Share2 size={32} />,
      title: "Ecosystem Sync",
      desc: "Нативная поддержка Apple HomeKit, Google Home, Яндекс Алисы и систем умного дома на базе Zigbee и Wi-Fi. Открытый API для кастомных интеграций."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0d0c08]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-[10px] uppercase tracking-[0.5em] text-[#f2ca50] mb-6 block"
          >
            Digital Atmosphere
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-9xl mb-12 tracking-tight"
          >
            Интеллект <br />комфорта
          </motion.h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Мы верим, что технологии должны быть невидимыми. ZEMAIR самостоятельно заботится о свежести вашего пространства, используя массив сенсоров и алгоритмы предсказания.
          </p>
        </header>

        {/* App Showcase */}
        <div className="relative mb-48">
            <div className="aspect-[21/9] bg-[#1a1812] border border-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f2ca50_1px,transparent_1px)] [background-size:40px_40px]"></div>
                
                <div className="relative z-10 flex gap-20 items-center">
                    {/* Phone Mockup with real image */}
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="w-64 h-[500px] bg-black border-[6px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden relative group"
                    >
                         <img
                           src="/assets/zemair_app_1779641069686.png"
                           alt="ZEMAIR Smart App interface mockup"
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                           referrerPolicy="no-referrer"
                         />
                         <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
                    </motion.div>

                    <div className="hidden lg:block space-y-8 max-w-md">
                        <div className="p-6 border-l-2 border-[#f2ca50] bg-white/5 backdrop-blur-sm">
                            <h4 className="font-display text-sm uppercase tracking-widest mb-2">Smart Prediction</h4>
                            <p className="text-zinc-400 text-xs leading-relaxed uppercase tracking-wider">
                                СИСТЕМА ПРЕДСКАЗЫВАЕТ ПОВЫШЕНИЕ CO2 НА ОСНОВЕ ВАШЕГО РАСПИСАНИЯ И ПРЕВЕНТИВНО ОБНОВЛЯЕТ ВОЗДУХ.
                            </p>
                        </div>
                        <div className="p-6 border-l-2 border-zinc-700 bg-white/5 backdrop-blur-sm opacity-50">
                            <h4 className="font-display text-sm uppercase tracking-widest mb-2">Sleep Harmony</h4>
                            <p className="text-zinc-400 text-xs leading-relaxed uppercase tracking-wider">
                                НОЧНОЙ РЕЖИМ СНИЖАЕТ УРОВЕНЬ ШУМА ДО ПОРОГА СЛЫШИМОСТИ, ПОДДЕРЖИВАЯ ЛУЧШИЕ УСЛОВИЯ ДЛЯ СНА.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-48">
            {features.map((feature, i) => (
                <div key={i} className="group">
                    <div className="text-[#8E8E93] group-hover:text-[#f2ca50] transition-colors mb-8">
                        {feature.icon}
                    </div>
                    <h3 className="font-display text-3xl mb-6 tracking-tight">{feature.title}</h3>
                    <p className="text-zinc-500 leading-relaxed uppercase text-[11px] tracking-widest font-light">
                        {feature.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* Sensor Tech */}
        <section className="bg-[#110f0a] p-12 md:p-24 border border-zinc-800/30 overflow-hidden relative">
            <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute top-0 right-0 w-96 h-96 bg-[#f2ca50] blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"
            ></motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-zinc-800/30 group">
                    <img
                      src="/assets/neural_chip_1779641085343.png"
                      alt="ZEMAIR AI Neural Sensor Chip close-up"
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <Activity size={200} strokeWidth={0.5} className="absolute inset-0 m-auto text-[#f2ca50]/5 pointer-events-none" />
                </div>
                <div>
                   <span className="font-mono text-[10px] text-[#f2ca50] mb-4 block uppercase tracking-widest">Processing Data...</span>
                   <h2 className="font-display text-5xl mb-12">Сенсорная экосистема</h2>
                   <div className="space-y-8">
                       {[
                           { label: "PM2.5 / PM10", val: "Лазерное сканирование частиц" },
                           { label: "tVOC / CO2", val: "Мониторинг газового состава" },
                           { label: "Humidity", val: "Адаптивное увлажнение (опция)" },
                           { label: "Odor", val: "Датчик интенсивности запахов" }
                       ].map(s => (
                           <div key={s.label} className="flex justify-between items-end border-b border-zinc-800 pb-4">
                               <span className="font-display text-xs uppercase tracking-[0.3em] font-medium">{s.label}</span>
                               <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{s.val}</span>
                           </div>
                       ))}
                   </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
