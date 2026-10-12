import { Link } from "react-router";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-5">
      <section className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-lg">

        <h1 className="mb-4 text-4xl font-bold text-black">
          SoulUp Society
        </h1>

        <p className="mb-8 text-gray-600">
          Conecte-se, participe de missões, acumule pontos
          e conquiste recompensas!
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/app/login"
            className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Entrar
          </Link>

          <Link
            to="/app/cadastro"
            className="rounded-lg border-2 border-black px-6 py-3 font-semibold text-black transition hover:bg-gray-100"
          >
            Criar conta
          </Link>
        </div>

      </section>
    </main>
  );
}