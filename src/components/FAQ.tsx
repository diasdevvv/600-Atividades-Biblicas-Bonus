import React from 'react';
import { FAQItem } from '../types';

interface FAQProps {
  items: FAQItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  onCtaClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ items, openIndex, onToggle, onCtaClick }) => {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Ficou com alguma dúvida?</h2>
        <div className="faq-list">
          {items.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'active' : ''}`}>
              <button 
                onClick={() => onToggle(idx)}
                className="faq-question"
              >
                <span>{faq.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={onCtaClick} className="cta-button green">🔸 EU QUERO AS ATIVIDADES!</button>
        </div>
      </div>
    </section>
  );
};
