
import { useEffect, useState } from "react";
import { Link } from "react-router";

import { FaBookmark, FaHeart, FaUserAlt } from "react-icons/fa";
import { FaRegCommentDots, FaShare } from "react-icons/fa6";

import type { Postagem } from "../../../types/postagem";
import {
  buscarPostagens,
  criarPostagem,
} from "../../../service/postagens";
import { buscarIdConta } from "../../../service/sessao";

export default function Feed() {
  document.title = "SoulUp - Feed";

  const [posts, setPosts] = useState<Postagem[]>([]);
  const [texto, setTexto] = useState("");
  const [idConta, setIdConta] = useState<number | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  async function carregarPosts() {
    try {
      const dados = await buscarPostagens();

      setPosts([...dados].sort((a, b) => b.id - a.id));
    } catch (e) {
      console.error("Erro ao carregar postagens:", e);
      setErro("Não foi possível carregar as postagens.");
    }
  }

  useEffect(() => {
    async function iniciar() {
      try {
        const id = await buscarIdConta();
        setIdConta(id);

        await carregarPosts();
      } finally {
        setCarregando(false);
      }
    }

    iniciar();
  }, []);

  async function postar() {
    setErro("");

    if (!texto.trim()) {
      setErro("Escreva algo para postar.");
      return;
    }

    if (idConta === null) {
      setErro("Não foi possível identificar sua conta. Faça login de novo.");
      return;
    }

    setEnviando(true);

    try {
      await criarPostagem(texto, idConta);

      setTexto("");
      await carregarPosts();
    } catch (e) {
      console.error("Erro ao postar:", e);
      setErro("Não foi possível publicar a postagem.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-4 bg-gray-100 p-3 sm:p-4 md:flex-row md:gap-6 md:p-6">

      {/* Menu lateral */}
      <aside className="w-full shrink-0 md:w-48 lg:w-56">
        <h1 className="mb-3 text-xl font-bold text-indigo-600 sm:text-2xl md:mb-8">
          SoulUp Society
        </h1>

        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-col md:gap-3">
          <Link
            to="/app/feed"
            className="rounded-lg bg-indigo-100 p-3 text-sm font-medium text-indigo-700 sm:text-base"
          >
            Início
          </Link>

          <Link
            to="/app/carteira"
            className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base"
          >
            Carteira
          </Link>

          <Link
            to="/app/missoes"
            className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base"
          >
            Missões
          </Link>

          <Link
            to="/app/salvos"
            className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base"
          >
            Itens Salvos
          </Link>

          <Link
            to="/app/conta"
            className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base"
          >
            Conta
          </Link>
        </nav>
      </aside>

      {/* Conteúdo do Feed */}
      <section className="w-full min-w-0 rounded-xl bg-white shadow-sm">
        <h2 className="border-b border-gray-200 p-4 text-lg font-bold sm:p-5 sm:text-xl">
          Página inicial
        </h2>

        {/* Campo para criar postagem */}
        <div className="border-b border-gray-200 p-4 sm:p-5">
          <textarea
            placeholder="E aí? Fale um pouco de hoje!"
            className="w-full resize-none text-sm outline-none sm:text-base"
            rows={3}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />

          {erro && (
            <p className="mb-2 text-sm text-red-600" role="alert">
              {erro}
            </p>
          )}

          <div className="text-right">
            <button
              type="button"
              onClick={postar}
              disabled={enviando}
              className="rounded-full bg-indigo-600 px-5 py-2 text-sm text-white transition hover:bg-indigo-700 disabled:opacity-50 sm:text-base"
            >
              {enviando ? "Postando..." : "Postar"}
            </button>
          </div>
        </div>

        {carregando && (
          <p className="p-5 text-center text-gray-500">
            Carregando postagens...
          </p>
        )}

        {!carregando && !erro && posts.length === 0 && (
          <p className="p-5 text-center text-gray-500">
            Nenhuma postagem ainda. Seja o primeiro!
          </p>
        )}

        {/* Lista de postagens */}
        {posts.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 p-4 sm:p-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <FaUserAlt className="shrink-0 text-lg text-indigo-600 sm:text-xl" />

              <p className="break-all text-sm font-semibold sm:text-base">
                {post.conta?.nomeConta}
              </p>

              <span className="text-xs text-gray-500 sm:text-sm">
                {post.dataPostagem}
              </span>
            </div>

            <Link
              to={`/app/postagem/${post.id}`}
              className="my-3 block whitespace-pre-wrap wrap-break-word text-sm hover:underline sm:text-base"
            >
              {post.descricaoTexto}
            </Link>

            <div className="mt-3 flex items-center gap-6 text-gray-500 sm:gap-8">
              <span className="flex items-center gap-1 text-sm">
                <FaHeart className="text-lg text-indigo-600" />
                {post.quantidadeCurtidas}
              </span>

              <Link
                to={`/app/postagem/${post.id}`}
                aria-label="Ver comentários"
              >
                <FaRegCommentDots className="text-lg text-indigo-600" />
              </Link>

              <FaShare
                className="text-lg text-indigo-600"
                aria-label="Compartilhar"
              />

              <FaBookmark
                className="text-lg text-indigo-600"
                aria-label="Salvar postagem"
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
