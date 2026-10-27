import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  async function fazerLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErro("");
    setCarregando(true);

    try {
      const resposta = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.erro || "Não foi possível realizar o login.");
        return;
      }

      navigate("/app/feed");
    } catch {
      setErro("Não foi possível conectar ao servidor.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-5">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Entrar
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Acesse sua conta na SoulUp Society
        </p>

        <form
          className="flex flex-col gap-4"
          onSubmit={fazerLogin}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="rounded-lg border border-gray-300 p-3"
            />
          </div>

          {erro && (
            <p className="text-sm text-red-600" role="alert">
              {erro}
            </p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="mt-4 rounded-lg bg-black p-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Não possui uma conta?{" "}
          <Link
            to="/app/cadastro"
            className="font-semibold text-black hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </section>
    </main>
  );
}
