import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Prepare-se para o
              <span className="block mt-2">Futuro do Trabalho</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Descubra profissões emergentes, organize sua rotina e equilibre
              vida pessoal e profissional com o FutureMe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/profissoes"
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Explorar Profissões
              </Link>
              <Link
                to="/sobre"
                className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-lg border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como o FutureMe te ajuda?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary-foreground"
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
              <h3 className="text-xl font-semibold mb-3">
                Profissões do Futuro
              </h3>
              <p className="text-muted-foreground">
                Descubra carreiras emergentes compatíveis com seu perfil e
                interesses. Receba recomendações personalizadas baseadas em IA.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-16 h-16 bg-gradient-secondary rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-secondary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Organização de Rotina
              </h3>
              <p className="text-muted-foreground">
                Crie rotinas mais saudáveis e produtivas. Planeje pausas,
                exercícios e momentos de foco para melhor desempenho.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-accent-foreground"
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
              </div>
              <h3 className="text-xl font-semibold mb-3">Bem-estar e Equilíbrio</h3>
              <p className="text-muted-foreground">
                Mantenha qualidade de vida com sugestões de hábitos saudáveis,
                principalmente em modelos de trabalho híbrido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu futuro?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Comece agora a explorar novas oportunidades e organizar sua vida
              profissional com equilíbrio.
            </p>
            <Link
              to="/profissoes"
              className="inline-block px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-primary hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
