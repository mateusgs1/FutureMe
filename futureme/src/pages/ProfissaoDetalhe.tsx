import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { profissoesAPI, Profissao } from "@/services/api";

const ProfissaoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const [profissao, setProfissao] = useState<Profissao | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      carregarProfissao(parseInt(id));
    }
  }, [id]);

  const carregarProfissao = async (profissaoId: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await profissoesAPI.buscarPorId(profissaoId);
      setProfissao(data);
    } catch (err) {
      setError("Não foi possível carregar os detalhes da profissão.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando detalhes...</p>
        </div>
      </div>
    );
  }

  if (error || !profissao) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-2 text-destructive">
                Profissão não encontrada
              </h2>
              <p className="text-muted-foreground mb-4">
                {error || "A profissão solicitada não existe."}
              </p>
              <Link
                to="/profissoes"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Voltar para Profissões
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/profissoes"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar para Profissões
        </Link>

        <div className="bg-card p-8 md:p-12 rounded-xl shadow-lg border border-border">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {profissao.nome}
              </h1>
              {profissao.categoria && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {profissao.categoria}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                Descrição
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {profissao.descricao}
              </p>
            </section>

            {profissao.demanda && (
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-secondary">
                  Demanda de Mercado
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {profissao.demanda}
                </p>
              </section>
            )}

            {profissao.salarioMedio && (
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-accent">
                  Salário Médio
                </h2>
                <p className="text-2xl font-bold text-accent">
                  R$ {profissao.salarioMedio.toLocaleString("pt-BR")}
                </p>
              </section>
            )}

            {profissao.habilidadesRequeridas &&
              profissao.habilidadesRequeridas.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    Habilidades Requeridas
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {profissao.habilidadesRequeridas.map((habilidade, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
                      >
                        {habilidade}
                      </span>
                    ))}
                  </div>
                </section>
              )}

            {profissao.tendencias && (
              <section>
                <h2 className="text-2xl font-semibold mb-3">Tendências</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {profissao.tendencias}
                </p>
              </section>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <Link
              to="/recomendacoes"
              className="inline-block px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-primary hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Ver Recomendações Personalizadas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfissaoDetalhe;