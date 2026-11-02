import { api } from "./api";
import type { Comentario } from "../types/postagem";

export async function listarComentarios(idPostagem: number): Promise<Comentario[]> {
  const resposta = await api(`/comentarios/postagem/${idPostagem}`);

  if (!resposta.ok) {
    throw new Error(`Erro ao listar comentários (${resposta.status})`);
  }

  return resposta.json();
}

export async function criarComentario(
  texto: string,
  idConta: number,
  idPostagem: number,
): Promise<void> {
  const resposta = await api("/comentarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      textoComentario: texto,
      conta: { id: idConta },
      postagem: { id: idPostagem },
    }),
  });

  if (!resposta.ok) {
    throw new Error(`Erro ao criar comentário (${resposta.status})`);
  }
}