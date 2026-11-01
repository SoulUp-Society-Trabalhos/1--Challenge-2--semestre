import { useEffect, useState } from "react";
import { Link } from "react-router";

const API = "http://localhost:8080";

type Dados = {
  idConta: number;
  nome: string;
  email: string;
  pontos: number;
  passagens: number;
};

export default function ContaInfo() {
  document.title = "SoulUp - Conta";
  const [dados, setDados] = useState<Dados | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [logado, setLogado] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
       //Devolve os dados da pagina
        const res = await fetch(`${API}/auth/me`, {
          credentials: "include",
        });

        if (res.status === 401) {
          setLogado(false);
          return;
        }

        if (!res.ok) {
          setErro("Não foi possível carregar os dados da sua conta.");
          return;
        }

        setDados(await res.json());
      } catch {
        setErro("Não foi possível conectar ao servidor.");
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

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
          <Link to="/app/carteira" className="p-3">
            Carteira
          </Link>
          <Link to="/app/missoes" className="p-3">
            Missões
          </Link>
          <Link to="/app/salvos" className="p-3 ">
            Itens Salvos
          </Link>

          <Link
            to="/app/conta"
            className="p-3 bg-indigo-100 text-indigo-700 rounded-lg"
          >
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

        {!logado && (
          <div
            role="status"
            className="m-5 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800 sm:m-6"
          >
            Você não está logado.{" "}
            <Link to="/login" className="font-semibold underline">
              Fazer login
            </Link>
          </div>
        )}

        {erro && (
          <div
            role="status"
            className="m-5 rounded-lg bg-red-50 p-3 text-sm text-red-700 sm:m-6"
          >
            {erro}
          </div>
        )}

        <div className="bg-indigo-700 p-6 text-white sm:p-8">
          <div className="mt-6 rounded-lg bg-white/10 p-4">
            <p className="text-sm text-indigo-100">Nome</p>
            <p className="mt-1 text-xl font-bold">
              {carregando ? "..." : (dados?.nome ?? "—")}
            </p>

            <p className="mt-4 text-sm text-indigo-100">E-mail</p>
            <p className="mt-1 break-all font-semibold">
              {carregando ? "..." : (dados?.email ?? "—")}
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <article className="flex flex-1 items-center gap-4 rounded-xl border border-gray-200 p-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                ⭐
              </div>
              <div>
                <p className="text-sm text-gray-500">Pontos</p>
                <p className="text-2xl font-bold text-indigo-700">
                  {carregando
                    ? "..."
                    : (dados?.pontos ?? 0).toLocaleString("pt-BR")}
                </p>
              </div>
            </article>

            <article className="flex flex-1 items-center gap-4 rounded-xl border border-gray-200 p-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                🚌
              </div>
              <div>
                <p className="text-sm text-gray-500">Passagens</p>
                <p className="text-2xl font-bold text-indigo-700">
                  {carregando
                    ? "..."
                    : (dados?.passagens ?? 0).toLocaleString("pt-BR")}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}