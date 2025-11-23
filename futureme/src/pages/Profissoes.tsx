import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { profissoesAPI, Profissao } from "@/services/api";

const Profissoes = () => {
  const [profissoes, setProfissoes] = useState<Profissao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    carregarProfissoes();
  }, []);

  const carregarProfissoes = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await profissoesAPI.listar();
      setProfissoes(data);
    } catch (err) {
      console.error("Erro na API:", err);


// MOCK: dados falsos para funcionar sem API
    const MOCK = [
       {
    id: 1,
    nome: "Engenheiro de IA",
    descricao: "Desenvolve modelos e sistemas de inteligência artificial.",
    categoria: "Tecnologia",
  },
  {
    id: 2,
    nome: "Cientista de Dados",
    descricao: "Analisa grandes volumes de dados para gerar insights.",
    categoria: "Tecnologia",
  },
  {
    id: 3,
    nome: "Desenvolvedor Full Stack",
    descricao: "Cria aplicações completas, do backend ao frontend.",
    categoria: "Tecnologia",
  },

  // ======================
  // SAÚDE E TECNOLOGIA
  // ======================
  {
    id: 4,
    nome: "Analista de Telemedicina",
    descricao:
      "Apoia equipes de saúde com tecnologias de atendimento remoto.",
    categoria: "Saúde e Tecnologia",
  },
  {
    id: 5,
    nome: "Especialista em Dispositivos Médicos",
    descricao:
      "Trabalha com sensores, wearables e equipamentos conectados.",
    categoria: "Saúde e Tecnologia",
  },
  {
    id: 6,
    nome: "Desenvolvedor HealthTech",
    descricao: "Cria sistemas e apps focados em saúde digital.",
    categoria: "Saúde e Tecnologia",
  },

  // ======================
  // EDUCAÇÃO E TECNOLOGIA
  // ======================
  {
    id: 7,
    nome: "Designer Instrucional",
    descricao: "Cria conteúdos educacionais digitais e interativos.",
    categoria: "Educação e Tecnologia",
  },
  {
    id: 8,
    nome: "Especialista em EdTech",
    descricao: "Desenvolve soluções tecnológicas para ensino online.",
    categoria: "Educação e Tecnologia",
  },
  {
    id: 9,
    nome: "Tutor Virtual",
    descricao: "Acompanha alunos em plataformas digitais de ensino.",
    categoria: "Educação e Tecnologia",
  },

  // ======================
  // NEGÓCIOS E TECNOLOGIA
  // ======================
  {
    id: 10,
    nome: "Analista de Transformação Digital",
    descricao: "Ajuda empresas a implementar novas tecnologias.",
    categoria: "Negócios e Tecnologia",
  },
  {
    id: 11,
    nome: "Product Owner",
    descricao: "Conduz produtos digitais alinhados ao negócio.",
    categoria: "Negócios e Tecnologia",
  },
  {
    id: 12,
    nome: "Consultor de Inovação",
    descricao: "Auxilia empresas a explorar soluções inovadoras.",
    categoria: "Negócios e Tecnologia",
  },

  // ======================
  // ARTE E TECNOLOGIA
  // ======================
  {
    id: 13,
    nome: "Designer de Experiências Imersivas",
    descricao: "Trabalha com VR, AR e experiências sensoriais.",
    categoria: "Arte e Tecnologia",
  },
  {
    id: 14,
    nome: "Artista Digital",
    descricao: "Cria artes e animações com ferramentas digitais.",
    categoria: "Arte e Tecnologia",
  },
  {
    id: 15,
    nome: "Modelador 3D",
    descricao: "Desenvolve modelos tridimensionais para jogos e animações.",
    categoria: "Arte e Tecnologia",
  },

  // ======================
  // SUSTENTABILIDADE E TECNOLOGIA
  // ======================
  {
    id: 16,
    nome: "Especialista em Energia Renovável",
    descricao:
      "Pesquisa e opera tecnologias limpas e sustentáveis.",
    categoria: "Sustentabilidade e Tecnologia",
  },
  {
    id: 17,
    nome: "Analista de Sustentabilidade",
    descricao:
      "Avalia impacto ambiental e cria soluções sustentáveis.",
    categoria: "Sustentabilidade e Tecnologia",
  },
  {
    id: 18,
    nome: "Engenheiro Ambiental Digital",
    descricao:
      "Usa IoT e sensores para monitoramento ambiental inteligente.",
    categoria: "Sustentabilidade e Tecnologia",
  },
];

      // Usa mock ao falhar API
      setProfissoes(MOCK);

      // Define erro apenas para exibição opcional
      setError("Não foi possível carregar da API, usando dados mockados.");
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // ESTADOS DE LOADING / ERRO
  // ===========================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando profissões...</p>
        </div>
      </div>
    );
  }

  if (!loading && error && profissoes.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8">
              <svg
                className="w-16 h-16 text-destructive mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h2 className="text-xl font-semibold mb-2 text-destructive">Erro ao carregar</h2>
              <p className="text-muted-foreground mb-4">{error}</p>

              <button
                onClick={carregarProfissoes}
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

  // ===========================
  // LISTAGEM FINAL
  // ===========================

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Profissões do Futuro
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore carreiras emergentes e descubra qual se alinha melhor com seu perfil
          </p>

          {error && (
            <p className="text-yellow-500 mt-2 text-sm">
              ⚠ Usando dados mockados porque a API falhou
            </p>
          )}
        </div>

        {profissoes.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center bg-muted p-12 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">Nenhuma profissão encontrada</h2>
            <p className="text-muted-foreground">
              Configure a URL da API no arquivo .env para carregar as profissões
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profissoes.map((profissao) => (
              <Link
                key={profissao.id}
                to={`/profissao/${profissao.id}`}
                className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{profissao.nome}</h3>
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {profissao.descricao}
                </p>

                {profissao.categoria && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {profissao.categoria}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profissoes;
