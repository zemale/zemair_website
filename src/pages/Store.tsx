import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Filter, ChevronRight, Check } from 'lucide-react';
import { catalogItems, CatalogItem } from '../types';
import { BreezerInterior } from '../components/BreezerInterior';

const categories = [
  { id: 'all', name: 'Все товары' },
  { id: 'breezer', name: 'Бризеры' },
  { id: 'filter', name: 'Фильтры' },
  { id: 'accessory', name: 'Аксессуары' },
];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<CatalogItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredItems = catalogItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const addToCart = (item: CatalogItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: string) => {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#16130b]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-4 uppercase">
                ZEMAIR <span className="text-[#f2ca50]">Boutique</span>
              </h1>
              <p className="text-zinc-500 font-display text-xs uppercase tracking-[0.4em]">Архитектура комфорта. Прямой заказ.</p>
            </div>
            
            <button 
              onClick={() => setShowCart(true)}
              className="relative p-2 text-[#f2ca50] hover:scale-110 transition-transform cursor-pointer"
            >
              <ShoppingBag size={32} strokeWidth={1} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#16130b] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex flex-wrap gap-8 border-b border-zinc-900 pb-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-display text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  activeCategory === cat.id ? 'text-[#f2ca50] border-b border-[#f2ca50] pb-2' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-[#1f1b13] overflow-hidden mb-6 border border-zinc-900 group-hover:border-[#f2ca50]/30 transition-colors">
                {item.category === 'breezer' ? (
                   <BreezerInterior 
                    image={item.img || ''} 
                    type={item.variant || 'black'}
                    title=""
                    subtitle=""
                    className="w-full h-full"
                  />
                ) : (
                  item.img ? (
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  ) : (
                    <div className={`w-full h-full ${item.color} opacity-40 flex items-center justify-center`}>
                      <span className="font-display text-4xl opacity-10">ZEMAIR</span>
                    </div>
                  )
                )}
                
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-[#f2ca50] text-[#16130b] py-4 font-display text-[10px] font-bold uppercase tracking-widest hover:bg-[#d4af37] transition-colors cursor-pointer"
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl mb-1 group-hover:text-[#f2ca50] transition-colors">{item.title}</h3>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest">{item.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-lg text-[#f2ca50]">{(item.price || 0).toLocaleString()} ₽</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#16130b] border-l border-zinc-900 z-[70] flex flex-col shadow-2xl"
            >
              <div className="p-8 border-b border-zinc-900 flex justify-between items-center">
                <h2 className="font-display text-2xl uppercase tracking-widest">Корзина</h2>
                <button onClick={() => setShowCart(false)} className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                    <ShoppingBag size={64} strokeWidth={0.5} className="mb-4 opacity-20" />
                    <p className="font-display text-xs uppercase tracking-widest">Ваша корзина пуста</p>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex gap-4">
                      <div className="w-20 h-20 bg-[#1f1b13] border border-zinc-900 overflow-hidden flex-shrink-0">
                        {item.img ? (
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className={`w-full h-full ${item.color} opacity-30`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-display text-sm uppercase tracking-wide">{item.title}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[10px] text-zinc-600 hover:text-red-500 transition-colors"
                          >
                            Удалить
                          </button>
                        </div>
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">{item.subtitle}</p>
                        <p className="text-[#f2ca50] font-display text-sm">{(item.price || 0).toLocaleString()} ₽</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t border-zinc-900 bg-[#1f1b13]/50">
                  <div className="flex justify-between items-end mb-8">
                    <span className="text-zinc-500 font-display text-[10px] uppercase tracking-widest">Итого:</span>
                    <span className="text-3xl font-display text-[#f2ca50]">{totalPrice.toLocaleString()} ₽</span>
                  </div>
                  
                  <a 
                    href={`mailto:air@zemair.ru?subject=Заказ из бутика ZEMAIR&body=Здравствуйте! Я хочу приобрести следующие товары:%0A%0A${cart.map(i => `- ${i.title} (${i.price} ₽)`).join('%0A')}%0A%0AИтоговая стоимость: ${totalPrice} ₽`}
                    className="flex items-center justify-center gap-3 w-full bg-[#f2ca50] text-[#16130b] py-6 font-display text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#d4af37] transition-all cursor-pointer"
                  >
                    ОФОРМИТЬ ЗАКАЗ
                    <Check size={14} />
                  </a>
                  <p className="mt-4 text-[9px] text-zinc-600 uppercase tracking-widest text-center">
                    Наш менеджер свяжется с вами для уточнения деталей доставки и установки.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
