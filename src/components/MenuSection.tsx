import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../data';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuSectionProps {
  onSelectItem?: (id: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('SIGNATURES');

  const filteredItems = activeCategory === 'SIGNATURES' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="w-full bg-transparent text-white py-16 px-4 md:px-12 border-b border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Title Bar */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b-2 border-white pb-6 mb-8"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
            Explore Our Menu
          </h2>
          <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            /2025
          </span>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-6 mb-8 no-scrollbar scroll-smooth"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-white text-black border-white shadow-md'
                  : 'bg-white/10 backdrop-blur-md text-white border-white/30 hover:border-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              key={item.id}
              onClick={() => onSelectItem?.(item.id)}
              className="group border border-white/20 bg-white/5 backdrop-blur-xl rounded-xl p-4 md:p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:shadow-xl hover:shadow-white/5 active:scale-95 cursor-pointer"
            >
              {/* Product Glass / Image Container */}
              <div className="w-full aspect-[4/5] rounded-lg bg-white/5 border border-white/10 overflow-hidden mb-5 flex items-center justify-center p-4 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500 filter brightness-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-black tracking-wide uppercase text-white mb-2">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 min-h-[40px]">
                {item.description}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white/90 border-t border-white/10 pt-3 w-full">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <span>
                  {item.rating}/5 | {item.reviewsCount.toLocaleString()} Reviews
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
