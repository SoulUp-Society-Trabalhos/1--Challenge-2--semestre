import { api } from "./api";
import type { Carteira } from "../types/carteira.ts";
 
/** GET /carteiras/conta/:idConta — carteira de uma conta. */
export async function buscarCarteiraPorConta(idConta: number): Promise<Carteira> {
  const resposta = await api(`/carteiras/conta/${idConta}`);
  return resposta.json();
}
 
/** PATCH /carteiras/:id/trocar-passagem — desconta pontos e soma uma passagem. */
export async function trocarPassagem(idCarteira: number): Promise<Carteira> {
  const resposta = await api(`/carteiras/${idCarteira}/trocar-passagem`, {
    method: "PATCH",
  });
  return resposta.json();
}
 