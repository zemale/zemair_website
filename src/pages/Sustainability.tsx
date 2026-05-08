import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Recycle, Heart } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-8">Устойчивое развитие</h1>
          <p className="text-zinc-500 max-w-3xl mx-auto text-xl font-light">
            Мы верим, что истинная роскошь должна быть ответственной. ZEMAIR стремится к минимизации углеродного следа через долговечность, использование перерабатываемых материалов и высокую энергоэффективность.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: <Leaf size={40} className="text-[#f2ca50] mb-8" />, title: "Экологичные материалы", desc: "Мы используем алюминий, латунь и медь, которые подлежат бесконечной переработке без потери качества." },
            { icon: <Recycle size={40} className="text-[#f2ca50] mb-8" />, title: "Цикличная экономика", desc: "Программа возврата использованных фильтров обеспечивает их правильную утилизацию и переработку компонентов." },
            { icon: <Heart size={40} className="text-[#f2ca50] mb-8" />, title: "Долговечность", desc: "Дизайн вне времени и высочайшая ремонтопригодность означают, что ZEMAIR будет служить десятилетиями, а не годами." }
          ].map((item, i) => (
            <div key={i} className="bg-[#1f1b13] p-12 border border-zinc-800/10">
              {item.icon}
              <h3 className="font-display text-2xl mb-6 tracking-wide uppercase">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="relative h-[600px] overflow-hidden flex items-center justify-center">
            <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Hu5hUGdrFg__UPkuHArB1rhJS4W3SIbwv7p81jAUbdz2ifsaCgS3_wrM5jZjVLMvPLjhdJzedwkJjLgeK51t-DkH0IS9jvWNF4SDHYjnkuI52unnCm-3ooHCoxe9tJZXCUKoEqZRs9zV17gquoUFQynTCqvLZu8UD-OE2LDlB_hZoJx-LftcculVL6OX3mFsRaCTtvmbO8kXP1BOkziqDRzZWWvvICy7RerldKGvUGDk-IR_BdyVH1HfyyEpHSiJ4vNmeu_aiuA"
               alt="Nature Architecture"
               className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-[#16130b]/60"></div>
            <div className="relative z-10 text-center max-w-2xl px-6">
                <h2 className="font-display text-5xl mb-8 tracking-tight">Гармония с природой</h2>
                <p className="text-zinc-300 text-lg mb-10 font-light">
                    Наша цель — достичь полной углеродной нейтральности производства к 2030 году. Мы инвестируем в возобновляемые источники энергии и поддерживаем проекты по восстановлению лесов по всему миру.
                </p>
                <div className="w-16 h-[2px] bg-[#f2ca50] mx-auto"></div>
            </div>
        </section>
      </div>
    </div>
  );
}
