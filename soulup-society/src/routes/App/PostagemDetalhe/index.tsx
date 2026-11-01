import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { FaHeart, FaUserAlt } from "react-icons/fa";

import { buscarPostagem } from "../../../service/postagens";
import { criarComentario, listarComentarios } from "../../../service/comentarios";
import { buscarIdConta } from "../../../service/sessao";
import type {
  Comentario,
  EstadoTela,
  PostagemExibida,
} from "../../../types/postagem";

function formatarData(data: string): string {
  return new Date(data + "T00:00:00").toLocaleDateString("pt-BR");
}

export default function PostagemDetalhe() {
  const { id } = useParams<{ id: string }>();
  const idNumero = Number(id);
  const idValido = Number.isInteger(idNumero) && idNumero > 0;

  const [post, setPost] = useState<PostagemExibida | null>(null);
  const [estado, setEstado] = useState<EstadoTela>("carregando");

  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [texto, setTexto] = useState("");
  const [idConta, setIdConta] = useState<number | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [erroComentario, setErroComentario] = useState("");

  useEffect(() => {
    if (!idValido) return;
    document.title = `SoulUp - Postagem ${idNumero}`;

    async function carregar() {
      try {
        const [dados, lista, conta] = await Promise.all([
          buscarPostagem(idNumero),
          listarComentarios(idNumero).catch(() => []),
          buscarIdConta(),
        ]);

        if (!dados) {
          setEstado("vazio");
          return;
        }

        setPost({ ...dados, dataFormatada: formatarData(dados.dataPostagem) });
        setComentarios(lista);
        setIdConta(conta);
        setEstado("ok");
      } catch {
        setEstado("erro");
      }
    }

    carregar();
  }, [idNumero, idValido]);

  async function comentar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErroComentario("");

    if (!texto.trim()) {
      setErroComentario("Escreva algo para comentar.");
      return;
    }

    if (idConta === null) {
      setErroComentario("Não foi possível identificar sua conta. Faça login de novo.");
      return;
    }

    setEnviando(true);

    try {
      await criarComentario(texto.trim(), idConta, idNumero);
      setTexto("");
      setComentarios(await listarComentarios(idNumero));
    } catch {
      setErroComentario("Não foi possível publicar o comentário.");
    } finally {
      setEnviando(false);
    }
  }

  if (!idValido) {
    return <Navigate to="/app/feed" replace />;
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-gray-100 p-4 sm:p-6">
      <Link to="/app/feed" className="text-indigo-600 hover:underline">
        ← Voltar para o feed
      </Link>

      <section className="mt-4 rounded-xl bg-white p-5 shadow-sm sm:p-8">
        {estado === "carregando" && (
          <p className="py-8 text-center text-gray-500">Carregando postagem...</p>
        )}

        {estado === "erro" && (
          <p role="alert" className="rounded-lg bg-red-50 p-4 text-red-700">
            Não foi possível carregar a postagem {idNumero}. Ela pode não
            existir ou a API está indisponível.
          </p>
        )}

        {estado === "vazio" && (
          <p className="py-8 text-center text-gray-500">
            A postagem {idNumero} não foi encontrada.
          </p>
        )}

        {estado === "ok" && post && (
          <>
            <article>
              <div className="flex items-center gap-2">
                <FaUserAlt className="text-xl text-indigo-600" />
                <p className="font-semibold">{post.conta?.nomeConta}</p>
                <span className="text-sm text-gray-500">{post.dataFormatada}</span>
              </div>

              <p className="my-4 whitespace-pre-wrap text-lg">
                {post.descricaoTexto}
              </p>

              <span className="flex items-center gap-1 text-gray-500">
                <FaHeart className="text-xl text-indigo-600" />
                {post.quantidadeCurtidas} curtidas
              </span>
            </article>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="mb-4 text-xl font-bold">
                Comentários ({comentarios.length})
              </h2>

              <form onSubmit={comentar} className="mb-6">
                <textarea
                  placeholder="Escreva um comentário..."
                  rows={3}
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  className="w-full resize-none rounded-lg border border-gray-300 p-3"
                />

                {erroComentario && (
                  <p role="alert" className="mb-2 text-sm text-red-600">
                    {erroComentario}
                  </p>
                )}

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={enviando}
                    className="rounded-full bg-indigo-600 px-5 py-2 text-white disabled:opacity-50"
                  >
                    {enviando ? "Enviando..." : "Comentar"}
                  </button>
                </div>
              </form>

              {comentarios.length === 0 && (
                <p className="py-4 text-center text-gray-500">
                  Nenhum comentário ainda. Seja o primeiro!
                </p>
              )}

              {comentarios.map((comentario) => (
                <div
                  key={comentario.id}
                  className="border-b border-gray-100 py-4 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <FaUserAlt className="text-indigo-600" />
                    <p className="font-semibold">{comentario.conta?.nomeConta}</p>
                    <span className="text-sm text-gray-500">
                      {formatarData(comentario.dataComentario)}
                    </span>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap">
                    {comentario.textoComentario}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}