import React from 'react';
import { motion } from 'motion/react';
import { Drill, Ruler, Wind, Home, Layers, ShieldCheck } from 'lucide-react';

export default function Installation() {
  const steps = [
    {
      icon: <Drill size={32} />,
      title: "Алмазное бурение",
      desc: "Создание технологического отверстия диаметром 132мм. Чистый монтаж без повреждения финишной отделки фасада и интерьера."
    },
    {
      icon: <Layers size={32} />,
      title: "Теплоизоляция",
      desc: "Многослойный терморазрыв внутри канала исключает промерзание стены и возникновение конденсата даже при -40°C."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Герметизация",
      desc: "Прецизионная стыковка корпуса бризера с каналом. Никаких сквозняков — только контролируемый приток свежего воздуха."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#100e08]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-[10px] uppercase tracking-[0.5em] text-[#f2ca50] mb-6 block"
          >
            Engineering & Integration
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-9xl mb-12 tracking-tight"
          >
            Искусство <br />интеграции
          </motion.h1>
          <p className="text-zinc-500 max-w-3xl text-xl font-light leading-relaxed">
            ZEMAIR — это не просто прибор, это часть архитектуры вашего дома. Мы разработали систему скрытого монтажа, которая обеспечивает максимальную производительность при полном визуальном спокойствии.
          </p>
        </header>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
            <div className="relative aspect-[4/5] bg-zinc-900 border border-zinc-800/50 overflow-hidden group">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center p-20">
                     <span className="text-[10px] uppercase tracking-[0.5em] text-[#f2ca50]/20 font-display text-center">
                        RENDER: TECHNICAL CROSS-SECTION OF WALL INSTALLATION
                     </span>
                </div>
                {/* Visual Indicators */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[132px] h-[132px] rounded-full border-2 border-dashed border-[#f2ca50]/40 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-[#f2ca50]">Ø 132mm</span>
                </div>
            </div>
            <div>
                <h2 className="font-display text-4xl mb-12">Золотое правило размещения</h2>
                <div className="space-y-12">
                    <div className="flex gap-8 group">
                        <div className="w-12 h-12 bg-[#1a1812] flex items-center justify-center text-[#f2ca50] border border-zinc-800">
                             <Home size={20} />
                        </div>
                        <div>
                            <h4 className="font-display text-lg uppercase tracking-widest mb-2">Внешняя стена</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                Установка производится исключительно на наружной стене, которая граничит с открытым воздухом. Это необходимо для прямого забора свежего кислорода.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-8 group">
                        <div className="w-12 h-12 bg-[#1a1812] flex items-center justify-center text-[#f2ca50] border border-zinc-800">
                             <Ruler size={20} />
                        </div>
                        <div>
                            <h4 className="font-display text-lg uppercase tracking-widest mb-2">Близость к окну</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                Оптимальное место — сбоку от окна. Это обеспечивает легкий доступ к обслуживанию фильтров и естественное распределение воздушных потоков в интерьере.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/20 mb-32 border border-zinc-800/20">
            {steps.map((step, i) => (
                <div key={i} className="bg-[#1a1812] p-12 hover:bg-[#201d16] transition-colors">
                    <div className="text-[#f2ca50] mb-8">{step.icon}</div>
                    <h3 className="font-display text-2xl mb-4 tracking-wide uppercase">{step.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
            ))}
        </div>

        {/* Exterior View */}
        <section className="bg-[#0a0904] p-12 md:p-24 border border-zinc-800/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="font-display text-4xl mb-8">Невидимость снаружи</h2>
                    <p className="text-zinc-400 mb-12 leading-relaxed">
                        С внешней стороны фасада устанавливается компактная вентиляционная решетка, окрашенная в цвет вашего фасада. Мы уважаем архитектурный облик города, поэтому наше решение остается практически незаметным.
                    </p>
                    <a 
                        href="/zemair_installation_card.pdf" 
                        download="ZEMAIR_Installation_Guide.pdf"
                        className="inline-block border border-[#f2ca50]/40 text-[#f2ca50] px-10 py-4 font-display text-[10px] uppercase tracking-[0.4em] hover:bg-[#f2ca50] hover:text-black transition-all"
                    >
                        Скачать тех-карту монтажа
                    </a>
                 </div>
                 <div className="aspect-video bg-zinc-900 border border-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#f2ca50]/20 font-display text-center p-8">
                        RENDER: EXTERIOR FAÇADE WITH DISCREET VENT GRILL
                    </span>
                    <motion.div 
                        animate={{ 
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute bottom-10 right-10 flex items-center gap-4"
                    >
                        <Wind size={16} className="text-[#f2ca50]" />
                        <span className="text-[8px] uppercase tracking-widest text-zinc-500">Silent Airflow</span>
                    </motion.div>
                 </div>
            </div>
        </section>
      </div>
    </div>
  );
}
