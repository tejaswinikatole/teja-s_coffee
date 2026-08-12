export interface MenuItem {
  id: string;
  name: string;
  category: 'SIGNATURES' | 'COFFEE' | 'MATCHA' | 'CHOCOLATE' | 'REFRESHERS' | 'TEAS';
  description: string;
  rating: number;
  reviewsCount: number;
  image: string;
}

export interface ShopItem {
  id: string;
  title: string;
  location: string;
  image: string;
  isMain?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
