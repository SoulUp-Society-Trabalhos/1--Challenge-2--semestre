export default function Faq() {
  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">FAQ</h1>

          <div className="text-2xl">
            <p>
              Veja as dúvidas mais recorrentes que giram em torno do nosso
              projeto.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mt-5! ml-5! py-8! px-[5%]!">
          <div className="mb-3! bg-stone-300 p-5!">
            <p className="text-2xl mb-1.5! font-bold">O que é a SoulUp Society?</p>
            <p className="text-base">
              A SoulUp Society é uma startup criada em 2026, cujo principal
              objetivo é implementar melhorias na rede social SoulUp,
              aprimorando seus recursos e oferecendo uma experiência mais
              agradável ao usuário, que poderá usufruir de um leque variado de
              benefícios ao utilizar o aplicativo.
            </p>
          </div>
          <div className="mb-3! bg-stone-300 p-5!">
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
          <div className="mb-3! bg-stone-300 p-5!">
            <p className="text-2xl mb-1.5! font-bold">
              Como o sistema de pontos funciona?
            </p>
            <p className="text-base">
              Os pontos podem ser acumulados no aplicativo SoulUp com o
              cumprimento de missões de engajamento e visualização de anúncios,
              podendo assim serem usados para o pagamento de passagens no
              transporte público ou da conta de luz.
            </p>
          </div>
          <div className="mb-3! bg-stone-300 p-5!">
            <p className="text-2xl mb-1.5! font-bold">
              O projeto possui integração com o sistema de transporte?
            </p>
            <p className="text-base">
              Sim. Com a ajuda de parcerias com empresas como SPTrans e outras
              companhias relacionadas ao transporte público, a SoulUp Society
              foi capaz de integrar o sistema de pontos da SoulUp com o bilhete
              único.
            </p>
          </div>
          <div className="mb-3! bg-stone-300 p-5!">
            <p className="text-2xl mb-1.5! font-bold">
              Quais são os objetivos da SoulUp Society?
            </p>
            <p className="text-base">
              A SoulUp Society tem como principais objetivos o aprimoramento da
              rede social SoulUp. Por meio de nossas melhorias dentro do
              aplicativo, poderemos beneficiar a rotina do usuário, fazendo-o
              economizar com o transporte e melhorando sua experiência com o
              mesmo. Além disso, buscamos também contribuir com o meio ambiente
              incentivando o uso de transportes coletivos.
            </p>
          </div>
          <div className="mb-3! bg-stone-300 p-5!">
            <p className="text-2xl mb-1.5! font-bold">O que é o sistema de missões?</p>
            <p className="text-base">
              As missões são um recurso dentro da SoulUp que será responsável
              por fomentar o engajamento do aplicativo e facilitar a aquisição
              de pontos pelo usuário através do cumprimento de tarefas no
              aplicativo.
            </p>
          </div>
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
