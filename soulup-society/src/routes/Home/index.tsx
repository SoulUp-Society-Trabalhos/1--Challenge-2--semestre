import { Link } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [enviado, setEnviado] = useState(false);

  type NewsletterForm = {
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterForm>();

  return (
    <main>
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center flex flex-col gap-3 max-w-4xl">
          <h1 className="font-montserrat font-bold mb-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            Início
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl">
            <p>Apresentação geral dos membros da nossa equipe.</p>
          </div>
        </div>
      </section>

      <section className="bg-stone-300 py-8 px-[5%]">
        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl text-center font-bold border-b-4">
            Proposta
          </h2>

          <div className="mt-10! flex flex-col md:flex-row gap-6">
            <div className="flex-1 rounded-xl shadow-md p-10! bg-white">
              <p className="text-2xl font-semibold">
                Proposta 1 - Integração
              </p>

              <p className="mt-2!">
                Como primeira proposta de nosso projeto, temos a Integração.
                Ela se baseia na conexão entre o sistema de pontos do
                aplicativo da SoulUp junto dos sistemas do transporte público,
                incluindo o bilhete único para metrô, trens e ônibus. A
                realização desta proposta é possível graças a parcerias com
                empresas de transporte, como a SPTrans e a Motiva.
              </p>

              <Link
                to="/proposta"
                className="mt-4! inline-block bg-black p-2! text-white"
              >
                Ver mais...
              </Link>
            </div>

            <div className="flex-1 rounded-xl shadow-md p-10! bg-white">
              <p className="text-2xl font-semibold">
                Proposta 2 - Gamificação
              </p>

              <p className="mt-2!">
                Como segunda proposta de nosso projeto, temos a gamificação.
                Ela tem como fundamento a adição de um sistema de missões à
                rede social da SoulUp, o qual recompensará o usuário que
                completar estas missões com pontos dentro do aplicativo e
                também fortalecerá o engajamento da plataforma.
              </p>

              <Link
                to="/proposta2"
                className="mt-4! inline-block bg-black p-2! text-white"
              >
                Ver mais...
              </Link>
            </div>
          </div>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl text-center font-bold border-b-4">
            Integrantes
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl p-2">
              <img
                src="/img/foto-breno.jpg"
                alt=""
                className="mx-auto w-32 h-32 object-cover rounded-full m-3!"
              />

              <div className="mt-4!">
                <h3 className="text-lg font-bold p-1!">Breno Elísio</h3>

                <p className="mt-1 text-sm text-gray-500 text-center">
                  Aluno
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl p-2">
              <img
                src="img/foto-christian.png"
                alt=""
                className="object-cover rounded-full m-3! w-32 h-32 aspect-square shrink-0"
              />

              <div className="mt-4!">
                <h3 className="text-lg font-bold p-1!">
                  Christian Barbuto
                </h3>

                <p className="mt-1 text-sm text-gray-500 text-center">
                  Aluno
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl p-2">
              <img
                src="img/foto-gustavo.png"
                alt=""
                className="object-cover aspect-square shrink-0 rounded-full m-3! w-32 h-32"
              />

              <div className="mt-4!">
                <h3 className="text-lg font-bold p-1!">Gustavo Lizier</h3>

                <p className="mt-1 text-sm text-gray-500 text-center">
                  Aluno
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl p-2">
              <img
                src="/img/foto-eduardo.png"
                alt=""
                className="object-cover rounded-full m-3! w-32 h-32 aspect-square shrink-0"
              />

              <div className="mt-4!">
                <h3 className="text-lg font-bold p-1!">Eduardo Nery</h3>

                <p className="mt-1 text-sm text-gray-500 text-center">
                  Aluno
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl p-2">
              <img
                src="img\foto-eduardop.jpg"
                alt=""
                className="object-cover rounded-full m-3! w-32 h-32 aspect-square shrink-0"
              />

              <div className="mt-4!">
                <h3 className="text-lg font-bold p-1!">
                  Eduardo Pizzoli
                </h3>

                <p className="mt-1 text-sm text-gray-500 text-center">
                  Aluno
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl text-center font-bold border-b-4">
            Sobre
          </h2>

          <div className="mt-10! bg-white p-7! rounded-xl">
            <p className="text-2xl font-bold">
              Conheça mais sobre nós!
            </p>

            <p className="text-base mb-4! mt-4!">
              Criada em Abril de 2026, a SoulUp Society é uma startup focada
              em aprimorar a rede social SoulUp. Realizamos e construímos
              nossos projetos mirando a implementação de novas funcionalidades
              no aplicativo, também beneficiando o meio ambiente e facilitando
              a rotina dos usuários da plataforma.
            </p>

            <Link to="/sobre" className="bg-black p-2! text-white">
              Ver mais...
            </Link>
          </div>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl text-center font-bold border-b-4">
            FAQ
          </h2>

          <div className="mt-10! ml-5! flex flex-wrap gap-6">
            <div className="mb-3! bg-white p-7! rounded-xl shadow-lg">
              <p className="text-2xl mb-1.5! font-bold">
                O que é a SoulUp Society?
              </p>

              <p className="text-base">
                A SoulUp Society é uma startup criada em 2026, cujo principal
                objetivo é implementar melhorias na rede social SoulUp,
                aprimorando seus recursos e oferecendo uma experiência mais
                agradável ao usuário, que poderá usufruir de um leque variado
                de benefícios ao utilizar o aplicativo.
              </p>
            </div>

            <div className="mb-3! bg-white p-7! rounded-xl shadow-lg">
              <p className="text-2xl mb-1.5! font-bold">
                Quais são os trabalhos atuais da SoulUp Society?
              </p>

              <p className="text-base">
                Atualmente, a SoulUp society trabalha na implementação de um
                sistema que troca pontos obtidos no aplicativo SoulUp por
                passagens e/ou descontos no transporte público, além do
                desenvolvimento de um sistema de missões e de uma aba de
                microblogging, focada na postagem de textos curtos.
              </p>
            </div>

            <div className="mb-3! bg-white p-7! rounded-xl shadow-lg">
              <p className="text-2xl mb-1.5! font-bold">
                Como o sistema de pontos funciona?
              </p>

              <p className="text-base">
                Os pontos podem ser acumulados no aplicativo SoulUp com o
                cumprimento de missões de engajamento e visualização de
                anúncios, podendo assim serem usados para o pagamento de
                passagens no transporte público ou da conta de luz.
              </p>
            </div>

            <Link to="/faq" className="bg-black p-2! text-white">
              Ver mais...
            </Link>
          </div>
        </div>

        <div className="py-8 px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl text-center font-bold border-b-4">
            Contatos
          </h2>

          <div className="mt-10! flex justify-center">
            <section className="bg-white text-black p-8! rounded-xl shadow-lg w-full max-w-xl">
              <h2 className="text-2xl font-bold text-center mb-3!">
                Receba novidades do nosso projeto!
              </h2>

              <dialog id="modal">
                <button
                  aria-label="Fechar a Janela"
                  id="btnFecharModal"
                >
                  X
                </button>

                <div id="msg">
                  <p>TESTE DE MSG</p>
                </div>
              </dialog>

              {!enviado ? (
                <form
                  className="formulario__newsletter"
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                    setEnviado(true);
                  })}
                >
                  <fieldset className="newsletter__fieldset">
                    <label htmlFor="idEmail" className="sr-only">
                      Email
                    </label>

                    <div className="flex gap-3">
                      <input
                        type="email"
                        id="idEmail"
                        {...register("email", {
                          required: "O e-mail é obrigatório.",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Digite um e-mail válido.",
                          },
                        })}
                        className="flex-1 border border-gray-300 rounded-lg px-4! py-3! text-black outline-none focus:border-black"
                        placeholder="Digite seu Email."
                      />

                      <button
                        type="submit"
                        id="btnEnviar"
                        className="bg-black text-white px-6! py-3! rounded-lg hover:bg-gray-800"
                      >
                        Enviar
                      </button>
                    </div>

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </fieldset>
                </form>
              ) : (
                <div className="text-center py-6">
                  <h3 className="text-2xl font-bold mb-3">
                    Inscrição realizada com sucesso!
                  </h3>

                  <p>
                    Obrigado! Você receberá nossas novidades por e-mail.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}