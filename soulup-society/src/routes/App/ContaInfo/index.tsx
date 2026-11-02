
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import { FaBus, FaStar } from "react-icons/fa";

import type { DadosConta } from "../../../types/conta";
import {
  buscarDadosConta,
  sairDaConta,
} from "../../../service/conta";

export default function ContaInfo() {
  document.title = "SoulUp - Conta";

  const navigate = useNavigate();

  const [dados, setDados] = useState<DadosConta | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [logado, setLogado] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const dadosConta = await buscarDadosConta();
        setDados(dadosConta);
      } catch (e) {
        if (e instanceof Error && e.message.includes("401")) {
          setLogado(false);
        } else {
          setErro("Não foi possível carregar os dados da sua conta.");
        }
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  async function sair() {
    try {
      await sairDaConta();
    } catch (e) {
      console.error("Erro ao sair:", e);
    } finally {
      navigate("/app/login");
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-4 bg-gray-100 p-3 sm:p-4 md:flex-row md:gap-6 md:p-6">

      <aside className="w-full shrink-0 md:w-48 lg:w-56">
        <h1 className="mb-3 text-xl font-bold text-indigo-600 sm:text-2xl md:mb-8">
          SoulUp Society
        </h1>

        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-col md:gap-3">
          <Link
            to="/app/feed"
            className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base"
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
            className="rounded-lg bg-indigo-100 p-3 text-sm text-indigo-700 sm:text-base"
          >
            Conta
          </Link>
        </nav>
      </aside>

      <section className="w-full min-w-0 flex-1 overflow-hidden rounded-xl bg-white shadow-sm">

        <header className="flex flex-col gap-4 border-b border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <h2 className="text-lg font-bold sm:text-xl">
              Minha Conta
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Veja aqui! As informações da sua conta!
            </p>
          </div>

          <button
            type="button"
            onClick={sair}
            className="w-full rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 sm:w-auto"
          >
            Sair
          </button>
        </header>

        {!logado && (
          <div
            role="status"
            className="m-4 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800 sm:m-6"
          >
            Você não está logado.{" "}
            <Link to="/app/login" className="font-semibold underline">
              Fazer login
            </Link>
          </div>
        )}

        {erro && (
          <div
            role="status"
            className="m-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 sm:m-6"
          >
            {erro}
          </div>
        )}

        <div className="bg-indigo-700 p-4 text-white sm:p-6 md:p-8">
          <div className="mt-2 rounded-lg bg-white/10 p-4 sm:mt-4 sm:p-5">
            <p className="text-sm text-indigo-100">
              Nome
            </p>

            <p className="mt-1 wrap-break-word text-lg font-bold sm:text-xl">
              {carregando ? "..." : (dados?.nome ?? "—")}
            </p>

            <p className="mt-4 text-sm text-indigo-100">
              E-mail
            </p>

            <p className="mt-1 break-all text-sm font-semibold sm:text-base">
              {carregando ? "..." : (dados?.email ?? "—")}
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row">

            <section className="flex min-w-0 flex-1 items-center gap-4 rounded-xl border border-gray-200 p-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl sm:size-14 sm:text-3xl">
                <FaStar className="text-indigo-700" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">
                  Pontos
                </p>

                <p className="wrap-break-word text-xl font-bold text-indigo-700 sm:text-2xl">
                  {carregando
                    ? "..."
                    : (dados?.pontos ?? 0).toLocaleString("pt-BR")}
                </p>
              </div>
            </section>

            <section className="flex min-w-0 flex-1 items-center gap-4 rounded-xl border border-gray-200 p-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl sm:size-14 sm:text-3xl">
                <FaBus className="text-indigo-700" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">
                  Passagens
                </p>

                <p className="wrap-break-word text-xl font-bold text-indigo-700 sm:text-2xl">
                  {carregando
                    ? "..."
                    : (dados?.passagens ?? 0).toLocaleString("pt-BR")}
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
