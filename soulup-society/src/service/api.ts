const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function api(endpoint: string, options: RequestInit = {}) {
  const resposta = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
  });

  if (!resposta.ok) {
    throw new Error(`Erro na requisição (${resposta.status})`);
  }

  return resposta;
}