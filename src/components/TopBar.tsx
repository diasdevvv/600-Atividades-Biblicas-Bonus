import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <span>🔥 Último dia de oferta: <strong>{new Date().toLocaleDateString('pt-BR')}</strong></span>
    </div>
  );
};
