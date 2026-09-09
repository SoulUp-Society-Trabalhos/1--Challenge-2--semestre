export default function Sobre() {
  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            Mais Sobre nós
          </h1>

          <div className="text-2xl">
            <p>
              Aqui você conhecerá um pouco mais sobre nós, nossa história e ideias.
            </p>
          </div>
        </div>
      </section>

      <section className="sobre">
        <div className="mt-10! ml-5!">
          <p className="text-2xl text-center mb-3! bg-stone-300 p-3! w-80 mx-auto rounded-lg">
            Sobre a SoulUp Society
          </p>
          <p className="text-base mb-1.5! mt-1.5! text-left  bg-stone-300 p-5! mr-10">
            Criada em Abril de 2026, a SoulUp Society é uma startup focada em
            aprimorar a rede social SoulUp. Realizamos e construímos nossos
            projetos mirando a implementação de novas funcionalidades no
            aplicativo, também beneficiando o meio ambiente e facilitando a
            rotina dos usuários da plataforma.
          </p>
          <p className="text-base mb-1.5! mt-1.5! text-left bg-stone-300 p-5! mr-10">
            Atualmente, nossos projetos estão centrados em questões de mobilidade, tendo como objetivo a conexão do sistema de pontos da SoulUp com os sistemas do transporte público. Além disso, também trabalhamos na adição de um sistema de missões para o aplicativo, para que os usuários consigam usufruir de uma experiência mais divertida e gratificante durante a utilização da plataforma.
          </p>
          <p className="text-base mb-1.5! mt-1.5! text-left bg-stone-300 p-5! mr-10">
            A SoulUp Society também possui ideais sustentáveis. Nossos projetos, além de gerarem uma economia para os usuários, também incentivam o uso do tarnsporte público, visando principalmente à diminuição das emissões de dióxido de carbono na atmosfera e desacelerando o efeito estufa. Acreditamos que o meio ambiente é uma parte essencial de nossa vida, portanto precisamos cuidar bem dele.
          </p>
        </div>

      </section>

      <div className="py-8 px-[5%]! min-h-[30vh]">
        <h2 className="text-3xl text-center font-bold border-b-4">
          Nosso Newsletter!
        </h2>
        <div className="mt-10! flex justify-center">
          <section className="bg-white text-black p-8! rounded-xl shadow-lg w-full max-w-xl">
            <h2 className="text-2xl font-bold text-center mb-3!">
              Receba novidades do nosso projeto!
            </h2>
            <dialog id="modal">
              <button aria-label="Fechar a Janela" id="btnFecharModal">
                X
              </button>
              <div id="msg">
                <p>TESTE DE MSG</p>
              </div>
            </dialog>
            <form className="formulario__newsletter" action="" method="">
              <fieldset className="newsletter__fieldset">
                <label htmlFor="idEmail" className="sr-only">
                  Email
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    id="idEmail"
                    name="email"
                    className="flex-1 border border-gray-300 rounded-lg px-4! py-3! text-black outline-none focus:border-black"
                    placeholder="Digite seu Email."
                    required
                  />
                  <button
                    type="submit"
                    id="btnEnviar"
                    className="bg-black text-white px-6! py-3! rounded-lg hover:bg-gray-800"
                  >
                    Enviar
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
