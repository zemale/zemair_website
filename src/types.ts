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
    img: '/src/assets/images/brass_gold_monolith_render_1779041650875.png',
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
    img: '/src/assets/images/champagne_gold_monolith_render_1779041667292.png',
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
    img: '/src/assets/images/matte_black_monolith_render_1779041630864.png',
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
    img: '/src/assets/images/metallic_silver_monolith_render_1779042256485.png',
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
    img: '/src/assets/images/pure_white_monolith_render_1779041682758.png',
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
    img: '/src/assets/images/rose_gold_copper_monolith_render_1779042223317.png',
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
    img: 'https://images.unsplash.com/photo-1558002038-103792e0975d?q=80&w=2000&auto=format&fit=crop',
    description: 'Компактное решение для спален и кабинетов. Мощная очистка в сдержанном габарите.',
    features: ['Компактный размер', 'Бесшумная работа', 'Система защиты от промерзания'],
    specs: {
      'Габариты': '400 x 260 x 132 мм',
      'Материал': 'Анодированный алюминий',
      'Очистка': 'HEPA H13',
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
    img: 'https://images.unsplash.com/photo-1616489953149-75abde6757d2?q=80&w=2000&auto=format&fit=crop',
    description: 'Чистота линий и воздуха. Идеально сливается с белыми стенами, обеспечивая приток свежего воздуха без сквозняков.',
    features: ['Малый габарит', 'Медицинский стандарт очистки', 'Интеллектуальный подогрев'],
    specs: {
      'Габариты': '400 x 260 x 132 мм',
      'Материал': 'Сталь с порошковым покрытием',
      'Очистка': 'HEPA H13',
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
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop',
    description: 'Индустриальный шик в компактном корпусе. Для современных офисов и технологичных жилых пространств.',
    features: ['Алюминиевый корпус', 'Управление через приложение', 'Стильный LED-индикатор'],
    specs: {
      'Габариты': '400 x 260 x 132 мм',
      'Материал': 'Шлифованный алюминий',
      'Очистка': 'HEPA H13',
      'Воздухообмен': 'до 120 м³/ч'
    },
    price: 150000,
    category: 'breezer',
    variant: 'silver',
    series: 'Compact'
  },
  {
    id: 'filter-set-h13',
    title: 'Комплект фильтров H13',
    subtitle: 'HEPA + Carbon',
    color: 'bg-zinc-800',
    led: 'bg-white/20',
    img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc53e?q=80&w=800&auto=format&fit=crop',
    description: 'Полный комплект для ежегодной замены. Включает HEPA H13 фильтр и угольный адсорбент.',
    price: 12000,
    category: 'filter'
  },
    {
    id: 'smart-sensor-co2',
    title: 'Smart Sensor Pro',
    subtitle: 'PM2.5 / CO2 / TVOC',
    color: 'bg-zinc-900',
    led: 'bg-[#00ffcc]/60',
    img: 'https://images.unsplash.com/photo-1558002038-103792e0975d?q=80&w=800&auto=format&fit=crop',
    description: 'Выносной датчик для максимально точного контроля качества воздуха в любой точке помещения.',
    price: 18000,
    category: 'accessory'
  }
];
