import React from 'react';

interface BenefitsProps {
  items: string[];
}

export const Benefits: React.FC<BenefitsProps> = ({ items }) => {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="section-title">O que você recebe ao adquirir o kit?</h2>
        <div className="benefits-list">
          {items.map((item, idx) => (
            <div key={idx} className="benefit-item">
              <span className="bullet">✔️</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
