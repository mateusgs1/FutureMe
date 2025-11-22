import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarioAPI, Usuario } from "@/services/api";

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Usuario>({
    loginUsua: "",
    senhaUsua: "",
    nomeUsua: "",
    cpfUsua: "",
    emailUsua: "",
    telefoneUsua: "",
    profissaoAntigaUsua: "",
    areaInteresseUsua: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

 //  URL do backend Quarkus
  const API_URL = `http://localhost:8080/usuario}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Erro ao cadastrar");
      }

      setStatus("success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err: any) {
      console.error("Erro ao enviar cadastro:", err);
      setStatus("error");
      setErrorMessage(err.message || "Falha ao se conectar ao servidor");
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Cadastro de Usuário
          </h1>
          <p className="text-xl text-muted-foreground">
            Preencha seus dados para criar sua conta
          </p>
        </div>

        <div className="bg-card p-8 rounded-xl shadow-md border border-border">
          {status === "success" && (
            <div className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-lg text-secondary">
              ✅ Cadastro realizado com sucesso! Redirecionando...
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive rounded-lg text-destructive">
              ❌ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="loginUsua"
                  className="block text-sm font-medium mb-2"
                >
                  Login / Usuário *
                </label>
                <input
                  type="text"
                  id="loginUsua"
                  name="loginUsua"
                  value={formData.loginUsua}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="senhaUsua"
                  className="block text-sm font-medium mb-2"
                >
                  Senha *
                </label>
                <input
                  type="password"
                  id="senhaUsua"
                  name="senhaUsua"
                  value={formData.senhaUsua}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="nomeUsua"
                  className="block text-sm font-medium mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nomeUsua"
                  name="nomeUsua"
                  value={formData.nomeUsua}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="cpfUsua"
                  className="block text-sm font-medium mb-2"
                >
                  CPF *
                </label>
                <input
                  type="text"
                  id="cpfUsua"
                  name="cpfUsua"
                  value={formData.cpfUsua}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="emailUsua"
                  className="block text-sm font-medium mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="emailUsua"
                  name="emailUsua"
                  value={formData.emailUsua}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="telefoneUsua"
                  className="block text-sm font-medium mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefoneUsua"
                  name="telefoneUsua"
                  value={formData.telefoneUsua}
                  onChange={handleChange}
                  required
                  pattern="\(\d{2}\)\s\d{4,5}-\d{4}|\d{10,11}"
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="profissaoAntigaUsua"
                  className="block text-sm font-medium mb-2"
                >
                  Profissão Anterior
                </label>
                <input
                  type="text"
                  id="profissaoAntigaUsua"
                  name="profissaoAntigaUsua"
                  value={formData.profissaoAntigaUsua}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="areaInteresseUsua"
                  className="block text-sm font-medium mb-2"
                >
                  Área de Interesse
                </label>
                <input
                  type="text"
                  id="areaInteresseUsua"
                  name="areaInteresseUsua"
                  value={formData.areaInteresseUsua}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;