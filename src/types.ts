export interface CarouselSlide {
  title: string;
  image: string;
}

export interface WhatsAppSlide {
  images: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  icon: string;
  oldPrice: string;
  price: string;
  description?: string;
  savings?: string;
  benefits: string[];
  highlighted?: boolean;
  ctaText: string;
  checkoutUrl?: string;
}
