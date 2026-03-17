import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#" className="footer-link">Política de Privacidade</a>
          <span className="separator">|</span>
          <a href="#" className="footer-link">Termos de Uso</a>
        </div>
        <p className="footer-legal">
          Este site não é afiliado ao Facebook, Instagram ou qualquer empresa do grupo Meta. Ao sair das plataformas da Meta, toda a responsabilidade recai sobre este site. Nos esforçamos para apresentar de forma clara todas as informações, evidências e resultados reais relacionados ao nosso produto. Seus dados estão seguros conosco: não comercializamos e nem compartilhamos suas informações pessoais com terceiros. Também não praticamos envio de spam. Em caso de dúvidas, utilize nosso canal de contato. Estamos disponíveis para atendimento de segunda a sexta, das 9h às 18h. Todas as mensagens são respondidas por ordem de chegada. Imagens meramente ilustrativas.
        </p>
        <p className="footer-copyright">© 2026 600+ Atividades Bíblicas para Crianças. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
