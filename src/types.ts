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
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/', path: '/' },
  { name: 'Каталог', href: '/catalog', path: '/catalog' },
  { name: 'Технологии', href: '/technology', path: '/technology' },
  { name: 'Качество воздуха', href: '/air-quality', path: '/air-quality' },
  { name: 'Устойчивое развитие', href: '/sustainability', path: '/sustainability' },
  { name: 'Поддержка', href: '/support', path: '/support' },
];

export const catalogItems: CatalogItem[] = [
  { 
    id: 'satin-brass',
    title: 'Satin Brass', 
    subtitle: 'Satin Brass Edition', 
    color: 'bg-[#B5A642]', 
    led: 'bg-white/40', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlncURxnYVLdD_TiuNMSKua80ZuXdukVECbXZRbNWHG-2Mfax1ZobWz14P6LlB1S3PuoXrx00-7UCkQqaGgsSfPUjHUzzoCRbMsJ609Tx_i9Ozcn5xezSSSx7Pwu-XNL9ej8fceyImcQ_Pnhbxcuw13wNR5elxa56BgQDRBptPV8WFk6b6OZa08vCyr68gLnBKTw9YkzWLRsvMDf849D9WQ71BvNAnYeYausYgl4D1vcs46BbCtMduNJhScV9rOYFokHMDRdVH-cs',
    description: 'Изысканная латунь с сатиновой шлифовкой. Сочетание классической роскоши и современных технологий очистки воздуха.',
    features: ['Премиальная отделка', 'Ручная шлифовка', 'H13 HEPA фильтрация'],
    specs: {
      'Материал': 'Архитектурная латунь',
      'Очистка': 'HEPA H13 + Угольный фильтр',
      'Шум': 'от 18 дБ',
      'Размеры': '120см x 40см x 8см'
    }
  },
  { 
    id: 'white-gold',
    title: 'White Gold', 
    subtitle: 'White Gold Finish', 
    color: 'bg-[#F5F1E6]', 
    led: 'bg-[#f2ca50]/40', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbZqBwcMgOAY-CyTwS0XQF2zXSq08cSAgXlXfGSXRo_XoX8tqGZDvzHZb7-1Xrab4YieNDpJaIbx8Ski82eJCCESIJQBhgdO6_KbpuFVtuem0TfeRFGg_p6xTZ8_bBiudfPT-5fiejBMNf5rOZ5TVbkJyIcc6iUVOl3jbhpQnHcxUS6GgfVYXi0KK4b5fbTqGA3JF8PDmCJCXdB5518e0bdPU8vdOjY_d1dhX0vdITYSeJ5ov7EYZCqxdcRBkSo3aiadXntC14ghE',
    description: 'Белое золото — выбор для светлых, воздушных интерьеров. Деликатный оттенок, который меняется в зависимости от освещения.',
    features: ['Жемчужный отблеск', 'Умная LED индикация', 'Адаптивный режим'],
    specs: {
      'Материал': 'Анодированный алюминий с напылением',
      'Очистка': 'HEPA H13',
      'Шум': 'от 18 дБ'
    }
  },
  { 
    id: 'matte-black',
    title: 'Matte Black', 
    subtitle: 'Matte Black Anodized', 
    color: 'bg-[#1A1A1B]', 
    led: 'bg-[#007AFF]/60', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqVFHHPLQbQnh_w26nsfr3wVGJvjh7Nt0y6qmC2ZERHOVdFaGc8INK60zqM6ACKVuT_KlEDhSBXCuYD-GadUvMCNkYtY-L-8JozbZ6JVxsJaHI93IDZZrfw-Ya06R1Gj-yJXU3kGbDqWBJYbLT-AvO8biTZkNhxoQOboZTAU_tfzE284nDUKujGH_Jm0qxcPyUdvHpOT9QJSTf3IYd-aFlpWS8i5HIFkietPEn2iC4nVG8EZDcimTg7Zmb_dpPWYojd3zpTvwlTA',
    description: 'Матовый черный — воплощение технологического минимализма. Скрытая мощь в безупречном корпусе.',
    features: ['Глубокий матовый финиш', 'Smart Sync технология', 'Бесшумный ночной режим']
  },
  { 
    id: 'metallic-grey',
    title: 'Metallic Grey', 
    subtitle: 'Architectural Silver', 
    color: 'bg-[#8E8E93]', 
    led: 'bg-white/60', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm4NKCErNPS1fCM3kSP3FUnyeghGPyM4mXbXOkFyp-KiSgs0AhFAgIOCgDJv2XL3Bfkqe1vng3t_-GVkDTnVKQ_FJ0S3A6GjkmIP-Dgz_9mJjQWG8fPn2Glq1zlv6p1gC0OvpOKfrhTo11MPntDjuzg3JSLMn5aKIAHl2jwCrJkvtJoKNAT_aqayYJLEhGwLMsulDjrpZFj8u0PmTgUzdz6rUu-i0R-kd4VVSVYXfhVSeWdQ2IMfgY2RN2XOzJzKIWDSJg5AJghvk' 
  },
  { 
    id: 'pure-white',
    title: 'Pure White', 
    subtitle: 'Pure Gallery White', 
    color: 'bg-[#FAFAFA]', 
    led: 'bg-[#f2ca50]/40', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDUe7OV6_wkNWV9MS-_5JIaiQvyOMyVjTJtZEVGyNXqzEhKZ4ek1HO-rIJFjLvpy7eIve1utelsO5bgMCA7YNLPKsR0hjWQLZ23jNPsc3rVrr4bMDZexQwD_ihRg9XqXVipj2n9mQdZF5iQcfH-6e8vZDagM0kpKtjvFI-stAktaMerGakra5myXq9jlOM0Nj4a53JDeAp19t0TYpcORYjkZZOQ7xETn4NLf4KVr8r0La1W8dxWq-nqVkD5d-m0R7xPeDTtXkU_Yc' 
  },
];
