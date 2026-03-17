import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-alert">
          <span className="alert-icon">🔥</span>
          <span className="alert-text">Mais de 2.500 famílias já transformaram o ensino bíblico!</span>
        </div>
        
        <h1 className="hero-title">Cansada de improvisar nas aulas do Ministério Infantil?</h1>
        
        <div className="books-showcase">
          <img 
            src="assets/hero_image.png" 
            alt="600+ Atividades Bíblicas para Crianças" 
            className="books-image"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="brand-logo">
          <h2 className="brand-name">
            <span className="brand-sementes">+5 Cinco</span>
            <span className="brand-cristo">Bônus Especiais</span>
            <span className="brand-gift-wrapper">
              <span className="brand-gift-icon">🎁</span>
            </span>
          </h2>
        </div>
        
        <div className="promo-badge">Promoção válida por tempo limitado!</div>
        
        <button onClick={onCtaClick} className="cta-button">
          🔸 QUERO O MATERIAL POR R$ 10,00!
        </button>
        
        <div className="trust-badges">
          <div className="badge">
            <div className="badge-icon">✔️</div>
            <span className="badge-text">Compra<br/>segura</span>
          </div>
          <div className="badge">
            <div className="badge-icon">✔️</div>
            <span className="badge-text">Satisfação<br/>garantida</span>
          </div>
          <div className="badge">
            <div className="badge-icon">✔️</div>
            <span className="badge-text">Privacidade<br/>protegida</span>
          </div>
        </div>
      </div>
    </section>
  );
};
