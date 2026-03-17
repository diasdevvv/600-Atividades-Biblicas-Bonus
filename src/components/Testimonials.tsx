import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Quem já usa as 600+ Atividades Bíblicas para Crianças 📘</h2>
        <p className="section-subtitle">Famílias e professores já aprovam e recomendam as atividades.<br/>Inspire-se com esses momentos!</p>
        
        <div className="testimonials-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="testimonial-card">
              <img key={i} src={`assets/testemunho${i}.png`} alt="Testemunho" className="testimonial-image" referrerPolicy="no-referrer" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
