import { Link } from "react-router";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";

const posts = [
    {
        id: 1,
        nome: "Nome de Usuário",
        usuario: "@usuario",
        texto: "Texto de exemplo para a postagem.",
    },
    {
        id: 2,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
    {
        id: 2,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
    {
        id: 2,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
    {
        id: 2,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
    {
        id: 2,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
];

export default function ItensSalvos() {
    return (
      <main className="mx-auto flex min-h-screen max-w-6xl gap-8 bg-gray-100 p-6">
        <aside className="w-56 shrink-0">
          <h1 className="mb-8 text-2xl font-bold text-indigo-600">
            SoulUp Society
          </h1>

          <nav className="flex flex-col gap-3">
            <Link to="/app/feed" className="p-3">
              Início
            </Link>
            <Link to="/app/carteira" className="p-3">
              Carteira
            </Link>
            <Link to="/app/missoes" className="p-3">
              Missões
            </Link>
            <Link
              to="/app/salvos"
              className="p-3 bg-indigo-100 text-indigo-700 rounded-lg"
            >
              Itens Salvos
            </Link>
            {/* <a href="#" className="p-3">Itens salvos</a> */}
            <Link to="/app/conta" className="p-3">
              Conta
            </Link>
          </nav>
        </aside>

        <section className="w-full rounded-xl bg-white shadow-sm">
          <h2 className="border-b p-5 text-xl font-bold">Itens Salvos</h2>
          {posts.map((post) => (
            <article key={post.id} className="border-b p-5">
              <strong>{post.nome}</strong>
              <span className="ml-2 text-sm text-gray-500">{post.usuario}</span>

              <p className="my-3">{post.texto}</p>

              <div className="h-48 rounded-lg bg-gray-200" />

              <div className="mt-3 flex gap-8 text-gray-500">
                <FaHeart className="text-xl text-indigo-600" />
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