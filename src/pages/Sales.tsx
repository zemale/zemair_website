import React from 'react';
import { ShoppingBag, Building2, Store, Truck } from 'lucide-react';

export default function Sales() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-8">Продажи и сотрудничество</h1>
          <p className="text-zinc-500 max-w-3xl text-xl font-light leading-relaxed">
            Мы работаем с ведущими архитектурными бюро и дизайнерскими студиями по всему миру. Получите коммерческое предложение для вашего объекта.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-[#1f1b13] p-16 border border-zinc-800/10 flex flex-col justify-between aspect-square">
            <div>
              <Building2 className="text-[#f2ca50] mb-10" size={48} strokeWidth={1} />
              <h2 className="font-display text-3xl mb-6">Для девелоперов</h2>
              <p className="text-zinc-400 text-lg mb-10 font-light">Специальные условия для оснащения жилых комплексов премиум-класса централизованными и локальными системами ZEMAIR.</p>
            </div>
            <button className="bg-[#f2ca50] text-[#16130b] w-full py-6 font-display text-[10px] font-bold uppercase tracking-[0.3em]">Получить B2B прайс</button>
          </div>

          <div className="bg-[#1f1b13] p-16 border border-zinc-800/10 flex flex-col justify-between aspect-square">
            <div>
              <Store className="text-[#f2ca50] mb-10" size={48} strokeWidth={1} />
              <h2 className="font-display text-3xl mb-6">Дилерская сеть</h2>
              <p className="text-zinc-400 text-lg mb-10 font-light">Станьте официальным представителем ZEMAIR в вашем регионе. Мы предлагаем эксклюзив по локации и маркетинговую поддержку.</p>
            </div>
            <button className="border border-[#f2ca50] text-[#f2ca50] w-full py-6 font-display text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#f2ca50] hover:text-[#16130b] transition-all">Заявка на партнерство</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-900 pt-20">
          {[
            { icon: <Truck size={24} />, title: "Логистика", desc: "Бережная доставка в любую точку мира в специализированной защитной упаковке." },
            { icon: <ShoppingBag size={24} />, title: "Tax Free", desc: "Поддержка международных систем возврата налога для частных клиентов." },
            { icon: <Building2 size={24} />, title: "Монтаж", desc: "Шеф-монтаж и обучение ваших специалистов установке систем ZEMAIR." }
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-zinc-600 mb-6 flex justify-center md:justify-start">{item.icon}</div>
              <h4 className="font-display text-sm uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
