import { CarouselSlide, WhatsAppSlide, FAQItem } from './types';

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  { title: "Atividade 1", image: "/produtosImagens/1-724x1024.png" },
  { title: "Atividade 2", image: "/produtosImagens/2-724x1024.png" },
  { title: "Atividade 3", image: "/produtosImagens/3-724x1024.png" },
  { title: "Atividade 4", image: "/produtosImagens/4-724x1024.png" },
  { title: "Atividade 5", image: "/produtosImagens/5-724x1024.png" },
  { title: "Alfabeto Bíblico", image: "/produtosImagens/ALFABETO-BIBLICO-INFANTIL-1-724x1024.png" },
  { title: "Antigo Testamento", image: "/produtosImagens/ANTIGO-TESTAMENTO-1-724x1024.png" },
  { title: "Aprendendo a Orar", image: "/produtosImagens/APRENDENDO-A-ORAR-724x1024.png" },
  { title: "Aprendendo com Alegria", image: "/produtosImagens/APRENDENDO-COM-ALEGRIA-724x1024.png" },
  { title: "Passatempo Bíblico", image: "/produtosImagens/PASSATEMPO-BIBLICO-724x1024.png" },
];

export const WHATSAPP_SLIDES: WhatsAppSlide[] = [
  { images: ["/assets/IMG-5312-1-1.webp"] },
  { images: ["/assets/IMG-5315-1-1.webp"] },
  { images: ["/assets/fakedm-generator-com-2-1-1.webp", "/assets/fakedm-generator-com-3-1-1.webp"] },
  { images: ["/assets/fakedm-generator-com-5-1.webp", "/assets/fakedm-generator-com-6-1-1.webp"] },
  { images: ["/assets/fakedm-generator-com-1-1-1.webp"] }
];

export const FAQ_ITEMS: FAQItem[] = [
  { q: "📌 O material é físico ou digital?", a: "O material é 100% digital e chega no seu WhatsApp e e-mail imediatamente após o pagamento." },
  { q: "📌 Para quais idades é indicado?", a: "As atividades são recomendadas para crianças de 3 a 12 anos." },
  { q: "📌 Eu terei suporte?", a: "Claro! Nossa equipe está disponível para te ajudar pelo WhatsApp." },
  { q: "📌 Posso usar o material no ministério da minha igreja?", a: "Sim! O material é perfeito para cultinho, EBD e Ministério Infantil." }
];

export const AUDIENCE_POSITIVE = [
  "Quer materiais prontos para usar no Ministério Infantil;",
  "Não tem tempo para preparar aulas e deseja facilitar sua rotina;",
  "Deseja aproximar as crianças da Palavra de Deus;",
  "Quer manter seus filhos longe dos eletrônicos."
];

export const BENEFITS_LIST = [
  "600 atividades e histórias bíblicas;",
  "5 bônus especiais inclusos;",
  "Jogos, desafios e atividades interativas;",
  "Para crianças de 3 a 12 anos;",
  "Material em PDF para imprimir à vontade;",
  "Envio imediato no WhatsApp."
];
