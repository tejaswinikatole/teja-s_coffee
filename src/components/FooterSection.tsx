import React from 'react';
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterSectionProps {
  onActionClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onActionClick }) => {
  return (
    <footer id="footer" className="w-full bg-transparent text-white pt-16 pb-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/20 pb-16">
          {/* Giant Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-[100px] xl:text-[120px] font-black uppercase tracking-tighter leading-none text-white select-none break-words">
              TEJA'S COFFEE.
            </h2>
          </motion.div>

          {/* Right Side Paragraphs & Action Button */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-start gap-6 pt-4"
          >
            <p className="text-sm md:text-base leading-relaxed text-white/90 font-normal">
              Teja's Coffee delivers freshly roasted beans crafted with rich flavors and sustainable sourcing. Each cup is designed to inspire warmth, energy, and connection.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/80 font-normal">
              We craft premium coffee daily, delivering perfect brews with passion, quality, and excellence that create memorable stories in every cup.
            </p>
            <button
              onClick={onActionClick}
              id="btn-footer-get-stated"
              className="mt-2 flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-white bg-white text-black font-bold text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300 cursor-pointer shadow-lg shadow-white/10"
            >
              <span>Get Stated</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Links & Information Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/20 text-sm"
        >
          {/* Navigations */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="font-bold uppercase tracking-wider text-xs text-white/60 mb-4">Navigations</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#hero" className="hover:text-white/70 transition-colors">Stories</a></li>
              <li><a href="#menu" className="hover:text-white/70 transition-colors">Coffee</a></li>
              <li><a href="#hero" className="hover:text-white/70 transition-colors">Equipment</a></li>
              <li><a href="#shops" className="hover:text-white/70 transition-colors">Store</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="font-bold uppercase tracking-wider text-xs text-white/60 mb-4">Contact</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white/70 transition-colors">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white/70 transition-colors">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white/70 transition-colors">X (Twitter)</a></li>
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="font-bold uppercase tracking-wider text-xs text-white/60 mb-4">Address</h4>
            <p className="text-white/90 leading-relaxed font-normal">
              123 High Street, Cambridge, CB2 1TN, United Kingdom
            </p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="font-bold uppercase tracking-wider text-xs text-white/60 mb-4">Social Media</h4>
            <div className="flex items-center gap-4 text-white">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Legal / Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/70 font-normal">
          <div>
            Copyright TEJA'S COFFEE 2025
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
