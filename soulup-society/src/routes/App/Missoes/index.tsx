import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

import { buscarIdConta } from "../../../service/sessao";

import {
  listarMissoes,
  listarMissoesConcluidas,
  concluirMissao,
  type ContaDesafio,
} from "../../../service/desafios";

import type { Missao } from "../../../types/missao";

export default function Missoes() {
  const [missoes, setMissoes] = useState<Missao[]>([]);
  const [concluidas, setConcluidas] = useState<ContaDesafio[]>([]);

  const [idConta, setIdConta] = useState<number | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [concluindo, setConcluindo] = useState<number | null>(null);

  const [logado, setLogado] = useState(true);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function buscarMissoes() {
      try {
        // 1. Busca a conta logada
        const conta = await buscarIdConta();

        if (conta === null) {
          setLogado(false);
          return;
        }

        setIdConta(conta);

        // 2. Busca missões disponíveis e concluídas
        const [dadosMissoes, dadosConcluidas] = await Promise.all([
          listarMissoes(),
          listarMissoesConcluidas(conta),
        ]);

        setMissoes(dadosMissoes);
        setConcluidas(dadosConcluidas);

      } catch (error) {
        console.error("Erro ao buscar missões:", error);

        setErro(
          error instanceof Error
            ? error.message
            : "Não foi possível carregar as missões."
        );
      } finally {
        setCarregando(false);
      }
    }

    buscarMissoes();
  }, []);

  // Concluir uma missão
  async function handleConcluir(missao: Missao) {
    if (idConta === null) return;

    setConcluindo(missao.id);
    setMensagem("");
    setErro("");

    try {
      // 3. Envia a conclusão para o backend
      const resultado = await concluirMissao(idConta, missao.id);

      // 4. Atualiza a lista de missões concluídas
      setConcluidas((anterior) => [...anterior, resultado]);

      // 5. Mostra os pontos recebidos
      setMensagem(
        `Missão "${missao.nome}" concluída! Você recebeu ${resultado.pontosRecebidos} pontos.`
      );

    } catch (error) {
      console.error("Erro ao concluir missão:", error);

      setErro(
        error instanceof Error
          ? error.message
          : "Não foi possível concluir a missão."
      );
    } finally {
      setConcluindo(null);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-4 bg-gray-100 p-3 sm:p-4 md:flex-row md:gap-6 md:p-6">

      {/* MENU LATERAL */}
      <aside className="w-full shrink-0 md:w-48 lg:w-56">
        <h1 className="mb-3 text-xl font-bold text-indigo-600 sm:text-2xl md:mb-8">
          SoulUp Society
        </h1>

        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-col md:gap-3">
          <Link to="/app/feed" className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base">
            Início
          </Link>

          <Link to="/app/carteira" className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base">
            Carteira
          </Link>

          <Link to="/app/missoes" className="rounded-lg bg-indigo-100 p-3 text-sm font-semibold text-indigo-700 sm:text-base">
            Missões
          </Link>

          <Link to="/app/salvos" className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base">
            Itens Salvos
          </Link>

          <Link to="/app/conta" className="rounded-lg p-3 text-sm hover:bg-gray-200 sm:text-base">
            Conta
          </Link>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <section className="w-full min-w-0 overflow-hidden rounded-xl bg-white shadow-sm">

        <header className="border-b border-gray-200 p-4 sm:p-5">
          <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
            Missões
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Complete missões e acumule pontos na sua carteira.
          </p>
        </header>

        <div className="border-b border-gray-200 bg-indigo-50 p-4 sm:p-5">
          <h3 className="text-base font-bold text-indigo-900 sm:text-lg">
            Faça a diferença!
          </h3>

          <p className="mt-1 text-sm text-indigo-700">
            Participe da comunidade, complete desafios e ganhe pontos.
          </p>
        </div>

        <div className="space-y-4 p-3 sm:p-5">

          {/* USUÁRIO NÃO LOGADO */}
          {!logado && (
            <div className="rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
              Faça login para participar das missões.
            </div>
          )}

          {/* CARREGAMENTO */}
          {carregando && (
            <p className="py-8 text-center text-gray-500">
              Carregando missões...
            </p>
          )}

          {/* MENSAGENS */}
          {mensagem && (
            <div className="rounded-lg bg-green-50 p-4 text-sm text-green-700">
              {mensagem}
              <div className="mt-2">
                <Link to="/app/carteira" className="font-semibold underline">
                  Ver minha carteira
                </Link>
              </div>
            </div>
          )}

          {erro && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {erro}
            </div>
          )}

          {/* NENHUMA MISSÃO */}
          {!carregando && logado && !erro && missoes.length === 0 && (
            <p className="py-8 text-center text-gray-500">
              Nenhuma missão disponível no momento.
            </p>
          )}

          {/* LISTAGEM */}
          {!carregando &&
            logado &&
            missoes.map((missao) => {

              const jaConcluida = concluidas.some(
                (item) => item.idDesafio === missao.id
              );

              const estaConcluindo = concluindo === missao.id;

              return (
                <section
                  key={missao.id}
                  className="rounded-xl border border-gray-200 p-4 transition hover:border-indigo-300 hover:shadow-sm sm:p-5"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="min-w-0 flex-1">

                      <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                        Missão
                      </span>

                      <h3 className="mt-1 wrap-break-word text-base font-bold text-gray-800 sm:text-lg">
                        {missao.nome}
                      </h3>

                      <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm leading-6 text-gray-600">
                        {missao.descricaoDesafio}
                      </p>

                    </div>

                    <div className="flex shrink-0 items-center gap-2 self-start rounded-lg bg-amber-50 px-4 py-3 text-amber-700">

                      <FaStar className="shrink-0" />

                      <div>
                        <p className="text-lg font-bold">
                          {missao.qtdPontos}
                        </p>

                        <p className="text-xs font-bold">
                          pontos
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* BOTÃO DE CONCLUSÃO */}
                  <div className="mt-5 flex justify-stretch border-t border-gray-100 pt-4 sm:justify-end">

                    <button
                      type="button"
                      disabled={jaConcluida || concluindo !== null}
                      onClick={() => handleConcluir(missao)}
                      className={`w-full rounded-lg px-5 py-2 text-sm font-semibold sm:w-auto ${
                        jaConcluida
                          ? "cursor-not-allowed bg-green-100 text-green-700"
                          : "bg-indigo-600 text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                      }`}
                    >
                      {jaConcluida
                        ? "✓ Missão concluída"
                        : estaConcluindo
                          ? "Concluindo..."
                          : "Concluir missão"}
                    </button>

                  </div>

                </section>
              );
            })}

        </div>
      </section>
    </main>
  );
}