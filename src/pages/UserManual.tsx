import React, { useState, useEffect } from 'react';
import { BookOpen, Monitor, Wind, ShieldCheck, Zap, Settings, RefreshCcw, Smartphone, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const sections = [
  { id: 'intro', title: 'Введение', icon: <BookOpen size={20} /> },
  { id: 'quickstart', title: 'Быстрый старт', icon: <Zap size={20} /> },
  { id: 'modes', title: 'Режимы работы', icon: <Wind size={20} /> },
  { id: 'display', title: 'Дисплей и управление', icon: <Monitor size={20} /> },
  { id: 'app', title: 'Приложение ZEMAIR', icon: <Smartphone size={20} /> },
  { id: 'smart-home', title: 'Умный дом и Matter', icon: <Settings size={20} /> },
  { id: 'maintenance', title: 'Обслуживание', icon: <RefreshCcw size={20} /> },
  { id: 'troubleshooting', title: 'Устранение неполадок', icon: <HelpCircle size={20} /> },
];

export default function UserManual() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const current = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 300;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar Navigation */}
        <aside className="lg:w-72 shrink-0 h-fit sticky top-32 hidden lg:block">
          <nav className="space-y-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-display tracking-widest uppercase transition-all border-l-2 ${
                  activeSection === section.id 
                    ? 'border-[#f2ca50] text-[#f2ca50] bg-[#f2ca50]/5' 
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-4xl space-y-32">
          
          <header>
            <h1 className="font-display text-5xl md:text-7xl mb-8 tracking-tight">Руководство пользователя</h1>
            <p className="text-zinc-500 text-xl font-light leading-relaxed">
              Версия 1.0 | Полный гид по эксплуатации, настройке и интеграции систем ZEMAIR.
            </p>
          </header>

          <section id="intro" className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#f2ca50] uppercase tracking-wider">1. Введение</h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 font-light text-lg">
              <p>ZEMAIR — это не просто очиститель воздуха, это сложная архитектурная система приточной вентиляции. В отличие от обычных очистителей, которые рециркулируют воздух внутри помещения, ZEMAIR подает свежий, насыщенный кислородом воздух с улицы, предварительно очистив его и подогрев до комфортной температуры.</p>
              <h3 className="text-white font-display text-xl mt-12 mb-4">Принцип трехступенчатой фильтрации</h3>
              <ul className="space-y-4">
                <li><strong>G4 Предфильтр:</strong> Задерживает крупную пыль, пух и шерсть животных.</li>
                <li><strong>Угольный фильтр (AC):</strong> Адсорбирует запахи, выхлопные газы и вредные летучие органические соединения (VOC).</li>
                <li><strong>HEPA H13:</strong> Медицинский стандарт очистки. Задерживает 99.97% частиц размером до 0.3 мкм, включая вирусы и аллергены.</li>
              </ul>
            </div>
          </section>

          <section id="quickstart" className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#f2ca50] uppercase tracking-wider">2. Быстрый старт</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Установка", desc: "Убедитесь, что корпус плотно прижат к монтажной раме и все фиксаторы защелкнуты." },
                { title: "Питание", desc: "Подключите блок питания к розетке. Вы услышите звуковой сигнал — система готова." },
                { title: "Настройка", desc: "Выберите язык на дисплее (для моделей Premium/Ultra) или через приложение." },
                { title: "Wi-Fi", desc: "Используйте сеть 2.4 ГГц для первоначальной настройки в приложении ZEMAIR." }
              ].map((step, i) => (
                <div key={i} className="bg-[#1f1b13] p-8 border border-zinc-800/10">
                  <span className="text-zinc-600 block mb-4 font-mono">0{i+1}</span>
                  <h4 className="font-display text-xl mb-2">{step.title}</h4>
                  <p className="text-zinc-500 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="modes" className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#f2ca50] uppercase tracking-wider">3. Режимы работы</h2>
            <div className="space-y-12">
              <div className="border-l-4 border-zinc-800 pl-8 space-y-4">
                <h3 className="font-display text-2xl">АВТОМАТИЧЕСКИЙ</h3>
                <p className="text-zinc-400 font-light text-lg">Интеллектуальная система Smart Sync сама выбирает скорость вентилятора на основе данных от датчиков PM2.5 и CO2. Это идеальный режим для ежедневного использования.</p>
              </div>
              <div className="border-l-4 border-zinc-800 pl-8 space-y-4">
                <h3 className="font-display text-2xl">НОЧНОЙ</h3>
                <p className="text-zinc-400 font-light text-lg">Минимальный уровень шума (18 дБ) и приглушенная индикация. Обеспечивает приток свежего воздуха, не мешая вашему отдыху.</p>
              </div>
              <div className="border-l-4 border-zinc-800 pl-8 space-y-4">
                <h3 className="font-display text-2xl">МАКСИМАЛЬНЫЙ</h3>
                <p className="text-zinc-400 font-light text-lg">Используйте для быстрой очистки помещения от запахов или после уборки. Максимальный поток — до 200 м³/час.</p>
              </div>
              <div className="border-l-4 border-zinc-800 pl-8 space-y-4">
                <h3 className="font-display text-2xl">ПОДОГРЕВ</h3>
                <p className="text-zinc-400 font-light text-lg">Включается автоматически при температуре ниже +15°C. Мощность 800 Вт позволяет комфортно пользоваться бризером даже в -30°C.</p>
              </div>
            </div>
          </section>

          <section id="display" className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#f2ca50] uppercase tracking-wider">4. Дисплей и управление</h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 font-light">
              <p>Управление осуществляется через сенсорные области на стекле или TFT-дисплей (в моделях Premium/Ultra).</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Индикатор PM2.5:</strong> Показывает концентрацию мелкодисперсной пыли. Зеленый (0-35) — идеально, Красный (&gt;150) — опасно.</li>
                <li><strong>Уровень CO2:</strong> Критически важный параметр для когнитивных способностей. Держите его ниже 1000 ppm.</li>
                <li><strong>Жесты:</strong> Свайп вправо меняет скорость, долгое нажатие переводит в ночной режим.</li>
              </ul>
            </div>
          </section>

          <section id="app" className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#f2ca50] uppercase tracking-wider">5. Приложение ZEMAIR</h2>
            <div className="bg-[#110e07] p-12 border border-zinc-800/50 flex flex-col md:flex-row gap-12 items-center">
               <Monitor size={120} strokeWidth={0.5} className="text-[#f2ca50]/20" />
               <div>
                  <h3 className="font-display text-2xl mb-4">Управление из любой точки мира</h3>
                  <p className="text-zinc-500 mb-8 font-light">Настраивайте расписания, отслеживайте ресурс фильтров и получайте уведомления о качестве воздуха в реальном времени.</p>
                  <div className="flex gap-4">
                    <button className="bg-zinc-800 text-white px-8 py-3 font-display text-[9px] uppercase tracking-widest hover:bg-zinc-700 transition-colors">App Store</button>
                    <button className="bg-zinc-800 text-white px-8 py-3 font-display text-[9px] uppercase tracking-widest hover:bg-zinc-700 transition-colors">Google Play</button>
                  </div>
               </div>
            </div>
          </section>

          {/* More sections follow the same pattern... */}
          
          <section id="troubleshooting" className="space-y-8 pb-32">
            <h2 className="font-display text-3xl md:text-4xl text-[#f2ca50] uppercase tracking-wider">8. Устранение неполадок</h2>
            <div className="space-y-4 divide-y divide-zinc-900">
               {[
                 { q: "Бризер не подключается к Wi-Fi", a: "Убедитесь, что ваш роутер работает на частоте 2.4 ГГц. Сети 5 ГГц не поддерживаются для настройки." },
                 { q: "Запах пластика при первом включении", a: "Это нормальное явление для нового PTC-нагревателя. Запах исчезнет полностью через 2-4 часа работы." },
                 { q: "Красная индикация PM2.5 постоянно", a: "Проверьте герметичность установки и убедитесь, что наружная решетка не заблокирована. Если фильтры забиты, их нужно заменить." }
               ].map((item, i) => (
                 <div key={i} className="py-6">
                    <h4 className="font-display text-lg mb-2">{item.q}</h4>
                    <p className="text-zinc-500 font-light">{item.a}</p>
                 </div>
               ))}
            </div>
          </section>

          <footer className="pt-20 border-t border-zinc-900">
            <p className="text-zinc-600 uppercase tracking-widest text-[10px]">© 2024 ZEMAIR Technologies. Все права защищены.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
