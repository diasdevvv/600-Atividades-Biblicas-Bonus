import React from 'react';

interface PricingProps {
  pricingRef: React.RefObject<HTMLElement>;
  onOpenOTO: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ pricingRef, onOpenOTO }) => {
  return (
    <section ref={pricingRef} className="offer">
      <div className="container">
        <div className="offer-header">
          <div className="offer-badge-top">
            🎁 OFERTA LIMITADA — TERMINA EM BREVE!
          </div>
          <h2 className="offer-title">Escolha Seu Plano</h2>
          <p className="offer-subtitle">Comece hoje mesmo a transformar o aprendizado bíblico das suas crianças!</p>
        </div>
        
        <div className="pricing-cards">
          {/* Basic Kit */}
          <div className="pricing-card">
            <div className="card-header">
              <span className="plan-icon">⚡</span>
              <h3 className="plan-name">Kit Básico</h3>
            </div>
            <div className="card-price">
              <span className="old-price-card">De <s>R$ 27,90</s> por</span>
              <span className="price-value">R$ 10,00</span>
            </div>
            <p className="price-description">Acesso imediato ao kit de atividades:</p>
            
            <div className="card-benefits">
              {[
                "600 Atividades Bíblicas",
                "5 Bônus Exclusivos",
                "Download em PDF",
                "Garantia de 30 dias",
                "Envio imediato no WhatsApp"
              ].map((item, idx) => (
                <div key={idx} className="card-benefit">
                  <span className="benefit-check">✔️</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <button onClick={onOpenOTO} className="card-cta basic-cta">
              🔸 QUERO O KIT BÁSICO
            </button>
          </div>

          {/* Complete Kit */}
          <div className="pricing-card highlighted">
            <div className="popular-badge">⭐ RECOMENDADO — Melhor custo-benefício</div>
            <div className="card-header">
              <span className="plan-icon">🎁</span>
              <h3 className="plan-name">Kit Completo</h3>
            </div>
            <div className="card-price">
              <span className="old-price-card">De <s>R$ 97</s> por</span>
              <span className="price-value highlight">R$ 27,00</span>
            </div>
            <p className="savings-text">
              🔥 Economize R$ 70 e leve tudo por apenas R$ 27,00!
            </p>
            
            <div className="card-benefits">
              <div className="card-benefit">
                <span className="benefit-check">✔️</span>
                <span><strong>600 Atividades Bíblicas</strong></span>
              </div>
              <div className="card-benefit">
                <span className="benefit-check">✔️</span>
                <span><strong>Tudo do Plano Básico</strong></span>
              </div>
              <div className="card-benefit">
                <span className="benefit-check">✔️</span>
                <span><strong>5 Bônus Exclusivos</strong></span>
              </div>
              <div className="card-benefit">
                <span className="benefit-check">✔️</span>
                <span><strong>20 Jogos Bíblicos <span className="strikethrough-price">R$ 37,90</span></strong></span>
              </div>
              <div className="card-benefit">
                <span className="benefit-check">✔️</span>
                <span><strong>+60 Dinâmicas Bíblicas Extras <span className="strikethrough-price">R$ 19,90</span></strong></span>
              </div>
              <div className="card-benefit">
                <span className="benefit-check">✔️</span>
                <span><strong>365 Versículos Coloridos <span className="strikethrough-price">R$ 29,90</span></strong></span>
              </div>
              <div className="card-benefit">
                <span className="benefit-check">✔️</span>
                <span><strong>16 Cadernos de Grafismos Fonéticos <span className="strikethrough-price">R$ 34,90</span></strong></span>
              </div>
              
              {[
                "Acesso imediato no WhatsApp",
                "Material organizado em PDF",
                "Suporte prioritário",
                "Uso ilimitado — imprima quantas vezes quiser"
              ].map((item, idx) => (
                <div key={idx} className="card-benefit">
                  <span className="benefit-check">✔️</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://pay.lowify.com.br/checkout?product_id=5dGFH8" 
              className="card-cta complete-cta"
              style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
            >
              🔸 QUERO O KIT COMPLETO! 🎁
            </a>
          </div>
        </div>
        
        <div className="payment-info">
          <div className="payment-methods">
            <span className="payment-icon">💳</span>
            <span className="payment-icon">📱</span>
            <span className="payment-icon">🎫</span>
          </div>
          <p className="security-text">🔒 Compra 100% segura! Receba o material no WhatsApp e e-mail.</p>
        </div>
      </div>
    </section>
  );
};
