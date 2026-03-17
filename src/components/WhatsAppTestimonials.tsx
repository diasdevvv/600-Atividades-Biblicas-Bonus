import React from 'react';
import { WhatsAppSlide } from '../types';

interface WhatsAppTestimonialsProps {
  slides: WhatsAppSlide[];
  carouselRef: React.RefObject<HTMLDivElement>;
  onPrev: () => void;
  onNext: () => void;
  onScroll: () => void;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export const WhatsAppTestimonials: React.FC<WhatsAppTestimonialsProps> = ({
  slides,
  carouselRef,
  onPrev,
  onNext,
  onScroll,
  currentIndex,
  onDotClick
}) => {
  return (
    <section className="whatsapp-testimonials">
      <div className="container">
        <h2 className="whatsapp-section-title">Veja o que mães e professoras estão dizendo:</h2>
        <p className="whatsapp-subtitle-below">Depoimentos reais de quem já transformou o ministério infantil!</p>
        <div className="whatsapp-notice">
          📌 Essas mensagens são de clientes que já receberam o material no WhatsApp e aplicaram nas aulas.
        </div>
        
        <div className="whatsapp-carousel-wrapper">
          <button onClick={onPrev} className="carousel-btn desktop-only">❮</button>
          
          <div 
            className="whatsapp-carousel-container"
            ref={carouselRef}
            onScroll={onScroll}
          >
            <div className="whatsapp-carousel-track">
              {slides.map((slide, idx) => (
                <div key={idx} className={`whatsapp-carousel-slide ${currentIndex === idx ? 'active' : ''}`}>
                  {slide.images.map((img, imgIdx) => (
                    <img key={imgIdx} src={img} alt="WhatsApp Testimonial" referrerPolicy="no-referrer" loading="lazy" />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={onNext} className="carousel-btn desktop-only">❯</button>
        </div>

        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <span 
              key={idx} 
              onClick={() => onDotClick(idx)}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
