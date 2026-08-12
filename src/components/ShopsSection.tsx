import React from 'react';
import { SHOPS } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ShopsSection: React.FC = () => {
  return (
    <section id="shops" className="w-full bg-transparent text-white py-16 px-4 md:px-12 border-b border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">
            Visit shops
          </h2>
        </motion.div>

        {/* Shop Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SHOPS.map((shop) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={shop.id}
              className="group flex flex-col items-start cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-[3/4] rounded-xl bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden mb-4 relative group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300">
                <img
                  src={shop.image}
                  alt={shop.title}
                  className="w-full h-full object-cover filter brightness-105 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Arrow Icon Circle Overlay for highlight shop */}
                {shop.isMain && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-7 h-7" />
                  </div>
                )}
              </div>

              {/* Title & Sub-location */}
              <h3 className="text-base font-bold tracking-wider uppercase text-white mb-1">
                {shop.title}
              </h3>
              <p className="text-xs text-white/70 font-normal">
                {shop.location}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
