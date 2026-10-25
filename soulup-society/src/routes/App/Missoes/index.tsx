
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface Missao {
  id: number;
  nome: string;
  descricaoDesafio: string;
  qtdPontos: number;
}

export default function Missoes() {
  const [missoes, setMissoes] = useState<Missao[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarMissoes() {
      try {
        const resposta = await fetch("http://localhost:8080/desafios");

        console.log("Status da requisição:", resposta.status);

        if (!resposta.ok) {
          throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados: Missao[] = await resposta.json();

        console.log("Missões recebidas da API:", dados);

        setMissoes(dados);
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

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl gap-8 bg-gray-100 p-6">
      <aside className="w-56 shrink-0">
        <h1 className="mb-8 text-2xl font-bold text-indigo-600">
          SoulUp Society
        </h1>

        <nav className="flex flex-col gap-3">
          <Link to="/app/feed" className="rounded-lg p-3 hover:bg-gray-200">
            Início
          </Link>

          <Link
            to="/app/carteira"
            className="rounded-lg p-3 hover:bg-gray-200"
          >
            Carteira
          </Link>

          <Link
            to="/app/missoes"
            className="rounded-lg bg-indigo-100 p-3 font-semibold text-indigo-700"
          >
            Missões
          </Link>

          <Link to="/app/salvos" className="rounded-lg p-3 hover:bg-gray-200">
            Itens salvos
          </Link>

          <Link
            to="/app/configuracoes"
            className="rounded-lg p-3 hover:bg-gray-200"
          >
            Configurações
          </Link>
        </nav>
      </aside>

      <section className="w-full overflow-hidden rounded-xl bg-white shadow-sm">
        <header className="border-b p-5">
          <h2 className="text-xl font-bold text-gray-800">Missões</h2>
          <p className="mt-1 text-sm text-gray-500">
            Complete missões e acumule pontos na sua carteira.
          </p>
        </header>

        <div className="border-b bg-indigo-50 p-5">
          <h3 className="text-lg font-bold text-indigo-900">
            Faça a diferença!
          </h3>
          <p className="mt-1 text-sm text-indigo-700">
            Participe da comunidade, complete desafios e ganhe pontos.
          </p>
        </div>

        <div className="space-y-4 p-5">
          {carregando && (
            <p className="py-8 text-center text-gray-500">
              Carregando missões...
            </p>
          )}

          {!carregando && erro && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
              Não foi possível carregar as missões: {erro}
            </div>
          )}

          {!carregando && !erro && missoes.length === 0 && (
            <p className="py-8 text-center text-gray-500">
              Nenhuma missão disponível no momento.
            </p>
          )}

          {!carregando &&
            !erro &&
            missoes.map((missao) => (
              <article
                key={missao.id}
                className="rounded-xl border border-gray-200 p-5 transition hover:border-indigo-300 hover:shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      Missão
                    </span>

                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                      {missao.nome}
                    </h3>

                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                      {missao.descricaoDesafio}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 self-start rounded-lg bg-amber-50 px-4 py-3 text-amber-700">
                    <span className="text-xl">★</span>
                    <div>
                      <p className="text-lg font-bold">
                        {missao.qtdPontos}
                      </p>
                      <p className="text-xs">pontos</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end border-t border-gray-100 pt-4">
                  <button
                    type="button"
                    disabled
                    title="A conclusão de missões será implementada depois"
                    className="cursor-not-allowed rounded-lg bg-gray-200 px-5 py-2 text-sm font-semibold text-gray-500"
                  >
                    Concluir missão
                  </button>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
