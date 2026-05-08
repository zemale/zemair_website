import React from 'react';
import { FileText, Download, ShieldCheck, Video } from 'lucide-react';

export default function Manuals() {
  const guides = [
    { name: "Руководство по установке Monolith", size: "12.4 MB", type: "PDF", path: "/docs/installation-guide.pdf" },
    { name: "Инструкция по замене HEPA фильтров", size: "2.1 MB", type: "PDF", path: "/docs/filter-replacement-guide.pdf" },
    { name: "Настройка Smart Sync и Matter", size: "1.8 MB", type: "PDF", path: "/docs/smart-home-guide.pdf" },
    { name: "Уход за металлическими поверхностями", size: "3.5 MB", type: "PDF", path: "/docs/cmf-care-guide.pdf" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl mb-12 tracking-tight">Руководства и база знаний</h1>
        <p className="text-zinc-500 text-xl mb-16 font-light leading-relaxed">
          Всё, что вам нужно знать об эксплуатации и обслуживании архитектурных систем ZEMAIR. От первого запуска до тонкой настройки климата.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#1f1b13] p-10 border border-zinc-800/20">
             <Video className="text-[#f2ca50] mb-6" size={32} />
             <h3 className="font-display text-xl mb-4 uppercase tracking-widest">Видео-инструкции</h3>
             <p className="text-zinc-500 text-sm mb-6">Визуальный гид по интеграции систем ZEMAIR в современные интерьеры.</p>
             <button className="text-[10px] uppercase tracking-widest text-[#f2ca50] border-b border-[#f2ca50] pb-1">Смотреть в 4K</button>
          </div>
          <div className="bg-[#1f1b13] p-10 border border-zinc-800/20">
             <ShieldCheck className="text-[#f2ca50] mb-6" size={32} />
             <h3 className="font-display text-xl mb-4 uppercase tracking-widest">Сертификаты</h3>
             <p className="text-zinc-500 text-sm mb-6">Официальные отчеты лабораторий об эффективности фильтрации вирусов.</p>
             <button className="text-[10px] uppercase tracking-widest text-[#f2ca50] border-b border-[#f2ca50] pb-1">Скачать ZIP</button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-2xl mb-8 opacity-80 uppercase tracking-widest">PDF Документы</h2>
          {guides.map((guide, idx) => (
            <a 
              key={idx} 
              href={guide.path} 
              download 
              className="flex justify-between items-center py-6 border-b border-zinc-900 group cursor-pointer hover:px-4 transition-all"
            >
              <div className="flex items-center gap-6">
                <FileText className="text-zinc-600 group-hover:text-[#f2ca50] transition-colors" size={24} />
                <div>
                  <h4 className="font-display text-lg tracking-wide">{guide.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600">{guide.size} • {guide.type}</span>
                </div>
              </div>
              <Download size={20} className="text-zinc-800 group-hover:text-[#f2ca50] transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
