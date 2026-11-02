import { api } from "./api";
import type { Comentario } from "../types/postagem";

function extrairLista(dados: unknown): Comentario[] {
  if (Array.isArray(dados)) return dados as Comentario[];
  const conteudo = (dados as { content?: unknown })?.content;
  if (Array.isArray(conteudo)) return conteudo as Comentario[];
  return [];
}

export async function listarComentarios(idPostagem: number): Promise<Comentario[]> {
  // 1) Tenta o endpoint específico da postagem
  const resposta = await fetch(`/api/comentarios/postagem/${idPostagem}`, {
    credentials: "include",
  });

  if (resposta.ok) {
    return extrairLista(await resposta.json());
  }

  if (resposta.status !== 404) {
    throw new Error(`Erro ao listar comentários (${resposta.status})`);
  }

  // 2) Se deu 404, busca todos os comentários e filtra pela postagem
  console.warn(
    `GET /comentarios/postagem/${idPostagem} deu 404; tentando GET /comentarios e filtrando no front`,
  );

  const todos = await fetch("/api/comentarios", { credentials: "include" });

  if (todos.status === 404) return [];
  if (!todos.ok) {
    throw new Error(`Erro ao listar comentários (${todos.status})`);
  }

  const lista = extrairLista(await todos.json());
  console.log("Comentários recebidos de /comentarios:", lista);

  return lista.filter((c) => {
    const item = c as Comentario & {
      postagem?: { id?: number };
      idPostagem?: number;
    };
    const idDoComentario = item.postagem?.id ?? item.idPostagem;
    return idDoComentario === idPostagem;
  });
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