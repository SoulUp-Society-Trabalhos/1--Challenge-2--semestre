
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import {
  buscarUsuarioPorCpf,
  criarUsuario,
  criarConta,
} from "../../../service/cadastro";

export default function Cadastro() {
  const [modalSucesso, setModalSucesso] = useState(false);
  const [etapa, setEtapa] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    document.title = "SoulUp - Cadastro";
  }, []);

  // Primeira etapa: cadastrar os dados do usuário
  async function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const cpfLimpo = cpf.replace(/\D/g, "");

      // Verifica se o CPF já está cadastrado
      const usuarioExistente = await buscarUsuarioPorCpf(cpfLimpo);

      if (usuarioExistente?.id) {
        throw new Error("Este CPF já está cadastrado!");
      }

      // Se o CPF não existir, cadastra um novo usuário
      await criarUsuario(nome, nascimento, cpfLimpo);

      // Busca o usuário criado para obter seu ID
      const usuarioCriado = await buscarUsuarioPorCpf(cpfLimpo);

      if (!usuarioCriado?.id) {
        throw new Error(
          "Usuário cadastrado, mas não foi possível obter seu ID."
        );
      }

      // Guarda o ID para a segunda etapa
      sessionStorage.setItem(
        "usuarioCadastroId",
        String(usuarioCriado.id)
      );

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

  // Segunda etapa: criar a conta
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

      // Cria a conta vinculada ao usuário
      await criarConta(nome, email, senha, Number(usuarioId));

      sessionStorage.removeItem("usuarioCadastroId");
      setModalSucesso(true);
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
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-4 py-8 sm:px-5">
      <section className="w-full max-w-md rounded-2xl bg-white p-5 shadow-lg sm:p-8">
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
              disabled={carregando || modalSucesso}
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

      {modalSucesso && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-xl">
            <h2 className="mb-2 text-xl font-bold">
              Conta criada com sucesso!
            </h2>

            <button
              type="button"
              onClick={() => navigate("/app/login")}
              className="mt-4 w-full rounded-lg bg-indigo-600 p-3 font-semibold text-white"
            >
              Ir para o login
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
