import { api } from "./api";
import type { Missao } from "../types/missao";

export interface ContaDesafio {
  id: number;
  idConta: number;
  idDesafio: number;
  nomeDesafio: string;
  pontosRecebidos: number;
  dataConclusao: string;
}

// GET /desafios
export async function listarMissoes(): Promise<Missao[]> {
  const resposta = await api("/desafios");
  return resposta.json();
}

// GET /contas/{idConta}/desafios
export async function listarMissoesConcluidas(
  idConta: number
): Promise<ContaDesafio[]> {
  const resposta = await api(`/contas/${idConta}/desafios`);
  return resposta.json();
}

// POST /contas/{idConta}/desafios/{idDesafio}/concluir
export async function concluirMissao(
  idConta: number,
  idDesafio: number
): Promise<ContaDesafio> {
  const resposta = await api(
    `/contas/${idConta}/desafios/${idDesafio}/concluir`,
    {
      method: "POST",
    }
  );

  return resposta.json();
}