import React from 'react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl mb-12 tracking-tight">Политика конфиденциальности</h1>
        
        <div className="space-y-12 text-zinc-400 leading-relaxed font-light">
          <section>
            <h2 className="text-[#f2ca50] font-display text-xl mb-4 uppercase tracking-widest">1. Общие положения</h2>
            <p>
              Ваша конфиденциальность имеет первостепенное значение для ZEMAIR. Настоящая Политика описывает, как мы собираем, используем и защищаем вашу информацию при использовании наших устройств и веб-сайта.
            </p>
          </section>

          <section>
            <h2 className="text-[#f2ca50] font-display text-xl mb-4 uppercase tracking-widest">2. Сбор данных о качестве воздуха</h2>
            <p>
              Наши устройства собирают данные о концентрации твердых частиц (PM2.5), уровне CO2 и влажности исключительно для обеспечения работы автоматических режимов очистки. Эти данные обезличены и используются для улучшения алгоритмов фильтрации.
            </p>
          </section>

          <section>
            <h2 className="text-[#f2ca50] font-display text-xl mb-4 uppercase tracking-widest">3. Личная информация</h2>
            <p>
              Мы запрашиваем ваше имя и адрес электронной почты только при оформлении запроса на интеграцию или покупку. Мы никогда не передаем эти данные третьим лицам без вашего прямого согласия.
            </p>
          </section>

          <section>
            <h2 className="text-[#f2ca50] font-display text-xl mb-4 uppercase tracking-widest">4. Безопасность</h2>
            <p>
              ZEMAIR использует современные методы шифрования для защиты связи между вашим устройством и облачными сервисами мониторинга.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-900 text-xs text-zinc-600 uppercase tracking-widest">
          Последнее обновление: Май 2024
        </div>
      </div>
    </div>
  );
}
