import React from 'react';

interface TargetAudienceProps {
  items: string[];
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ items }) => {
  return (
    <section className="target-audience for-you">
      <div className="container">
        <h2 className="section-title">As atividades são para você que…</h2>
        <div className="audience-list">
          {items.map((item, idx) => (
            <div key={idx} className="audience-item positive">
              <span className="icon">✔️</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
