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
];

export default function Feed() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl gap-8 bg-gray-100 p-6">
      <aside className="w-56 shrink-0">
        <h1 className="mb-8 text-2xl font-bold text-indigo-600">
          SoulUp Society
        </h1>

        <nav className="flex flex-col gap-3">
          <a href="#" className="rounded-lg bg-indigo-100 p-3 text-indigo-700">
            Página inicial
          </a>
          <a href="#" className="p-3">Explorar</a>
          <a href="#" className="p-3">Carteira</a>
          <a href="#" className="p-3">Notificações</a>
          <a href="#" className="p-3">Itens salvos</a>
          <a href="#" className="p-3">Configurações</a>
        </nav>
      </aside>

      <section className="w-full rounded-xl bg-white">
        <h2 className="border-b p-5 text-xl font-bold">Página inicial</h2>

        <div className="border-b p-5">
          <textarea
            placeholder="E aí? Alguma novidade?"
            className="w-full resize-none outline-none"
            rows={3}
          />
          <div className="text-right">
            <button className="rounded-full bg-indigo-600 px-5 py-2 text-white">
              Postar
            </button>
          </div>
        </div>

        {posts.map((post) => (
          <article key={post.id} className="border-b p-5">
            <strong>{post.nome}</strong>
            <span className="ml-2 text-sm text-gray-500">{post.usuario}</span>

            <p className="my-3">{post.texto}</p>

            <div className="h-48 rounded-lg bg-gray-200" />

            <div className="mt-3 flex gap-8 text-gray-500">
              <button>♡ Curtir</button>
              <button>♧ Comentar</button>
              <button>↗ Compartilhar</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}