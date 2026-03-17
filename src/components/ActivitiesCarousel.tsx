import React from 'react';
import { Clock, BookOpen, Heart, Download } from 'lucide-react';
import { CarouselSlide } from '../types';

interface ActivitiesCarouselProps {
  slides: CarouselSlide[];
  carouselRef: React.RefObject<HTMLDivElement>;
  onPrev: () => void;
  onNext: () => void;
  onScroll: () => void;
  currentIndex: number;
  onDotClick: (index: number) => void;
  onCtaClick: () => void;
}

export const ActivitiesCarousel: React.FC<ActivitiesCarouselProps> = ({
  slides,
  carouselRef,
  onPrev,
  onNext,
  onScroll,
  currentIndex,
  onDotClick,
  onCtaClick
}) => {
  return (
    <section className="activities-carousel">
      <div className="container">
        <h2 className="section-title">Veja exemplos do material</h2>
        <p className="section-subtitle">Atividades coloridas, educativas e alinhadas com a Bíblia</p>
        
        <div className="carousel-wrapper material-preview-carousel">
          <button onClick={onPrev} className="carousel-btn desktop-only">❮</button>
          
          <div 
            className="carousel-container"
            ref={carouselRef}
            onScroll={onScroll}
          >
            <div className="carousel-track">
              {slides.map((slide, idx) => (
                <div key={idx} className="carousel-slide rotating-slide">
                  <div className="slide-inner">
                    <img src={slide.image} alt={slide.title} referrerPolicy="no-referrer" loading="lazy" />
                  </div>
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

        <div className="material-explanation-card bottom-explanation">
          <div className="explanation-content">
            <div className="benefit-row">
              <div className="benefit-icon-wrapper clock">
                <Clock size={24} />
              </div>
              <div className="benefit-info">
                <h3>Economize horas de preparação</h3>
                <p>Material pronto para usar, sem precisar criar atividades do zero.</p>
              </div>
            </div>
            
            <div className="benefit-row">
              <div className="benefit-icon-wrapper book">
                <BookOpen size={24} />
              </div>
              <div className="benefit-info">
                <h3>Histórias bíblicas completas</h3>
                <p>Atividades desde a criação até os ensinamentos de Jesus.</p>
              </div>
            </div>
            
            <div className="benefit-row">
              <div className="benefit-icon-wrapper heart">
                <Heart size={24} />
              </div>
              <div className="benefit-info">
                <h3>Ideal para crianças de 3 a 10 anos</h3>
                <p>Diferentes níveis de dificuldade para cada idade.</p>
              </div>
            </div>
            
            <div className="benefit-row">
              <div className="benefit-icon-wrapper download">
                <Download size={24} />
              </div>
              <div className="benefit-info">
                <h3>PDF pronto para imprimir</h3>
                <p>Baixe imediatamente e imprima quantas vezes quiser.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '40px' }}>
          <button onClick={onCtaClick} className="cta-button large">🔸 QUERO ESSE MATERIAL!</button>
        </div>
      </div>
    </section>
  );
};
