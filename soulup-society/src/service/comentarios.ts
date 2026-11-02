import { api } from "./api";
import type { Comentario } from "../types/postagem";

export async function listarComentarios(idPostagem: number): Promise<Comentario[]> {
  const resposta = await fetch(`/api/comentarios/postagem/${idPostagem}`, {
    credentials: "include",
  });

  
  if (resposta.status === 404) {
    console.warn(`GET /comentarios/postagem/${idPostagem} retornou 404 (tratado como lista vazia)`);
    return [];
  }

  if (!resposta.ok) {
    throw new Error(`Erro ao listar comentários (${resposta.status})`);
  }

  const dados = await resposta.json();

  
  if (Array.isArray(dados)) return dados;
  if (dados && Array.isArray(dados.content)) return dados.content;
  return [];
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