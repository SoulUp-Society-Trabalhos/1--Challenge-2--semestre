import { api } from "./api";
import type { Comentario } from "../types/postagem";

export async function listarComentarios(idPostagem: number): Promise<Comentario[]> {
  const resposta = await api(`/comentarios/postagem/${idPostagem}`);
  return resposta.json();
}

export async function criarComentario(
  texto: string,
  idConta: number,
  idPostagem: number,
): Promise<void> {
  await api("/comentarios", {
    method: "POST",
    body: JSON.stringify({
      textoComentario: texto,
      conta: { id: idConta },
      postagem: { id: idPostagem },
    }),
  });
}