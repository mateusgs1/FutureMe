import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import FAQ from "@/pages/FAQ";
import Contato from "@/pages/Contato";
import Integrantes from "@/pages/Integrantes";
import Profissoes from "@/pages/Profissoes";
import ProfissaoDetalhe from "@/pages/ProfissaoDetalhe";
import Rotina from "@/pages/Rotina";
import Recomendacoes from "@/pages/Recomendacoes";
import NotFound from "@/pages/NotFound";



const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/profissoes" element={<Profissoes />} />
            <Route path="/profissao/:id" element={<ProfissaoDetalhe />} />
            <Route path="/rotina" element={<Rotina />} />
            <Route path="/recomendacoes" element={<Recomendacoes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;