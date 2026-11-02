import { api } from "./api";
import type { Postagem } from "../types/postagem";

export async function buscarPostagem(id: number): Promise<Postagem | null> {
  const resposta = await api(`/postagens/${id}`);
  const texto = await resposta.text();
  return texto ? (JSON.parse(texto) as Postagem) : null;
}