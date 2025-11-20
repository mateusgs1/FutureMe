import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-muted/50 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "O que é o FutureMe?",
      answer:
        "O FutureMe é uma plataforma que ajuda pessoas a se prepararem para as profissões do futuro, oferecendo recomendações personalizadas de carreiras emergentes e ferramentas para organizar rotina e melhorar bem-estar.",
    },
    {
      question: "Como funciona a recomendação de profissões?",
      answer:
        "Analisamos seu perfil, experiências, interesses e características pessoais para recomendar profissões emergentes compatíveis com você. Nossa base de dados contém informações sobre tendências de mercado e habilidades requeridas.",
    },
    {
      question: "O serviço é gratuito?",
      answer:
        "Sim! O FutureMe oferece acesso gratuito às principais funcionalidades, incluindo recomendações de profissões, dicas de rotina e bem-estar.",
    },
    {
      question: "Como posso organizar minha rotina na plataforma?",
      answer:
        "Na seção de Rotina, você pode criar e gerenciar atividades diárias, incluindo trabalho, pausas, exercícios e estudo. Receba sugestões personalizadas para manter produtividade e qualidade de vida.",
    },
    {
      question: "Quais são as profissões emergentes disponíveis?",
      answer:
        "Nossa plataforma oferece informações sobre diversas profissões do futuro, como Especialista em IA, Desenvolvedor de Realidade Virtual, Gestor de Sustentabilidade, Designer de Experiência do Usuário, entre outras.",
    },
    {
      question: "Como funciona o equilíbrio vida-trabalho?",
      answer:
        "Fornecemos orientações e ferramentas para ajudar você a manter um equilíbrio saudável, principalmente em modelos híbridos. Isso inclui sugestões de pausas, atividades físicas e momentos de desconexão.",
    },
    {
      question: "Posso usar o FutureMe em dispositivos móveis?",
      answer:
        "Sim! O FutureMe é totalmente responsivo e funciona perfeitamente em smartphones, tablets e desktops.",
    },
    {
      question: "Como entro em contato com o suporte?",
      answer:
        "Você pode nos contatar através da página de Contato, preenchendo o formulário com sua mensagem. Respondemos todas as solicitações em até 48 horas.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre o FutureMe
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-primary p-8 rounded-xl text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Não encontrou sua resposta?
          </h2>
          <p className="mb-6">
            Entre em contato conosco e teremos prazer em ajudar!
          </p>
          <a
            href="/contato"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
