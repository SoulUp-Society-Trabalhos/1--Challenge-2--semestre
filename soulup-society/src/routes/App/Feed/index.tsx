import { useEffect, useState } from "react";
import { Link } from "react-router";

import { FaBookmark, FaHeart } from "react-icons/fa";
import { FaRegCommentDots, FaShare } from "react-icons/fa6";

interface Postagem {
  id: number;
  descricaoTexto: string;
  dataPostagem: string;
  quantidadeCurtidas: number;
  conta: { id: number; nomeConta: string };
}

const API = "http://localhost:8080";

export default function Feed() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const [texto, setTexto] = useState("");
  const [idConta, setIdConta] = useState<number | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  async function carregarPosts() {
    try {
      const resposta = await fetch(`${API}/postagens`);
      if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);

      const dados: Postagem[] = await resposta.json();
      // mais novas primeiro
      setPosts([...dados].sort((a, b) => b.id - a.id));
    } catch (e) {
      console.error("Erro ao carregar postagens:", e);
      setErro("Não foi possível carregar as postagens.");
    }
  }

  useEffect(() => {
    async function iniciar() {
      try {
        const sessao = await fetch(`${API}/auth/sessao`, {
          credentials: "include",
        });
        if (sessao.ok) {
          const dados = await sessao.json();
          setIdConta(dados.idConta);
        }
      } catch (e) {
        console.error("Erro ao buscar sessão:", e);
      }

      carregarPosts();
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
      const resposta = await fetch(`${API}/postagens`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          descricaoTexto: texto,
          conta: { id: idConta },
        }),
      });

      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }

      
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
    <main className="mx-auto flex min-h-screen max-w-6xl gap-8 bg-gray-100 p-6">
      <aside className="w-56 shrink-0">
        <h1 className="mb-8 text-2xl font-bold text-indigo-600">
          SoulUp Society
        </h1>

        <nav className="flex flex-col gap-3">
          <Link
            to="/app/feed"
            className="rounded-lg bg-indigo-100 p-3 text-indigo-700"
          >
            Início
          </Link>
          <Link to="/app/carteira" className="p-3">Carteira</Link>
          <Link to="/app/missoes" className="p-3">Missões</Link>
          <Link to="/app/salvos" className="p-3">Itens Salvos</Link>
          <Link to="/app/conta" className="p-3">Conta</Link>
        </nav>
      </aside>

      <section className="w-full rounded-xl bg-white shadow-sm">
        <h2 className="border-b p-5 text-2xl font-bold text-center">Página inicial</h2>

        <div className="border-b p-5">
          <textarea
            placeholder="E aí? Alguma novidade?"
            className="w-full resize-none outline-none"
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
              className="rounded-full bg-indigo-600 px-5 py-2 text-white disabled:opacity-50"
            >
              {enviando ? "Postando..." : "Postar"}
            </button>
          </div>
        </div>

        {posts.length === 0 && (
          <p className="p-5 text-center text-gray-500">
            Nenhuma postagem ainda. Seja o primeiro!
          </p>
        )}

        {posts.map((post) => (
          <article key={post.id} className="border-b p-5">
            <strong>{post.conta?.nomeConta}</strong>
            <span className="ml-2 text-sm text-gray-500">
              {post.dataPostagem}
            </span>

            <p className="my-3 whitespace-pre-wrap">{post.descricaoTexto}</p>

            <div className="mt-3 flex gap-8 text-gray-500">
              <span className="flex items-center gap-1">
                <FaHeart className="text-xl text-indigo-600" />
                {post.quantidadeCurtidas}
              </span>
              <FaRegCommentDots className="text-xl text-indigo-600" />
              <FaShare className="text-xl text-indigo-600" />
              <FaBookmark className="text-xl text-indigo-600" />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}