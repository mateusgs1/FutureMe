// Central API service for consuming Java backend (DDD + Quarkus)
// Using fetch() for all HTTP requests

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

// Generic error handler
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Erro ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

// Generic fetch wrapper
const apiFetch = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });
    return handleResponse<T>(response);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Types
export interface Profissao {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  demanda: string;
  salarioMedio?: number;
  habilidadesRequeridas?: string[];
  tendencias?: string;
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  perfil?: string;
  interesses?: string[];
  experiencia?: string;
}

export interface Rotina {
  id: number;
  usuarioId: number;
  descricao: string;
  tipo: "trabalho" | "pausa" | "exercicio" | "estudo";
  horario?: string;
  duracao?: number;
}

export interface Recomendacao {
  id: number;
  usuarioId: number;
  profissaoId: number;
  compatibilidade: number;
  motivo: string;
  passos?: string[];
}

// API Methods - Profissões
export const profissoesAPI = {
  listar: () => apiFetch<Profissao[]>("/profissoes"),
  buscarPorId: (id: number) => apiFetch<Profissao>(`/profissoes/${id}`),
  criar: (data: Omit<Profissao, "id">) =>
    apiFetch<Profissao>("/profissoes", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  atualizar: (id: number, data: Partial<Profissao>) =>
    apiFetch<Profissao>(`/profissoes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deletar: (id: number) =>
    apiFetch<void>(`/profissoes/${id}`, { method: "DELETE" }),
};

// API Methods - Usuários
export const usuariosAPI = {
  listar: () => apiFetch<Usuario[]>("/usuarios"),
  buscarPorId: (id: number) => apiFetch<Usuario>(`/usuarios/${id}`),
  criar: (data: Omit<Usuario, "id">) =>
    apiFetch<Usuario>("/usuarios", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  atualizar: (id: number, data: Partial<Usuario>) =>
    apiFetch<Usuario>(`/usuarios/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deletar: (id: number) =>
    apiFetch<void>(`/usuarios/${id}`, { method: "DELETE" }),
};

// API Methods - Rotinas
export const rotinasAPI = {
  listar: (usuarioId?: number) => {
    const endpoint = usuarioId ? `/rotinas?usuarioId=${usuarioId}` : "/rotinas";
    return apiFetch<Rotina[]>(endpoint);
  },
  buscarPorId: (id: number) => apiFetch<Rotina>(`/rotinas/${id}`),
  criar: (data: Omit<Rotina, "id">) =>
    apiFetch<Rotina>("/rotinas", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  atualizar: (id: number, data: Partial<Rotina>) =>
    apiFetch<Rotina>(`/rotinas/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deletar: (id: number) =>
    apiFetch<void>(`/rotinas/${id}`, { method: "DELETE" }),
};

// API Methods - Recomendações
export const recomendacoesAPI = {
  listar: (usuarioId?: number) => {
    const endpoint = usuarioId
      ? `/recomendacoes?usuarioId=${usuarioId}`
      : "/recomendacoes";
    return apiFetch<Recomendacao[]>(endpoint);
  },
  buscarPorId: (id: number) => apiFetch<Recomendacao>(`/recomendacoes/${id}`),
  criar: (data: Omit<Recomendacao, "id">) =>
    apiFetch<Recomendacao>("/recomendacoes", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  atualizar: (id: number, data: Partial<Recomendacao>) =>
    apiFetch<Recomendacao>(`/recomendacoes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deletar: (id: number) =>
    apiFetch<void>(`/recomendacoes/${id}`, { method: "DELETE" }),
};