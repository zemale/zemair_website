export interface NavLink {
  name: string;
  href: string;
  path: string;
}

export interface CatalogItem {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  led: string;
  img: string | null;
  description?: string;
  features?: string[];
  specs?: Record<string, string>;
  price?: number;
  category?: 'breezer' | 'filter' | 'accessory';
  variant?: 'black' | 'gold' | 'white' | 'champagne' | 'copper' | 'silver';
  series?: 'Monolith' | 'Compact';
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/', path: '/' },
  { name: 'Философия', href: '/philosophy', path: '/philosophy' },
  { name: 'Каталог', href: '/catalog', path: '/catalog' },
  { name: 'Монтаж', href: '/installation', path: '/installation' },
  { name: 'Интеллект', href: '/intelligence', path: '/intelligence' },
  { name: 'Технологии', href: '/technology', path: '/technology' },
  { name: 'Поддержка', href: '/support', path: '/support' },
];

export const catalogItems: CatalogItem[] = [
  { 
    id: 'satin-brass',
    title: 'Satin Brass', 
    subtitle: 'Satin Brass Edition', 
    color: 'bg-[#B5A642]', 
    led: 'bg-white/40', 
    img: '/assets/brass_gold_monolith_render_1779041650875.png',
    description: 'Изысканная латунь с сатиновой шлифовкой. Сочетание классической роскоши и современных технологий очистки воздуха.',
    features: ['Премиальная отделка', 'Ручная шлифовка', 'H13 HEPA фильтрация'],
    specs: {
      'Материал': 'Архитектурная латунь',
      'Очистка': 'HEPA H13 + Угольный фильтр',
      'Шум': 'от 18 дБ',
      'Размеры': '120см x 40см x 8см'
    },
    price: 320000,
    category: 'breezer',
    variant: 'gold',
    series: 'Monolith'
  },
  { 
    id: 'white-gold',
    title: 'White Gold', 
    subtitle: 'White Gold Finish', 
    color: 'bg-[#F5F1E6]', 
    led: 'bg-[#f2ca50]/40', 
    img: '/assets/champagne_gold_monolith_render_1779041667292.png',
    description: 'Белое золото — выбор для светлых, воздушных интерьеров. Деликатный оттенок, который меняется в зависимости от освещения.',
    features: ['Жемчужный отблеск', 'Умная LED индикация', 'Адаптивный режим'],
    specs: {
      'Материал': 'Анодированный алюминий с напылением',
      'Очистка': 'HEPA H13',
      'Шум': 'от 18 дБ',
      'Размеры': '1200 x 400 x 80 мм'
    },
    price: 280000,
    category: 'breezer',
    variant: 'champagne',
    series: 'Monolith'
  },
  { 
    id: 'matte-black',
    title: 'Matte Black', 
    subtitle: 'Matte Black Anodized', 
    color: 'bg-[#1A1A1B]', 
    led: 'bg-[#007AFF]/60', 
    img: '/assets/matte_black_monolith_render_1779041630864.png',
    description: 'Матовый черный — воплощение технологического минимализма. Скрытая мощь в безупречном корпусе.',
    features: ['Глубокий матовый финиш', 'Smart Sync технология', 'Бесшумный ночной режим'],
    specs: {
      'Материал': 'Анодированный алюминий',
      'Очистка': 'HEPA H13 + Carbon',
      'Размеры': '1200 x 400 x 80 мм'
    },
    price: 240000,
    category: 'breezer',
    variant: 'black',
    series: 'Monolith'
  },
  { 
    id: 'metallic-grey',
    title: 'Metallic Grey', 
    subtitle: 'Architectural Silver', 
    color: 'bg-[#8E8E93]', 
    led: 'bg-white/60', 
    img: '/assets/metallic_silver_monolith_render_1779042256485.png',
    specs: {
      'Размеры': '1200 x 400 x 80 мм'
    },
    price: 220000,
    category: 'breezer',
    variant: 'silver',
    series: 'Monolith'
  },
  { 
    id: 'pure-white',
    title: 'Pure White', 
    subtitle: 'Pure Gallery White', 
    color: 'bg-[#FAFAFA]', 
    led: 'bg-[#f2ca50]/40', 
    img: '/assets/pure_white_monolith_render_1779041682758.png',
    specs: {
      'Размеры': '1200 x 400 x 80 мм'
    },
    price: 200000,
    category: 'breezer',
    variant: 'white',
    series: 'Monolith'
  },
  { 
    id: 'brushed-copper',
    title: 'Brushed Copper', 
    subtitle: 'Copper Limited Edition', 
    color: 'bg-[#B87333]', 
    led: 'bg-[#ff7700]/60', 
    img: '/assets/rose_gold_copper_monolith_render_1779042223317.png',
    description: 'Теплый оттенок меди с глубокой горизонтальной шлифовкой. Ограниченная серия для интерьеров с характером.',
    features: ['Натуральная медь', 'Антибактериальная поверхность', 'Уникальный рисунок шлифовки'],
    specs: {
      'Материал': 'Медь M1',
      'Очистка': 'HEPA H13 + Carbon',
      'Шум': 'от 18 дБ',
      'Размеры': '1200 x 400 x 80 мм'
    },
    price: 350000,
    category: 'breezer',
    variant: 'copper',
    series: 'Monolith'
  },
  { 
    id: 'compact-black',
    title: 'Compact Black', 
    subtitle: 'City Loft Series', 
    color: 'bg-[#1A1A1B]', 
    led: 'bg-[#007AFF]/60', 
    img: '/assets/compact_black_premium_1779645909564.png',
    description: 'Бескомпромиссный архитектурный минимализм в компактном исполнении. Глубокий анодированный металл и скрытая технологическая безупречность.',
    features: ['Компактный масштаб', 'Бесшумное дыхание', 'Система интеллектуального климат-контроля'],
    specs: {
      'Габариты': '400 x 260 x 132 мм',
      'Материал': 'Анодированный алюминий',
      'Очистка': 'HEPA H13 + Carbon',
      'Воздухообмен': 'до 120 м³/ч'
    },
    price: 160000,
    category: 'breezer',
    variant: 'black',
    series: 'Compact'
  },
  { 
    id: 'compact-white',
    title: 'Compact White', 
    subtitle: 'Minimalist Series', 
    color: 'bg-[#FAFAFA]', 
    led: 'bg-[#f2ca50]/40', 
    img: '/assets/compact_white_premium_1779645929566.png',
    description: 'Чистота архитектурного жеста и деликатность матовых поверхностей. Идеальное слияние с безупречным галерейным пространством.',
    features: ['Малый габарит', 'Медицинский стандарт очистки', 'Интеллектуальный подогрев'],
    specs: {
      'Габариты': '400 x 260 x 132 мм',
      'Материал': 'Анодированный алюминий в матовой эмали',
      'Очистка': 'HEPA H13 + Carbon',
      'Воздухообмен': 'до 120 м³/ч'
    },
    price: 140000,
    category: 'breezer',
    variant: 'white',
    series: 'Compact'
  },
  { 
    id: 'compact-silver',
    title: 'Compact Silver', 
    subtitle: 'Tech Grey Series', 
    color: 'bg-[#8E8E93]', 
    led: 'bg-white/60', 
    img: '/assets/compact_silver_premium_1779645947147.png',
    description: 'Индустриальное изящество авиационного алюминия. Тончайшая шлифовка граней подчеркивает суверенность геометрических линий.',
    features: ['Авиационный алюминиевый моноблок', 'Управление через приложение', 'Стильный лазерный LED-индикатор'],
    specs: {
      'Габариты': '400 x 260 x 132 мм',
      'Материал': 'Шлифованный авиационный алюминий',
      'Очистка': 'HEPA H13 + Carbon',
      'Воздухообмен': 'до 120 м³/ч'
    },
    price: 150000,
    category: 'breezer',
    variant: 'silver',
    series: 'Compact'
  },
  { 
    id: 'compact-gold',
    title: 'Compact Satin Brass', 
    subtitle: 'Satin Brass Edition', 
    color: 'bg-[#B5A642]', 
    led: 'bg-white/40', 
    img: '/assets/compact_gold_premium_1779645965169.png',
    description: 'Подлинная архитектурная латунь художественной шлифовки для изысканного интерьерного ансамбля. Синергия вечной классики и чистого воздуха.',
    features: ['Отделка премиальной латунью', 'Ручная доводка шлифовки', 'Интеллектуальный клима-контроль'],
    specs: {
      'Габариты': '400 x 260 x 132 мм',
      'Материал': 'Архитектурная шлифованная латунь',
      'Очистка': 'HEPA H13 + Carbon',
      'Воздухообмен': 'до 120 м³/ч'
    },
    price: 210000,
    category: 'breezer',
    variant: 'gold',
    series: 'Compact'
  },
  {
    id: 'filter-set-h13',
    title: 'Комплект фильтров H13',
    subtitle: 'HEPA H13 + Carbon Active',
    color: 'bg-zinc-800',
    led: 'bg-white/20',
    img: '/assets/filter_set_h13_1779646621670.png',
    description: 'Двухступенчатый сменный блок сверхглубокой очистки. Бескомпромиссная связка пыльцевого барьера HEPA H13 медицинского стандарта и плотного сотового угля Carbon Active для поглощения смол, запахов и газов.',
    price: 12000,
    category: 'filter'
  },
  {
    id: 'smart-sensor-co2',
    title: 'Smart Sensor Pro',
    subtitle: 'PM2.5 / CO2 / TVOC / RH',
    color: 'bg-zinc-900',
    led: 'bg-[#50f2ca]/60',
    img: '/assets/smart_sensor_pro_1779646644832.png',
    description: 'Прецизионный беспроводной анализатор климата в монолитном корпусе из темного анодированного сплава. Измеряет уровень углекислого газа, ультрадисперсных частиц PM2.5, летучих органических соединений и влажности с мгновенным обменом данными по протоколу ZEMAIR Link.',
    price: 18000,
    category: 'accessory'
  }
];
