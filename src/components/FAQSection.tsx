import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full bg-transparent text-white py-20 px-4 md:px-12 border-b border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/20"
        >
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Frequently<br />Asked Questions
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base leading-relaxed text-white/80 font-normal">
              Find quick answers to common questions about our coffee, services, and policies. Our FAQ helps guide you with clarity, convenience, and confidence.
            </p>
          </div>
        </motion.div>

        {/* Accordion Questions List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="divide-y divide-white/20 border-b border-white/20"
        >
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5 }}
                key={faq.id} 
                className="py-6 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  id={`btn-faq-${faq.id}`}
                  className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                >
                  <span className="text-lg sm:text-2xl font-bold tracking-wide text-white group-hover:text-white/80 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="p-2 rounded-full border border-white/30 group-hover:border-white transition-colors">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-4xl pr-8 pt-1 pb-2 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
