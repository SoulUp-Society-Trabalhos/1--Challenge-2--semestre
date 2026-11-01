import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { FaHeart, FaUserAlt } from "react-icons/fa";

import { buscarPostagem } from "../../../service/postagens";
import type { EstadoTela, PostagemExibida } from "../../../types/postagem";

export default function PostagemDetalhe() {
  const { id } = useParams<{ id: string }>();
  const idNumero = Number(id);
  const idValido = Number.isInteger(idNumero) && idNumero > 0;

  const [post, setPost] = useState<PostagemExibida | null>(null);
  const [estado, setEstado] = useState<EstadoTela>("carregando");

  useEffect(() => {
    if (!idValido) return;
    document.title = `SoulUp - Postagem ${idNumero}`;

    async function carregar() {
      try {
        const dados = await buscarPostagem(idNumero);

        if (!dados) {
          setEstado("vazio");
          return;
        }

        setPost({
          ...dados,
          dataFormatada: new Date(
            dados.dataPostagem + "T00:00:00",
          ).toLocaleDateString("pt-BR"),
        });
        setEstado("ok");
      } catch {
        setEstado("erro");
      }
    }

    carregar();
  }, [idNumero, idValido]);

  // Redirecionamento: id inválido na URL volta para o feed
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
          <p className="py-8 text-center text-gray-500">
            Carregando postagem...
          </p>
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
          <article>
            <div className="flex items-center gap-2">
              <FaUserAlt className="text-xl text-indigo-600" />
              <p className="font-semibold">{post.conta?.nomeConta}</p>
              <span className="text-sm text-gray-500">
                {post.dataFormatada}
              </span>
            </div>

            <p className="my-4 whitespace-pre-wrap text-lg">
              {post.descricaoTexto}
            </p>

            <span className="flex items-center gap-1 text-gray-500">
              <FaHeart className="text-xl text-indigo-600" />
              {post.quantidadeCurtidas} curtidas
            </span>
          </article>
        )}
      </section>
    </main>
  );
}