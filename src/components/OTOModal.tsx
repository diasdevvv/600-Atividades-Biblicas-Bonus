import React from 'react';

interface OTOModalProps {
  onClose: () => void;
}

export const OTOModal: React.FC<OTOModalProps> = ({ onClose }) => {
  return (
    <div className="oto-overlay" onClick={onClose}>
      <div className="oto-modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="oto-close">&times;</button>
        <div style={{ textAlign: 'center' }}>
          <div className="oto-alert">
            ⚠️ OPORTUNIDADE ÚNICA!
          </div>
          <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Espere! Temos uma oferta especial para você!</h2>
          
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px' }}>Por apenas <strong>mais R$ 9,90</strong>, você leva muito mais conteúdo!</p>
          
          <div className="oto-price-box">
            <span style={{ color: '#666', fontSize: '0.8rem' }}>Oferta especial</span>
            <span style={{ color: '#008C2F', fontSize: '2.5rem', fontWeight: '900' }}>R$ 19,90</span>
            <span style={{ color: '#C44569', fontWeight: 'bold', fontSize: '0.9rem' }}>🔥 Leve mais por menos!</span>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '20px', textAlign: 'left', margin: '20px 0' }}>
            <p style={{ color: '#FFD600', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>Com esta oferta você recebe:</p>
            <div style={{ color: 'white', fontSize: '0.85rem', lineHeight: '1.8' }}>
              <p>✔️ Tudo do Plano Básico (600 atividades)</p>
              <p>✔️ 5 Bônus Exclusivos</p>
              <p>✔️ 20 Jogos Bíblicos</p>
              <p>✔️ +60 Dinâmicas Bíblicas Extras</p>
              <p>✔️ 365 Versículos Coloridos</p>
              <p>✔️ 16 Cadernos de Grafismos Fonéticos</p>
              <p>✔️ Suporte Prioritário</p>
            </div>
          </div>
          
          <a href="https://pay.lowify.com.br/checkout?product_id=U5ighZ" className="oto-cta-yes">
            🔸 SIM, QUERO APROVEITAR POR R$ 19,90!
          </a>
          
          <a 
            href="https://pay.lowify.com.br/checkout?product_id=0Yftjc"
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', textDecoration: 'underline', fontSize: '0.85rem', cursor: 'pointer', display: 'block', marginTop: '10px' }}
          >
            Não, continuar por R$ 10,00
          </a>
        </div>
      </div>
    </div>
  );
};
