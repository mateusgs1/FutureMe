import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recomendacoesAPI, Recomendacao } from "@/services/api";

const Recomendacoes = () => {
  const [recomendacoes, setRecomendacoes] = useState<Recomendacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    carregarRecomendacoes();
  }, []);

  const carregarRecomendacoes = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await recomendacoesAPI.listar();
      setRecomendacoes(data);

    } catch (err) {
      console.error("Erro ao carregar API:", err);

      // 🚨 MOCK usado caso a API falhe
      const MOCK: Recomendacao[] = [
        { id: 1, alunoId: 1, profissaoId: 3, motivo: "Gosta de TI",
          explicacao: "Ideal para quem quer unir tecnologia e cuidado humano. Foque em aprendizado sobre IoT, wearables e ciência de dados aplicada à saúde.",
          status: "PENDENTE",
          compatibilidade: 82,
          passos: ["Aprender IoT", "Explorar wearables", "Estudar Data Science aplicada à saúde"]
        },
        { id: 2, alunoId: 2, profissaoId: 2, motivo: "Perfil clínico",
          explicacao: "Excelente para quem se preocupa com justiça e responsabilidade no uso da tecnologia. Estude ética digital e IA explicável.",
          status: "ACEITA",
          compatibilidade: 70,
          passos: ["Estudar ética digital", "Pesquisar IA explicável"]
        },
        { id: 3, alunoId: 3, profissaoId: 1, motivo: "Raciocínio lógico",
          explicacao: "Perfeita para quem acredita na tecnologia como ferramenta de inclusão. Aprenda sobre design acessível e educação digital.",
          status: "PENDENTE",
          compatibilidade: 60,
          passos: ["Estudar acessibilidade", "Pesquisar educação digital"]
        },
        { id: 4, alunoId: 4, profissaoId: 3, motivo: "Interesse em programação",
          explicacao: "Perfeita para quem vem da área de psicologia ou humanas e quer migrar para o setor tecnológico com foco em bem-estar digital.",
          status: "ACEITA",
          compatibilidade: 85,
          passos: ["Aprender lógica de programação", "Estudar bem-estar digital"]
        },
        { id: 5, alunoId: 5, profissaoId: 5, motivo: "Criatividade elevada",
          explicacao: "Para mentes criativas e sensíveis. Estude design multisensorial e explore tecnologias imersivas para acessibilidade.",
          status: "RECUSADA",
          compatibilidade: 55,
          passos: ["Estudar UX sensorial", "Explorar VR/AR"]
        },
        { id: 6, alunoId: 6, profissaoId: 7, motivo: "Perfil analítico",
          explicacao: "Para quem ama biologia e inovação. Invista em cursos de biotecnologia, impressão 3D e engenharia genética.",
          status: "PENDENTE",
          compatibilidade: 77,
          passos: ["Estudar biotecnologia", "Pesquisar bioengenharia"]
        },
        { id: 7, alunoId: 7, profissaoId: 10, motivo: "Perfil comunicativo",
          explicacao: "Excelente para quem deseja unir tecnologia e cuidado humano. Estude telemedicina e segurança da informação em saúde.",
          status: "ACEITA",
          compatibilidade: 90,
          passos: ["Estudar telemedicina", "Aprender segurança da informação"]
        },
        { id: 8, alunoId: 8, profissaoId: 1, motivo: "Raciocínio forte",
          explicacao: "Ideal para quem tem interesse em genética e ciência de dados. Foque em IA aplicada à biologia e medicina de precisão.",
          status: "ACEITA",
          compatibilidade: 88,
          passos: ["Estudar IA aplicada à biologia", "Aprender ciência de dados médica"]
        },
        { id: 9, alunoId: 9, profissaoId: 6, motivo: "Argumentação forte",
          explicacao: "Perfeita para quem gosta de ensinar e inovar. Explore IA educacional, gamificação e design instrucional.",
          status: "PENDENTE",
          compatibilidade: 63,
          passos: ["Estudar gamificação", "Aprender IA educacional"]
        },
        { id: 10, alunoId: 10, profissaoId: 2, motivo: "Vocação para tecnologia",
          explicacao: "Para quem deseja unir tecnologia e educação. Aprenda sobre IA conversacional e personalização de ensino.",
          status: "ACEITA",
          compatibilidade: 72,
          passos: ["Estudar IA conversacional", "Explorar personalização de ensino"]
        }
      ];

      setRecomendacoes(MOCK);
    } finally {
      setLoading(false);
    }
  };

  // Cores de compatibilidade
  const getCompatibilidadeColor = (compat: number) => {
    if (compat >= 80) return "text-secondary";
    if (compat >= 60) return "text-primary";
    return "text-accent";
  };

  const getCompatibilidadeText = (compat: number) => {
    if (compat >= 80) return "Alta Compatibilidade";
    if (compat >= 60) return "Média Compatibilidade";
    return "Baixa Compatibilidade";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Suas Recomendações
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissões recomendadas baseadas no seu perfil
          </p>
        </div>

        {recomendacoes.length === 0 ? (
          <div className="text-center bg-muted p-12 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">Nenhuma recomendação</h2>
            <p className="text-muted-foreground mb-6">
              Configure a API ou aguarde uma nova análise de perfil.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {recomendacoes.map((rec) => (
              <div
                key={rec.id}
                className="bg-card p-6 md:p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Profissão ID: {rec.profissaoId}
                    </h3>
                    <p className="text-muted-foreground">{rec.motivo}</p>
                  </div>

                  <div className="text-center md:text-right">
                    <div
                      className={`text-4xl font-bold ${getCompatibilidadeColor(
                        rec.compatibilidade
                      )}`}
                    >
                      {rec.compatibilidade}%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {getCompatibilidadeText(rec.compatibilidade)}
                    </p>
                  </div>
                </div>

                {rec.passos?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">
                      Próximos Passos:
                    </h4>
                    <ol className="space-y-2">
                      {rec.passos.map((p, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-muted-foreground">{p}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <Link
                  to={`/profissao/${rec.profissaoId}`}
                  className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                >
                  Ver detalhes da profissão →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recomendacoes;
