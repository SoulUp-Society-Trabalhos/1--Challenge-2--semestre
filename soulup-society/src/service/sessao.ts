import { api } from "./api";

export async function buscarIdConta(): Promise<number | null> {
  try {
    const resposta = await api("/auth/sessao");
    const dados = await resposta.json();

    return dados.idConta ?? null;
  } catch {
    return null;
  }
}
