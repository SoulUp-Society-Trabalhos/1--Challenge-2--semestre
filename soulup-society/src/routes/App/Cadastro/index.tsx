import { useState } from "react";
import { Link } from "react-router";

export default function Cadastro() {
  const [etapa, setEtapa] = useState(1);

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-5">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          {etapa === 1 ? "Dados do usuário" : "Criar conta"}
        </h1>

        <p className="mb-8 text-center text-gray-600">Etapa {etapa} de 2</p>

        {etapa === 1 ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setEtapa(2);
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="nascimento">Data de nascimento</label>
              <input
                type="date"
                id="nascimento"
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
                maxLength={14}
                inputMode="numeric"
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <button
              type="submit"
              className="mt-4 rounded-lg bg-black p-3 font-semibold text-white"
            >
              Continuar
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
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
                placeholder="Digite sua senha"
                required
                className="rounded-lg border border-gray-300 p-3"
              />
            </div>

            <button
              type="submit"
              className="mt-4 rounded-lg bg-black p-3 font-semibold text-white"
            >
              Criar conta
            </button>

            <button
              type="button"
              onClick={() => setEtapa(1)}
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
