
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { buscarIdConta } from "../../../service/sessao";
import {
  buscarCarteiraPorConta,
  trocarPassagem,
} from "../../../service/carteiras";

const beneficios = [
  {
    id: 1,
    nome: "Transporte",
    descricao: "Troque pontos por vale-passagens",
    icone: "🚌",
    custo: 1000,
  },
];

export default function Carteira() {
  document.title = "SoulUp - Carteira";

  const [idCarteira, setIdCarteira] = useState<number | null>(null);
  const [pontos, setPontos] = useState(0);
  const [passagens, setPassagens] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [logado, setLogado] = useState(true);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        // 1) Conta logada (sessão do backend)
        const idConta = await buscarIdConta();

        if (idConta === null) {
          setLogado(false);
          return;
        }

        // 2) Carteira dessa conta
        const carteira = await buscarCarteiraPorConta(idConta);
        setIdCarteira(carteira.id);
        setPontos(carteira.quantidadePontos);
        setPassagens(carteira.quantidadePassagens);
      } catch {
        setMensagem("Não foi possível conectar ao servidor.");
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  async function trocarPontos(custo: number, nome: string) {
    if (idCarteira === null) return;

    if (pontos < custo) {
      setMensagem("Você não tem pontos suficientes para essa troca.");
      return;
    }

    try {
      // Desconta os pontos e registra a passagem no banco
      const carteira = await trocarPassagem(idCarteira);
      setPontos(carteira.quantidadePontos);
      setPassagens(carteira.quantidadePassagens);
      setMensagem(`Troca de ${nome} realizada com sucesso!`);
    } catch {
      setMensagem("Não foi possível realizar a troca. Verifique seu saldo.");
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
            className="rounded-lg bg-indigo-100 p-3 text-sm font-semibold text-indigo-700 sm:text-base"
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

      <section className="w-full min-w-0 flex-1 overflow-hidden rounded-xl bg-white shadow-sm">

        <header className="border-b border-gray-200 p-4 sm:p-5">
          <h2 className="text-lg font-bold sm:text-xl">
            Minha carteira
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Seus pontos viram benefícios.
          </p>
        </header>

        
        <div className="bg-indigo-700 p-5 text-white sm:p-8">
          <p className="text-sm text-indigo-100">
            Saldo disponível
          </p>

          <h3 className="mt-2 wrap-break-word text-3xl font-bold sm:text-4xl">
            {carregando ? "..." : pontos.toLocaleString("pt-BR")}
          </h3>

          <p className="mt-1 text-sm text-indigo-100">
            Pontos SoulUp
          </p>

          <p className="mt-4 text-sm text-indigo-100">
            Vale-passagens:{" "}
            <strong>{carregando ? "..." : passagens}</strong>
          </p>

          <div className="mt-6 rounded-lg bg-white/10 p-4">
            <p className="font-semibold">
              Continue completando missões!
            </p>

            <p className="mt-1 text-sm text-indigo-100">
              Acumule pontos e troque por benefícios para o dia a dia.
            </p>

            <Link
              to="/app/missoes"
              className="mt-3 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Ver missões
            </Link>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-base font-bold sm:text-lg">
            Trocar pontos por benefícios
          </h3>

          <p className="mb-5 mt-1 text-sm text-gray-500">
            Escolha onde você quer utilizar seus pontos.
          </p>

          {!logado && (
            <div
              role="status"
              className="mb-4 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800"
            >
              Faça login para ver seus pontos e trocar por benefícios.
            </div>
          )}

          {mensagem && (
            <div
              role="status"
              className="mb-4 rounded-lg bg-indigo-50 p-3 text-sm text-indigo-700"
            >
              {mensagem}
            </div>
          )}

          <div className="flex flex-col gap-4">
            {beneficios.map((beneficio) => (
              <article
                key={beneficio.id}
                className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-indigo-300 hover:shadow-sm sm:flex-row sm:items-center sm:p-5"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                  {beneficio.icone}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold">
                    {beneficio.nome}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {beneficio.descricao}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-indigo-700">
                    {beneficio.custo.toLocaleString("pt-BR")} pontos
                  </p>
                </div>

                <button
                  type="button"
                  disabled={idCarteira === null}
                  onClick={() =>
                    trocarPontos(beneficio.custo, beneficio.nome)
                  }
                  className="w-full rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  Trocar pontos
                </button>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs text-gray-400">
            Os benefícios são demonstrativos neste protótipo.
          </p>
        </div>
      </section>
    </main>
  );
}
