import React from 'react';
import { X, ArrowRight, Coffee, Store, HelpCircle, PhoneCall } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border-l border-white/20 h-full p-8 flex flex-col justify-between overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-6">
          <span className="text-xl font-black uppercase tracking-tight text-white">Navigation</span>
          <button
            onClick={onClose}
            id="btn-close-menu-modal"
            className="p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="py-8 space-y-6">
          <button
            onClick={() => { onNavigate('hero'); onClose(); }}
            className="w-full flex items-center justify-between text-left text-2xl font-bold tracking-tight text-white hover:text-white/70 transition-colors py-2 border-b border-white/10 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Coffee className="w-5 h-5" />
              <span>Stories & Brews</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => { onNavigate('menu'); onClose(); }}
            className="w-full flex items-center justify-between text-left text-2xl font-bold tracking-tight text-white hover:text-white/70 transition-colors py-2 border-b border-white/10 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Coffee className="w-5 h-5" />
              <span>Explore Our Menu</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => { onNavigate('shops'); onClose(); }}
            className="w-full flex items-center justify-between text-left text-2xl font-bold tracking-tight text-white hover:text-white/70 transition-colors py-2 border-b border-white/10 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Store className="w-5 h-5" />
              <span>Visit Shops</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => { onNavigate('faq'); onClose(); }}
            className="w-full flex items-center justify-between text-left text-2xl font-bold tracking-tight text-white hover:text-white/70 transition-colors py-2 border-b border-white/10 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5" />
              <span>FAQ</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => { onNavigate('footer'); onClose(); }}
            className="w-full flex items-center justify-between text-left text-2xl font-bold tracking-tight text-white hover:text-white/70 transition-colors py-2 border-b border-white/10 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5" />
              <span>Contact Us</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer info */}
        <div className="border-t border-white/20 pt-6 text-xs text-white/60">
          <p className="font-bold text-white mb-1">TEJA'S COFFEE ROASTERS</p>
          <p>123 High Street, Cambridge, CB2 1TN, UK</p>
        </div>
      </div>
    </div>
  );
};
