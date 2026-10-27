import { useState } from "react";
import { Link, useNavigate } from "react-router";

const API_URL = "http://localhost:8080";

export default function Cadastro() {
  const [etapa, setEtapa] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  // Dados do usuário
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  // Dados da conta
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const cpfLimpo = cpf.replace(/\D/g, "");

      // 1. Procura se o usuário já existe pelo CPF
      const respostaBusca = await fetch(
        `${API_URL}/usuarios/procurarPorCpf/${cpfLimpo}`
      );

      let usuarioCriado: { id: number } | null = null;

      if (respostaBusca.ok) {
        usuarioCriado = await respostaBusca.json();
      } else if (respostaBusca.status !== 404) {
        throw new Error("Não foi possível consultar o CPF.");
      }

      // 2. Se não encontrou, cadastra um novo usuário
      if (!usuarioCriado?.id) {
        const respostaUsuario = await fetch(`${API_URL}/usuarios`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nome.trim(),
            dataNascimento: nascimento,
            numeroCpf: Number(cpfLimpo),
          }),
        });

        if (!respostaUsuario.ok) {
          throw new Error(
            "Não foi possível cadastrar o usuário. Verifique os dados informados."
          );
        }

        // 3. Busca o usuário recém-cadastrado para obter o ID
        const novaBusca = await fetch(
          `${API_URL}/usuarios/procurarPorCpf/${cpfLimpo}`
        );

        if (!novaBusca.ok) {
          throw new Error(
            "Usuário cadastrado, mas não foi possível obter seu ID."
          );
        }

        usuarioCriado = await novaBusca.json();
      }

      if (!usuarioCriado?.id) {
        throw new Error("Não foi possível identificar o usuário.");
      }

      // 4. Guarda o ID para a próxima etapa
      sessionStorage.setItem(
        "usuarioCadastroId",
        String(usuarioCriado.id)
      );

      // 5. Avança para criar a conta
      setEtapa(2);
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao cadastrar."
      );
    } finally {
      setCarregando(false);
    }
  }

  async function cadastrarConta(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const usuarioId = sessionStorage.getItem("usuarioCadastroId");

      if (!usuarioId) {
        throw new Error(
          "Não encontramos o usuário. Volte e preencha os dados novamente."
        );
      }

      // Cadastra a conta vinculada ao usuário
      const respostaConta = await fetch(`${API_URL}/contas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeConta: nome.trim(),
          email: email.trim(),
          senha,
          dataCriacao: new Date().toISOString().slice(0, 10),
          bio: "",
          tipoConta: "USUARIO",
          usuario: {
            id: Number(usuarioId),
          },
        }),
      });

      if (!respostaConta.ok) {
        throw new Error(
          "Não foi possível criar a conta. Verifique os dados e o backend."
        );
      }

      sessionStorage.removeItem("usuarioCadastroId");

      alert("Conta criada com sucesso!");
      navigate("/app/login");
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao criar a conta."
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-5">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          {etapa === 1 ? "Dados do usuário" : "Criar conta"}
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Etapa {etapa} de 2
        </p>

        {erro && (
          <p
            role="alert"
            className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700"
          >
            {erro}
          </p>
        )}

        {etapa === 1 ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={cadastrarUsuario}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                maxLength={45}
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="nascimento">Data de nascimento</label>
              <input
                type="date"
                id="nascimento"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
                max={new Date().toISOString().slice(0, 10)}
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                maxLength={14}
                inputMode="numeric"
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="mt-4 rounded-lg bg-black p-3 font-semibold text-white disabled:opacity-50"
            >
              {carregando ? "Verificando..." : "Continuar"}
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={cadastrarConta}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                minLength={8}
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="mt-4 rounded-lg bg-black p-3 font-semibold text-white disabled:opacity-50"
            >
              {carregando ? "Criando conta..." : "Criar conta"}
            </button>

            <button
              type="button"
              onClick={() => {
                setErro("");
                setEtapa(1);
              }}
              disabled={carregando}
              className="text-gray-600 hover:underline"
            >
              Voltar
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-gray-600">
          Já possui uma conta?{" "}
          <Link
            to="/app/login"
            className="font-semibold text-black hover:underline"
          >
            Entrar
          </Link>
        </p>
      </section>
    </main>
  );
}
