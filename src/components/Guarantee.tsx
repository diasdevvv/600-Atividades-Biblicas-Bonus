import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="guarantee-section">
      <div className="container">
        <div className="guarantee-card">
          <img 
            src="assets/selo_gatanrtia_7_dias.webp" 
            alt="Garantia de 7 Dias" 
            className="guarantee-seal-img"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <h2 className="guarantee-title">Garantia de Satisfação de 7 Dias</h2>
          <h3 className="guarantee-subtitle">Experimente sem riscos.</h3>
          <p className="guarantee-text">
            Se, dentro de 7 dias, você achar que o material não é para você, basta solicitar um reembolso e devolveremos 100% do seu dinheiro, sem perguntas.
          </p>
          <div className="guarantee-footer">
            <ShieldCheck size={20} className="shield-icon" />
            <span>Sua compra está 100% protegida.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
