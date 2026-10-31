import { useEffect, useState } from "react";
import { Link } from "react-router";

const API = "http://localhost:8080";

const beneficios = [
  {
    id: 1,
    nome: "Transporte",
    descricao: "Troque pontos por vale-passagens",
    icone: "🚌",
    custo: 1000,
  },
  {
    id: 2,
    nome: "Luz",
    descricao: "Desconto na conta de energia",
    icone: "⚡",
    custo: 1500,
  },
  {
    id: 3,
    nome: "Água",
    descricao: "Desconto na conta de água",
    icone: "💧",
    custo: 1200,
  },
];

export default function Carteira() {
  // id da carteira e saldo vêm do backend
  const [idCarteira, setIdCarteira] = useState<number | null>(null);
  const [pontos, setPontos] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [logado, setLogado] = useState(true);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        // 1) conta logada (sessão do backend)
        const resSessao = await fetch(`${API}/auth/sessao`, {
          credentials: "include",
        });

        if (!resSessao.ok) {
          setLogado(false);
          return;
        }

        const { idConta } = await resSessao.json();

        // 2) carteira dessa conta
        const resCarteira = await fetch(`${API}/carteiras/conta/${idConta}`);

        if (!resCarteira.ok) {
          setMensagem("Não foi possível carregar sua carteira.");
          return;
        }

        const carteira = await resCarteira.json();
        setIdCarteira(carteira.id);
        setPontos(carteira.quantidadePontos);
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
      // desconta os pontos no banco
      const res = await fetch(
        `${API}/carteiras/${idCarteira}/pontos/remover?quantidade=${custo}`,
        { method: "PATCH" }
      );

      if (!res.ok) {
        setMensagem("Não foi possível realizar a troca. Tente novamente.");
        return;
      }

      setPontos(pontos - custo);
      setMensagem(`Troca de ${nome} realizada com sucesso!`);
    } catch {
      setMensagem("Não foi possível conectar ao servidor.");
    }
  }

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
          <h2 className="text-xl font-bold">Minha carteira</h2>
          <p className="mt-1 text-sm text-gray-500">
            Seus pontos viram benefícios.
          </p>
        </header>

        <div className="bg-indigo-700 p-6 text-white sm:p-8">
          <p className="text-sm text-indigo-100">Saldo disponível</p>

          <h3 className="mt-2 text-4xl font-bold">
            {carregando ? "..." : pontos.toLocaleString("pt-BR")}
          </h3>

          <p className="mt-1 text-sm text-indigo-100">pontos SoulUp</p>

          <div className="mt-6 rounded-lg bg-white/10 p-4">
            <p className="font-semibold">Continue completando missões!</p>
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

        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold">Trocar pontos por benefícios</h3>

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
                className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-indigo-300 hover:shadow-sm sm:flex-row sm:items-center"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                  {beneficio.icone}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold">{beneficio.nome}</h4>
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
                  onClick={() => trocarPontos(beneficio.custo, beneficio.nome)}
                  className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
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