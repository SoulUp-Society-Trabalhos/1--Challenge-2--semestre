import { api } from "./api";
import type { Missao } from "../types/missao";

/** GET /desafios — lista as missões disponíveis. */
export async function listarMissoes(): Promise<Missao[]> {
  const resposta = await api("/desafios");
  return resposta.json();
}