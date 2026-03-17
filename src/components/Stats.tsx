import React from 'react';
import { Users, BookOpen, Star, Download, Gift } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon-box">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-number">Mais de 4.529</span>
              <span className="stat-label">FAMÍLIAS SATISFEITAS</span>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon-box">
              <BookOpen size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number-wrapper">
                <span className="stat-number">600+</span>
                <div className="bonus-mini-badge">
                  <Gift size={12} />
                  <span>+Bônus</span>
                </div>
              </div>
              <span className="stat-label">ATIVIDADES PRONTAS</span>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon-box">
              <Star size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-number">4,9/5</span>
              <span className="stat-label">AVALIAÇÃO MÉDIA</span>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon-box">
              <Download size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-number">100%</span>
              <span className="stat-label">DIGITAL E IMEDIATO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
