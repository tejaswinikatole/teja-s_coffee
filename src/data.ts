import { MenuItem, ShopItem, FAQItem } from './types';

export const HASHTAGS = [
  '#DailyBrew',
  '#CoffeeLovers',
  '#FreshRoast',
  '#MorningEnergy',
  '#CaffeineKick',
];

export const MARQUEE_ITEMS = [
  'CLASSIC COLD BREWS',
  'ICED LATTE CREATIONS',
  'COLD COFFEE MOCKTAILS',
  'REFRESHING COFFEE COOLERS',
  'FLAVORFUL ICED COFFEE SPECIALTIES',
];

export const CATEGORIES = [
  'SIGNATURES',
  'COFFEE',
  'MATCHA',
  'CHOCOLATE',
  'REFRESHERS',
  'TEAS',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'VELVET BREW',
    category: 'SIGNATURES',
    description: 'Smooth taste with rich, creamy finish.',
    rating: 4.9,
    reviewsCount: 2000,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'GOLDEN ROAST',
    category: 'COFFEE',
    description: 'Balanced flavor, bright notes, lasting warmth.',
    rating: 4.8,
    reviewsCount: 1750,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'MIDNIGHT MOCHA',
    category: 'CHOCOLATE',
    description: 'Deep chocolate essence with bold coffee.',
    rating: 5.0,
    reviewsCount: 3120,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'AMBER DRIP',
    category: 'COFFEE',
    description: 'Light-bodied brew, refreshing and subtly sweet.',
    rating: 4.7,
    reviewsCount: 980,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'RUSTIC BEAN',
    category: 'SIGNATURES',
    description: 'Earthy aroma with strong, authentic character.',
    rating: 4.9,
    reviewsCount: 2540,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'MORNING BLISS',
    category: 'REFRESHERS',
    description: 'Uplifting blend, energizing start to day.',
    rating: 4.8,
    reviewsCount: 1320,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
  },
];

export const SHOPS: ShopItem[] = [
  {
    id: 's1',
    title: 'CLASSIC COLD BREW',
    location: '123 High Street, Cambridge',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's2',
    title: 'CLASSIC COLD BREW',
    location: 'Market Square Roastery',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's3',
    title: 'CLASSIC COLD BREW',
    location: 'Kaffebar Flagship',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
    isMain: true,
  },
  {
    id: 's4',
    title: 'CLASSIC COLD BREW',
    location: 'Corner House Cafe',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=800',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: "What makes Teja's Coffee unique?",
    answer: 'We source premium beans, roast them fresh, and prioritize sustainability to deliver exceptional flavor in every cup.',
  },
  {
    id: 'f2',
    question: 'Do you offer freshly roasted coffee?',
    answer: 'Yes, all our beans are roasted in small batches daily to ensure maximum freshness and peak flavor profiles.',
  },
  {
    id: 'f3',
    question: 'Can I subscribe for regular deliveries?',
    answer: 'Absolutely! You can choose your favorite roast, delivery frequency, and quantity for flexible doorstep delivery.',
  },
  {
    id: 'f4',
    question: 'Do you have decaf options available?',
    answer: 'Yes, we offer naturally processed decaf options that retain full-bodied coffee flavor without caffeine.',
  },
  {
    id: 'f5',
    question: 'How should I store my coffee?',
    answer: 'Keep your coffee in an airtight container in a cool, dark place away from heat, light, and moisture.',
  },
];
