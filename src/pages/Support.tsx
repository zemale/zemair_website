import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, FileText, Download, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Support() {
  const sections = [
    {
      title: "Документация",
      items: [
        { name: "Руководство пользователя Series Monolith", size: "12.4 MB", type: "PDF", path: "/docs/installation-guide.pdf" },
        { name: "Технический паспорт фильтров H13", size: "2.5 MB", type: "PDF", path: "/docs/filter-passport.pdf" },
        { name: "Гарантийные обязательства 2024", size: "1.2 MB", type: "PDF", path: "/docs/warranty.pdf" }
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
          <p className="text-zinc-500 max-w-2xl text-xl font-light leading-relaxed">
            Мы обеспечиваем безупречный сервис на протяжении всего срока службы вашего устройства. Персональные инженеры ZEMAIR готовы помочь с установкой и калибровкой системы.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Support options shortcut */}
          <Link to="/user-manual" className="group bg-[#1f1b13] p-10 border border-zinc-800/10 flex flex-col justify-between hover:border-[#f2ca50]/50 transition-all">
             <div>
               <h3 className="font-display text-2xl mb-4">База знаний</h3>
               <p className="text-zinc-500 text-sm font-light">Полное интерактивное руководство пользователя со всеми техническими деталями.</p>
             </div>
             <div className="flex items-center gap-4 text-[#f2ca50] font-display text-[10px] uppercase tracking-widest mt-12">
                Открыть руководство <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
             </div>
          </Link>
          <Link to="/faq" className="group bg-[#1f1b13] p-10 border border-zinc-800/10 flex flex-col justify-between hover:border-[#f2ca50]/50 transition-all">
             <div>
               <h3 className="font-display text-2xl mb-4">Ответы на FAQ</h3>
               <p className="text-zinc-500 text-sm font-light">Ответы на самые популярные вопросы о выборе, установке и эксплуатации.</p>
             </div>
             <div className="flex items-center gap-4 text-[#f2ca50] font-display text-[10px] uppercase tracking-widest mt-12">
                Смотреть все вопросы <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
             </div>
          </Link>
          <div className="bg-[#1f1b13] p-10 border border-zinc-800/10 flex flex-col justify-between">
             <div>
               <h3 className="font-display text-2xl mb-4">Сервис 24/7</h3>
               <p className="text-zinc-500 text-sm font-light">Свяжитесь с нами напрямую для получения персональной консультации.</p>
             </div>
             <div className="text-[#f2ca50] font-display text-xl mt-12">+7 985 991 63 44</div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32 hidden md:grid">
          {[
            { icon: <Phone size={24} />, title: "Консьерж-сервис", content: "+7 985 991 63 44", action: "Позвонить" },
            { icon: <Mail size={24} />, title: "Электронная почта", content: "air@zemair.com", action: "Написать" },
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
                  item.type === 'PDF' ? (
                    <a key={j} href={item.path} download className="flex justify-between items-center group cursor-pointer">
                      <div className="flex gap-4 items-center">
                        <FileText size={20} className="text-zinc-600 group-hover:text-[#f2ca50] transition-colors" />
                        <div>
                          <h4 className="font-sans text-sm font-medium group-hover:text-[#f2ca50] transition-colors">{item.name}</h4>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-600">{item.size}</span>
                        </div>
                      </div>
                      <Download size={16} className="text-zinc-700 group-hover:text-[#f2ca50] transition-colors" />
                    </a>
                  ) : (
                    <div key={j} className="flex justify-between items-center group cursor-pointer">
                      <div className="flex gap-4 items-center">
                        <ShieldCheck size={20} className="text-[#f2ca50]" />
                        <div>
                          <h4 className="font-sans text-sm font-medium group-hover:text-[#f2ca50] transition-colors">{item.name}</h4>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-600">{item.size}</span>
                        </div>
                      </div>
                    </div>
                  )
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
