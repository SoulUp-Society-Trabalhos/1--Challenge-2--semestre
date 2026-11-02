
import { api } from "./api";
import type { Postagem } from "../types/postagem";

// Buscar todas as postagens
export async function buscarPostagens(): Promise<Postagem[]> {
  const resposta = await api("/postagens");
  return resposta.json();
}

// Buscar uma postagem pelo ID
export async function buscarPostagem(id: number): Promise<Postagem | null> {
  const resposta = await api(`/postagens/${id}`);
  const texto = await resposta.text();

  return texto ? (JSON.parse(texto) as Postagem) : null;
}

// Criar uma postagem
export async function criarPostagem(
  descricaoTexto: string,
  idConta: number
): Promise<void> {
  await api("/postagens", {
    method: "POST",
    body: JSON.stringify({
      descricaoTexto,
      conta: { id: idConta }
    })
  });
}
