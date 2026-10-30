import { Link } from "react-router";

export default function ContaInfo() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl gap-8 bg-gray-100 p-6">
      <aside className="w-56 shrink-0">
        <h1 className="mb-8 text-2xl font-bold text-indigo-600">
          SoulUp Society
        </h1>

        <nav className="flex flex-col gap-3">
          <Link to="/app/feed" className="  p-3">
            Início
          </Link>
          <Link
            to="/app/carteira"
            className="p-3  bg-indigo-100 text-indigo-700 rounded-lg"
          >
            Carteira
          </Link>
          <Link to="/app/missoes" className="p-3">
            Missões
          </Link>
          <Link to="/app/salvos" className="p-3 ">
            Itens Salvos
          </Link>

          <Link to="/app/conta" className="p-3">
            Conta
          </Link>
        </nav>
      </aside>

      <section className="min-w-0 flex-1 overflow-hidden rounded-xl bg-white shadow-sm">
        <header className="border-b p-5">
          <h2 className="text-xl font-bold">Minha Conta</h2>
          <p className="mt-1 text-sm text-gray-500">
            Veja aqui! As informações da sua conta!
          </p>
        </header>

        <div className="bg-indigo-700 p-6 text-white sm:p-8">
          <div className="mt-6 rounded-lg bg-white/10 p-4"></div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-4"></div>
        </div>
      </section>
    </main>
  );
}
