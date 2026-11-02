
import { api } from "./api";
import type { DadosConta } from "../types/conta";

// Buscar os dados da conta
export async function buscarDadosConta(): Promise<DadosConta> {
  return await (await api("/auth/me")).json();
}

// Encerrar a sessão
export async function sairDaConta(): Promise<void> {
  await api("/auth/logout", {
    method: "POST",
  });
}
