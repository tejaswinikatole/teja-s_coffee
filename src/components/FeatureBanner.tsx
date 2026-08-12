import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureBannerProps {
  onActionClick: () => void;
}

export const FeatureBanner: React.FC<FeatureBannerProps> = ({ onActionClick }) => {
  return (
    <section className="w-full bg-transparent text-white border-b border-white/20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Card Container */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/20 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative bg-transparent">
          {/* Top image visual representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="w-full aspect-[4/3] rounded-xl border border-white/20 overflow-hidden mb-8 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000"
              alt="Cold Brew Speciality"
              className="w-full h-full object-cover filter brightness-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="flex flex-col items-start gap-6">
            <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white">
              Experience the best coffee, crafted with passion, freshness, and unforgettable flavor.
            </p>

            <button
              onClick={onActionClick}
              id="btn-feature-get-stated"
              className="flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-white bg-white text-black font-bold text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>Get Stated</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Typography Statement Container */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 bg-transparent flex flex-col justify-center items-start border-white/20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-1 sm:space-y-2 uppercase font-black text-white tracking-tight select-none"
          >
            {[
              "USE",
              "THE BEST COFFEE",
              "PREMIUM ARABICA",
              "FRESH BEANS AND FRESHLY",
              "GROUND SPICES TO UNDENIABLY",
              "FLAVOURS COFFEE",
              "MECA"
            ].map((text, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`leading-none ${
                  i === 0 ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl" :
                  i === 1 ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl" :
                  i === 2 ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white/90" :
                  i === 3 ? "text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white/85" :
                  i === 4 ? "text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80" :
                  i === 5 ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white/90" :
                  "text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white"
                }`}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
