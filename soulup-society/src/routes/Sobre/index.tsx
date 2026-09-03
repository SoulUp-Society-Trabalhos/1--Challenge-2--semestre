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
            <p className="text-2xl ">Sobre nós!</p>
            <p className="text-base mb-1.5! mt-1.5!">
              Criada em Abril de 2026, a SoulUp Society é uma startup focada em
              aprimorar a rede social SoulUp. Realizamos e construímos nossos
              projetos mirando a implementação de novas funcionalidades no
              aplicativo, também beneficiando o meio ambiente e facilitando a
              rotina dos usuários da plataforma.
            </p>
            <p className="text-base mb-1.5! mt-1.5!">
              Atualmente, nossos projetos estão centrados em questões de mobilidade, tendo como objetivo a conexão do sistema de pontos da SoulUp com os sistemas do transporte público. Além disso, também trabalhamos na adição de um sistema de missões para o aplicativo, para que os usuários consigam usufruir de uma experiência mais divertida e gratificante durante a utilização da plataforma.
            </p>
            <p className="text-base mb-1.5! mt-1.5!">
              A SoulUp Society também possui ideais sustentáveis. Nossos projetos, além de gerarem uma economia para os usuários, também incentivam o uso do tarnsporte público, visando principalmente à diminuição das emissões de dióxido de carbono na atmosfera e desacelerando o efeito estufa. Acreditamos que o meio ambiente é uma parte essencial de nossa vida, portanto precisamos cuidar bem dele.
            </p>
        </div>
        
      </section>

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
    </main>
  );
}
