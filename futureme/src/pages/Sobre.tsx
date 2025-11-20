const Sobre = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Sobre o FutureMe
        </h1>

        <div className="space-y-8">
          <section className="bg-card p-8 rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Nossa Missão
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O FutureMe nasceu com o propósito de preparar pessoas para as
              profissões do futuro, oferecendo uma plataforma completa de
              orientação profissional e organização de rotina. Acreditamos que o
              sucesso profissional está diretamente ligado ao equilíbrio entre
              vida pessoal e trabalho.
            </p>
          </section>

          <section className="bg-card p-8 rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              O que fazemos
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  🎯 Recomendações Personalizadas
                </h3>
                <p className="leading-relaxed">
                  Analisamos suas características, experiências e preferências
                  para recomendar profissões emergentes que se alinham com seu
                  perfil.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  📅 Organização de Rotina
                </h3>
                <p className="leading-relaxed">
                  Ajudamos você a estruturar uma rotina produtiva e saudável,
                  com sugestões de pausas, exercícios e momentos de foco.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  💚 Bem-estar e Qualidade de Vida
                </h3>
                <p className="leading-relaxed">
                  Fornecemos orientações para manter o equilíbrio entre vida
                  pessoal e profissional, especialmente em modelos de trabalho
                  híbrido.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card p-8 rounded-xl shadow-md border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-accent">
              Tecnologia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O FutureMe é construído com tecnologias modernas e uma arquitetura
              robusta:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Frontend: React, TypeScript e TailwindCSS</li>
              <li>Backend: Java com DDD e Quarkus</li>
              <li>Integração via API RESTful</li>
              <li>Design responsivo e acessível</li>
            </ul>
          </section>

          <section className="bg-gradient-hero p-8 rounded-xl shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-4">Junte-se a nós</h2>
            <p className="leading-relaxed mb-4">
              Estamos comprometidos em ajudar você a construir um futuro
              profissional mais equilibrado e alinhado com as demandas do mercado
              de trabalho moderno.
            </p>
            <p className="leading-relaxed">
              Explore nossas funcionalidades e descubra como podemos te ajudar a
              alcançar seus objetivos profissionais com qualidade de vida.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
