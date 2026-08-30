import { Link } from "react-router";
export default function Home() {
  return (
    <main>
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-bold mb-6">SoulUp Society</h1>

          <p className="text-2xl">
            Uma breve apresentação de nossa startup, girando em torno da
            empresa SoulUp.
          </p>
        </div>
      </section>

      <section className="bg-stone-300 py-8 px-[5%]">
        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Proposta</h2>
          <div className="mt-5! ml-5!">
            <p className="text-2xl ">Proposta 1 - Integração</p>
            <p>A primeira proposta da SoulUp Society foca na integração entre o sistema de pontos do aplicativo com o bilhete único do transporte público, permitindo que pontos sejam convertidos em passagens, saldo e/ou descontos para o transporte em metrôs, ônibus e trens.</p>
            <Link to="/proposta" className="">
              Ver mais...
            </Link>
          </div>
          <div className="mt-5! ml-5!">
            <p className="text-2xl ">Proposta 2 - Gamificação</p>
            <p>Como segunda proposta, temos a gamificação. O aplicativo da SoulUp poderá ser gamificado através da implementação de um sistema de missões, o qual recompensará o usuário que completar estas missões com pontos do aplicativo.</p>
            <Link to="/proposta2" className="">
              Ver mais...
            </Link>
          </div>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Integrantes</h2>
          <div className="mt-5! ml-5!">
            <div className="bg-">
              <img src="" alt="" />
              <h3>Breno Elísio Leal Lobato</h3>              
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Chrisitian Verzellesi Barbuto</h3>
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Gustavo Lizier Pontes</h3>
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Eduardo Nery Kurahara</h3>
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Eduardo Pizzoli Junior</h3>
            </div>
          </div>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Sobre</h2>
          <div className="mt-5! ml-5!">
            <p className="text-2xl ">Conheça mais sobre nós!</p>
            <p className="text-base mb-1.5! mt-1.5!">
              Criada em Abril de 2026, a SoulUp Society é uma startup focada em aprimorar a rede social SoulUp. Realizamos e construímos nossos projetos mirando a implementação de novas funcionalidades no aplicativo, também beneficiando o meio-ambiente e facilitando a rotina dos usuários da plataforma.
            </p>
            <Link to="/sobre" className="">
              Ver mais...
            </Link>
          </div>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]  ">
          <h2 className="text-3xl">FAQ</h2>
          <div className="mt-5! ml-5!">
            <div className="mb-3!">
              <p className="text-2xl mb-1.5!">
                O que é a SoulUp Society?
              </p>
              <p className="text-base">
                A SoulUp Society é uma startup criada em 2026, cujo principal objetivo é implementar melhorias na rede social SoulUp, aprimorando seus recursos e oferecendo uma experiência mais agradável ao usuário, que poderá usufruir de um leque variado de benefícios ao utilizar o aplicativo.
              </p>
            </div>
            <div className="mb-3!">
              <p className="text-2xl mb-1.5!">Quais são os trabalhos atuais da SoulUp Society?</p>
              <p className="text-base">
                Atualmente, a SoulUp society trabalha na implementação de um sistema que troca pontos obtidos no aplicativo SoulUp por passagens e/ou descontos no transporte público, além do desenvolvimento de um sistema de missões e de uma aba de microblogging, focada na postagem de textos curtos.
              </p>
            </div>
            <div className="mb-3!">
              <p className="text-2xl mb-1.5!">Como o sistema de pontos funciona?</p>
              <p className="text-base">
                Os pontos podem ser acumulados no aplicativo SoulUp com o cumprimento de missões de engajamento e visualização de anúncios, podendo assim serem usados para o pagamento de passagens no transporte público ou da conta de luz.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Contatos</h2>
          <div className="mt-5! ml-5!">
            <section className="newsletter">
              <h2>Receba novidades do nosso projeto!</h2>
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
                  <div className="container__newsletter">
                    <input
                      type="email"
                      id="idEmail"
                      name="email"
                      placeholder="Digite seu Email."
                      required
                    />
                    <button type="submit" id="btnEnviar">
                      Enviar
                    </button>
                  </div>
                </fieldset>
              </form>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
