
import { Menu, Mail } from 'lucide-react';

interface HeaderNavProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenMenu, onOpenContact }) => {
  return (
    <header className="w-full py-6 px-4 md:px-12 flex items-center justify-between sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl bg-white/5 shadow-lg shadow-black/20">
      {/* Menu Pill Button */}
      <button
        onClick={onOpenMenu}
        id="btn-header-menu"
        className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide cursor-pointer"
      >
        <Menu className="w-4 h-4" />
        <span>Menu</span>
      </button>

      {/* Center Brand Logo */}
      <div className="text-center">
        <a href="#hero" className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-white uppercase hover:opacity-80 transition-opacity">
          TEJA'S COFFEE
        </a>
      </div>

      {/* Contact us Pill Button */}
      <button
        onClick={onOpenContact}
        id="btn-header-contact"
        className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide cursor-pointer"
      >
        <Mail className="w-4 h-4" />
        <span>Contact us</span>
      </button>
    </header>
  );
};
