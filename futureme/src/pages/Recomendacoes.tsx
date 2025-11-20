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
      setError(
        "Não foi possível carregar as recomendações. Verifique se a API está configurada."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getCompatibilidadeColor = (compatibilidade: number) => {
    if (compatibilidade >= 80) return "text-secondary";
    if (compatibilidade >= 60) return "text-primary";
    return "text-accent";
  };

  const getCompatibilidadeText = (compatibilidade: number) => {
    if (compatibilidade >= 80) return "Alta Compatibilidade";
    if (compatibilidade >= 60) return "Média Compatibilidade";
    return "Baixa Compatibilidade";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando recomendações...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-2 text-destructive">
                Erro ao Carregar
              </h2>
              <p className="text-muted-foreground mb-4">{error}</p>
              <button
                onClick={carregarRecomendacoes}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        </div>
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
            Profissões recomendadas baseadas no seu perfil e interesses
          </p>
        </div>

        {recomendacoes.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center bg-muted p-12 rounded-xl">
            <svg
              className="w-16 h-16 text-muted-foreground mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">
              Nenhuma recomendação disponível
            </h2>
            <p className="text-muted-foreground mb-6">
              Configure a URL da API no arquivo .env para carregar recomendações
              personalizadas
            </p>
            <Link
              to="/profissoes"
              className="inline-block px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-primary hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Explorar Profissões
            </Link>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {recomendacoes.map((rec) => (
              <div
                key={rec.id}
                className="bg-card p-6 md:p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      Profissão ID: {rec.profissaoId}
                    </h3>
                    <p className="text-muted-foreground mb-4">{rec.motivo}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div
                      className={`text-4xl font-bold mb-1 ${getCompatibilidadeColor(
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

                {rec.passos && rec.passos.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg">
                      Próximos Passos:
                    </h4>
                    <ol className="space-y-2">
                      {rec.passos.map((passo, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{passo}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <Link
                  to={`/profissao/${rec.profissaoId}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  Ver detalhes da profissão
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
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