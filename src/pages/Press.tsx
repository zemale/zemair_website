import React from 'react';
import { Download, Image as ImageIcon, FileText, Share2 } from 'lucide-react';

export default function Press() {
  const assets = [
    { title: "Логотипы ZEMAIR", desc: "SVG/PNG (Черный, Золотой, Белый)", icon: <Share2 size={20} /> },
    { title: "Рендеры продукции", size: "450 MB", desc: "Hi-Res Collection 2024", icon: <ImageIcon size={20} /> },
    { title: "Пресс-релизы", size: "2 MB", desc: "PDF/DOCX", icon: <FileText size={20} /> },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-8">Пресс-кит</h1>
          <p className="text-zinc-500 max-w-2xl text-xl font-light leading-relaxed">
            Материалы для медиа, издательств и авторов. Мы открыты к интервью и готовы предоставить образцы для профессиональных фотосессий.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {assets.map((asset, i) => (
            <div key={i} className="bg-[#1f1b13] p-10 border border-zinc-800/10 group cursor-pointer hover:border-[#f2ca50]/30 transition-colors">
              <div className="text-[#f2ca50] mb-8 opacity-60 group-hover:opacity-100 transition-opacity">{asset.icon}</div>
              <h3 className="font-display text-2xl mb-2 tracking-wide">{asset.title}</h3>
              <p className="text-zinc-500 text-sm mb-10">{asset.desc} {asset.size && `• ${asset.size}`}</p>
              <button className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#f2ca50] font-bold">
                 <Download size={14} /> Скачать пакет
              </button>
            </div>
          ))}
        </div>

        <section className="bg-[#110e07] p-12 md:p-24 border border-zinc-800/50">
          <div className="max-w-3xl">
             <h2 className="font-display text-4xl mb-8 uppercase tracking-tight">Контакты для прессы</h2>
             <p className="text-zinc-400 text-lg mb-10 font-light">Для запросов на интервью с основателями или техническим директором, а также для получения аккредитации на закрытые презентации в шоуруме.</p>
             <div className="flex flex-col gap-2">
                <span className="font-display text-3xl text-[#f2ca50]">press@zemair.com</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mt-2">Отвечаем в течение 24 часов</span>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
