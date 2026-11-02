
import { Link } from "react-router";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { FaRegCommentDots, FaShare } from "react-icons/fa6";

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
        id: 3,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
    {
        id: 4,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
    {
        id: 5,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
    {
        id: 6,
        nome: "Outro Usuário",
        usuario: "@outro",
        texto: "Mais uma publicação de exemplo.",
    },
];

export default function ItensSalvos() {
    return (
        <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-5 bg-gray-100 p-3 sm:p-5 md:flex-row md:gap-8 md:p-6">

            <aside className="w-full shrink-0 md:w-56">
                <h1 className="mb-4 text-xl font-bold text-indigo-600 sm:text-2xl md:mb-8">
                    SoulUp Society
                </h1>

                <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-col md:gap-3">
                    <Link to="/app/feed" className="rounded-lg p-3 text-sm sm:text-base">
                        Início
                    </Link>

                    <Link to="/app/carteira" className="rounded-lg p-3 text-sm sm:text-base">
                        Carteira
                    </Link>

                    <Link to="/app/missoes" className="rounded-lg p-3 text-sm sm:text-base">
                        Missões
                    </Link>

                    <Link
                        to="/app/salvos"
                        className="rounded-lg bg-indigo-100 p-3 text-sm text-indigo-700 sm:text-base"
                    >
                        Itens Salvos
                    </Link>

                    <Link to="/app/conta" className="rounded-lg p-3 text-sm sm:text-base">
                        Conta
                    </Link>
                </nav>
            </aside>

            <section className="w-full min-w-0 rounded-xl bg-white shadow-sm">
                <h2 className="border-b border-gray-200 p-4 text-lg font-bold sm:p-5 sm:text-xl">
                    Itens Salvos
                </h2>

                {posts.map((post) => (
                    <article key={post.id} className="border-b border-gray-200 p-4 sm:p-5">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <strong className="wrap-break-word">{post.nome}</strong>
                            <span className="text-sm text-gray-500">{post.usuario}</span>
                        </div>

                        <p className="my-3 wrap-break-word text-sm sm:text-base">
                            {post.texto}
                        </p>

                        <div className="h-36 w-full rounded-lg bg-gray-200 sm:h-48" />

                        <div className="mt-3 flex flex-wrap items-center gap-5 text-gray-500 sm:gap-8">
                            <FaHeart className="text-lg text-indigo-600 sm:text-xl" />
                            <FaRegCommentDots className="text-lg text-indigo-600 sm:text-xl" />
                            <FaShare className="text-lg text-indigo-600 sm:text-xl" />
                            <FaBookmark className="text-lg text-indigo-600 sm:text-xl" />
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
