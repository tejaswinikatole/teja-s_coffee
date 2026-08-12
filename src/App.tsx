import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { FeatureBanner } from './components/FeatureBanner';
import { ShopsSection } from './components/ShopsSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { MenuModal } from './components/MenuModal';
import { ContactModal } from './components/ContactModal';
import { ScrollBackground } from './components/ScrollBackground';
import { Copy, Check, Eye, Grid } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyText = () => {
    const fullText = `
TEJA'S COFFEE - Coffee Break Banner
Hashtags: #DailyBrew #CoffeeLovers #FreshRoast #MorningEnergy #CaffeineKick

Coffee Break
Teja's Coffee delivers freshly roasted beans crafted with rich flavors and sustainable sourcing. Each cup is designed to inspire warmth, energy, and connection. We craft quality coffee daily, delivering perfect brews and stories of excellence.

Marquee: CLASSIC COLD BREWS ✦ ICED LATTE CREATIONS ✦ COLD COFFEE MOCKTAILS ✦ REFRESHING COFFEE COOLERS ✦ FLAVORFUL ICED COFFEE SPECIALTIES

Explore Our Menu /2025
Categories: SIGNATURES, COFFEE, MATCHA, CHOCOLATE, REFRESHERS, TEAS
Items:
1. VELVET BREW - Smooth taste with rich, creamy finish. (4.9/5 | 2,000 Reviews)
2. GOLDEN ROAST - Balanced flavor, bright notes, lasting warmth. (4.8/5 | 1,750 Reviews)
3. MIDNIGHT MOCHA - Deep chocolate essence with bold coffee. (5.0/5 | 3,120 Reviews)
4. AMBER DRIP - Light-bodied brew, refreshing and subtly sweet. (4.7/5 | 980 Reviews)
5. RUSTIC BEAN - Earthy aroma with strong, authentic character. (4.9/5 | 2,540 Reviews)
6. MORNING BLISS - Uplifting blend, energizing start to day. (4.8/5 | 1,320 Reviews)

Statement:
USE THE BEST COFFEE
PREMIUM ARABICA
FRESH BEANS AND FRESHLY GROUND SPICES TO UNDENIABLY FLAVOURS COFFEE MECA

Visit shops: CLASSIC COLD BREW (Cambridge, Market Square, Kaffebar, Corner House)

Frequently Asked Questions
1. What makes Teja's Coffee unique?
2. Do you offer freshly roasted coffee?
3. Can I subscribe for regular deliveries?
4. Do you have decaf options available?
5. How should I store my coffee?

Copyright TEJA'S COFFEE 2025
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`min-h-screen bg-transparent text-white font-['DM_Sans'] antialiased relative selection:bg-white selection:text-black ${showGrid ? 'bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:24px_24px]' : ''}`}>
      <ScrollBackground />
      {/* Top Header */}
      <HeaderNav
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection onActionClick={() => setIsContactOpen(true)} />

      {/* Menu Section */}
      <MenuSection onSelectItem={() => setIsContactOpen(true)} />

      {/* Feature Typography Banner */}
      <FeatureBanner onActionClick={() => setIsContactOpen(true)} />

      {/* Shops Section */}
      <ShopsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Banner */}
      <FooterSection onActionClick={() => setIsContactOpen(true)} />

      {/* Modals */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleScrollTo}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Floating Banner Toolbar Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full p-2 shadow-2xl shadow-black/30">
        <button
          onClick={() => setShowGrid(!showGrid)}
          title="Toggle Grid Alignment Guides"
          className={`p-2.5 rounded-full transition-all cursor-pointer ${showGrid ? 'bg-white text-black' : 'text-white hover:bg-white/20'}`}
        >
          <Grid className="w-4 h-4" />
        </button>

        <button
          onClick={handleCopyText}
          title="Copy Banner Copy Text"
          className="p-2.5 rounded-full text-white hover:bg-white/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold px-3"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : 'Copy Text'}</span>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to Top"
          className="p-2.5 rounded-full text-white hover:bg-white/20 transition-all cursor-pointer"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
