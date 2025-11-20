import { useState, useEffect } from "react";
import { rotinasAPI, Rotina as RotinaType } from "@/services/api";

const Rotina = () => {
  const [rotinas, setRotinas] = useState<RotinaType[]>([]);
  const [loading, setLoading] = useState(false);

  // Dicas de rotina saudável (dados estáticos para demonstração)
  const dicas = [
    {
      icon: "☀️",
      titulo: "Comece o dia cedo",
      descricao:
        "Acordar mais cedo permite aproveitar melhor o dia e estabelecer uma rotina matinal produtiva.",
    },
    {
      icon: "💧",
      titulo: "Hidrate-se",
      descricao:
        "Beba pelo menos 2 litros de água por dia para manter o corpo e mente funcionando bem.",
    },
    {
      icon: "🏃",
      titulo: "Exercícios regulares",
      descricao:
        "Pratique atividade física pelo menos 30 minutos por dia, 3 vezes na semana.",
    },
    {
      icon: "⏰",
      titulo: "Pausas programadas",
      descricao:
        "Faça pausas de 5-10 minutos a cada hora de trabalho para descansar a mente.",
    },
    {
      icon: "📱",
      titulo: "Desconexão digital",
      descricao:
        "Reserve momentos sem telas, especialmente antes de dormir para melhor qualidade de sono.",
    },
    {
      icon: "🥗",
      titulo: "Alimentação balanceada",
      descricao:
        "Mantenha refeições regulares e nutritivas para energia constante durante o dia.",
    },
  ];

  const sugestoes = [
    {
      tipo: "trabalho" as const,
      descricao: "Sessão de trabalho focado",
      duracao: 90,
      horario: "09:00",
    },
    {
      tipo: "pausa" as const,
      descricao: "Pausa para café e alongamento",
      duracao: 15,
      horario: "10:30",
    },
    {
      tipo: "trabalho" as const,
      descricao: "Continuação do trabalho",
      duracao: 90,
      horario: "10:45",
    },
    {
      tipo: "pausa" as const,
      descricao: "Almoço e descanso",
      duracao: 60,
      horario: "12:15",
    },
    {
      tipo: "exercicio" as const,
      descricao: "Caminhada ou exercício leve",
      duracao: 30,
      horario: "13:15",
    },
    {
      tipo: "trabalho" as const,
      descricao: "Período de trabalho da tarde",
      duracao: 120,
      horario: "14:00",
    },
    {
      tipo: "pausa" as const,
      descricao: "Pausa para lanche",
      duracao: 15,
      horario: "16:00",
    },
    {
      tipo: "estudo" as const,
      descricao: "Aprendizado e desenvolvimento",
      duracao: 60,
      horario: "16:15",
    },
  ];

  const getTipoColor = (tipo: string) => {
    const colors = {
      trabalho: "bg-primary/10 text-primary border-primary/30",
      pausa: "bg-secondary/10 text-secondary border-secondary/30",
      exercicio: "bg-accent/10 text-accent border-accent/30",
      estudo: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/30",
    };
    return colors[tipo as keyof typeof colors] || colors.trabalho;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Organize sua Rotina
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantenha equilíbrio entre produtividade e bem-estar com rotinas
            saudáveis
          </p>
        </div>

        {/* Dicas de Bem-estar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Dicas para uma Rotina Saudável
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dicas.map((dica, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{dica.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{dica.titulo}</h3>
                <p className="text-muted-foreground">{dica.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sugestão de Rotina Diária */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Modelo de Rotina Equilibrada
          </h2>
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="space-y-4">
              {sugestoes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg"
                >
                  <div className="text-2xl font-bold text-primary min-w-[80px]">
                    {item.horario}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.descricao}</h4>
                    <p className="text-sm text-muted-foreground">
                      Duração: {item.duracao} minutos
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getTipoColor(
                      item.tipo
                    )}`}
                  >
                    {item.tipo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-secondary p-8 rounded-xl text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Benefícios de uma Rotina Organizada
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <svg
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Maior Produtividade</h3>
                  <p className="text-white/90 text-sm">
                    Aproveite melhor seu tempo com foco e organização
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Menos Estresse</h3>
                  <p className="text-white/90 text-sm">
                    Reduza ansiedade com pausas planejadas e descanso adequado
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Melhor Saúde</h3>
                  <p className="text-white/90 text-sm">
                    Exercícios e alimentação regular melhoram disposição
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Equilíbrio de Vida</h3>
                  <p className="text-white/90 text-sm">
                    Balance trabalho e vida pessoal de forma sustentável
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rotina;