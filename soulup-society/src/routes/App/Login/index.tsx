import { Link } from "react-router";

export default function Login() {
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
          onSubmit={(e) => e.preventDefault()}
        >

          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
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
              required
              className="rounded-lg border border-gray-300 p-3"
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-lg bg-black p-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Entrar
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