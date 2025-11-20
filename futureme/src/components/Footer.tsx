import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FM</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FutureMe
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Preparando você para as profissões do futuro com equilíbrio,
              bem-estar e rotinas produtivas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/profissoes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Profissões
                </Link>
              </li>
              <li>
                <Link
                  to="/rotina"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Rotina
                </Link>
              </li>
              <li>
                <Link
                  to="/recomendacoes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Recomendações
                </Link>
              </li>
              <li>
                <Link
                  to="/integrantes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Integrantes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} FutureMe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
