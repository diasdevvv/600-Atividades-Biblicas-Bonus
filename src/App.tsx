import React, { useState, useRef } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ActivitiesCarousel } from './components/ActivitiesCarousel';
import { TargetAudience } from './components/TargetAudience';
import { Testimonials } from './components/Testimonials';
import { WhatsAppTestimonials } from './components/WhatsAppTestimonials';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { OTOModal } from './components/OTOModal';
import { useCarousel } from './hooks/useCarousel';
import { CAROUSEL_SLIDES, WHATSAPP_SLIDES, FAQ_ITEMS, AUDIENCE_POSITIVE, BENEFITS_LIST } from './constants';

export default function App() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [showOTO, setShowOTO] = useState(false);
  const pricingRef = useRef<HTMLElement>(null);

  const materialCarousel = useCarousel();
  const whatsappCarousel = useCarousel();

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFAQ = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <div className="app-wrapper">
      <TopBar />
      
      <Hero onCtaClick={scrollToPricing} />
      
      <Stats />
      
      <ActivitiesCarousel 
        slides={CAROUSEL_SLIDES}
        carouselRef={materialCarousel.ref}
        onPrev={materialCarousel.prev}
        onNext={materialCarousel.next}
        onScroll={materialCarousel.onScroll}
        currentIndex={materialCarousel.index}
        onDotClick={materialCarousel.goTo}
        onCtaClick={scrollToPricing}
      />
      
      <TargetAudience items={AUDIENCE_POSITIVE} />
      
      <Testimonials />
      
      <WhatsAppTestimonials 
        slides={WHATSAPP_SLIDES}
        carouselRef={whatsappCarousel.ref}
        onPrev={whatsappCarousel.prev}
        onNext={whatsappCarousel.next}
        onScroll={whatsappCarousel.onScroll}
        currentIndex={whatsappCarousel.index}
        onDotClick={whatsappCarousel.goTo}
      />
      
      <Benefits items={BENEFITS_LIST} />
      
      <Pricing pricingRef={pricingRef} onOpenOTO={() => setShowOTO(true)} />
      
      <Guarantee />
      
      <FAQ 
        items={FAQ_ITEMS} 
        openIndex={faqOpenIndex} 
        onToggle={toggleFAQ} 
        onCtaClick={scrollToPricing} 
      />
      
      <Footer />

      {showOTO && <OTOModal onClose={() => setShowOTO(false)} />}
    </div>
  );
}
