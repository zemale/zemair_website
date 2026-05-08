import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, FileText, Download, ShieldCheck } from 'lucide-react';

export default function Support() {
  const sections = [
    {
      title: "Документация",
      items: [
        { name: "Руководство пользователя Series Monolith", size: "4.2 MB", type: "PDF" },
        { name: "Технический паспорт фильтров H13", size: "1.5 MB", type: "PDF" },
        { name: "Гарантийные обязательства 2024", size: "0.8 MB", type: "PDF" }
      ]
    },
    {
      title: "Частые вопросы",
      items: [
        { name: "Как часто нужно менять фильтр?", size: "Каждые 6-12 месяцев", type: "FAQ" },
        { name: "Совместимость с протоколом Matter?", size: "Да, полная поддержка", type: "FAQ" },
        { name: "Обслуживание в других регионах", size: "Международная сеть", type: "FAQ" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-8">Поддержка</h1>
          <p className="text-zinc-500 max-w-2xl text-xl font-light">
            Мы обеспечиваем безупречный сервис на протяжении всего срока службы вашего устройства. Персональные инженеры ZEMAIR готовы помочь с установкой и калибровкой системы.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Contact Cards */}
          {[
            { icon: <Phone size={24} />, title: "Консьерж-сервис", content: "+7 985 991 63 44", action: "Позвонить" },
            { icon: <Mail size={24} />, title: "Электронная почта", content: "care@zemair.com", action: "Написать" },
            { icon: <MapPin size={24} />, title: "Шоурум", content: "Арбат, 10, Москва", action: "Маршрут" }
          ].map((card, i) => (
            <div key={i} className="bg-[#1f1b13] p-10 border border-zinc-800/10 flex flex-col justify-between aspect-square lg:aspect-auto">
              <div>
                <div className="text-[#f2ca50] mb-8">{card.icon}</div>
                <h3 className="font-display text-xl mb-4 tracking-widest uppercase">{card.title}</h3>
                <p className="text-2xl font-display font-light mb-10">{card.content}</p>
              </div>
              <button className="text-[10px] uppercase tracking-[0.3em] text-[#f2ca50] border-b border-[#f2ca50] w-fit pb-2 hover:opacity-70 transition-opacity">
                {card.action}
              </button>
            </div>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-display text-3xl mb-12 border-b border-zinc-800 pb-6 tracking-wide">{section.title}</h2>
              <div className="space-y-8">
                {section.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center group cursor-pointer">
                    <div className="flex gap-4 items-center">
                      {item.type === 'PDF' ? <FileText size={20} className="text-zinc-600" /> : <ShieldCheck size={20} className="text-[#f2ca50]" />}
                      <div>
                        <h4 className="font-sans text-sm font-medium group-hover:text-[#f2ca50] transition-colors">{item.name}</h4>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600">{item.size}</span>
                      </div>
                    </div>
                    <Download size={16} className="text-zinc-700 group-hover:text-[#f2ca50] transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Inquiry */}
        <section className="mt-32 py-24 bg-[#110e07] border border-zinc-800/50 flex flex-col items-center text-center px-6">
           <h2 className="font-display text-4xl mb-6">Не нашли ответ?</h2>
           <p className="text-zinc-500 mb-10 max-w-xl">Отправьте нам запрос, и наш технический специалист свяжется с вами в течение часа.</p>
           <button className="bg-[#f2ca50] text-[#16130b] px-16 py-6 font-display text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#d4af37] transition-all">
              СВЯЗАТЬСЯ С ПОДДЕРЖКОЙ
           </button>
        </section>
      </div>
    </div>
  );
}
