import React from 'react';
import { HASHTAGS, MARQUEE_ITEMS } from '../data';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onActionClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onActionClick }) => {
  return (
    <section id="hero" className="w-full bg-transparent text-white pt-8 pb-12 px-4 md:px-12 flex flex-col items-center">
      {/* Hashtags Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-3 md:gap-8 mb-6 text-xs md:text-sm tracking-wider uppercase text-white/90"
      >
        {HASHTAGS.map((tag, index) => (
          <span key={index} className="hover:text-white transition-colors cursor-default">
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Main Banner Title: Coffee Break */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="w-full text-center my-2 md:my-4"
      >
        <h1 className="text-5xl sm:text-8xl lg:text-[130px] xl:text-[160px] font-black tracking-tighter uppercase leading-none text-white select-none">
          Coffee Break
        </h1>
      </motion.div>

      {/* Hero Content Grid: Left Description + Center Glass Visual */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
        {/* Left Side Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4 md:gap-6 pr-0 lg:pr-6 text-center lg:text-left"
        >
          <p className="text-sm md:text-base leading-relaxed text-white/90 font-normal max-w-sm lg:max-w-none">
            Teja's Coffee delivers freshly roasted beans crafted with rich flavors and sustainable sourcing. Each cup is designed to inspire warmth, energy, and connection.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-white/80 font-normal max-w-sm lg:max-w-none">
            We craft quality coffee daily, delivering perfect brews and stories of excellence.
          </p>
          <button
            onClick={onActionClick}
            id="btn-hero-get-stated"
            className="mt-1 group flex items-center gap-3 px-7 py-3 rounded-full border-2 border-white bg-white text-black font-bold text-sm tracking-wide hover:bg-black hover:text-white active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-white/10"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Center Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-center justify-center relative my-4"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-6 overflow-hidden group hover:border-white/50 hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-black/30">
            {/* Subtle monochrome accent grid inside container */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

            {/* Iced Coffee Graphic / Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center my-auto">
              <img
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=900"
                alt="Teja's Premium Iced Coffee"
                className="max-h-[380px] w-auto object-contain filter contrast-125 brightness-110 grayscale-0 hover:scale-105 transition-transform duration-500 rounded-xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* ESTD 1995 Circular Badge Seal */}
            <div className="relative z-10 -mt-6 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full p-3 flex flex-col items-center justify-center text-center shadow-2xl">
              <span className="text-[10px] tracking-widest font-bold uppercase text-white">ESTD 1995</span>
              <span className="text-[9px] tracking-wider font-extrabold text-white/90">PREMIUM QUALITY</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Ticker Bar */}
      <div className="w-full mt-10 py-4 border-y border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs md:text-sm font-bold tracking-widest uppercase text-white">
          {Array(4).fill(MARQUEE_ITEMS).flat().map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <Sparkles className="w-3.5 h-3.5 text-white inline-block mx-2" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
