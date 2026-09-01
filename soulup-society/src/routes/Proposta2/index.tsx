export default function Proposta2(){
    return (
      <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            Gamificação
          </h1>

          <div className="text-2xl">
            <p>
              Aqui você entenderá mais sobre nossa segunda proposta, a Gamificação!
            </p>

        </div>
        </div>
        </section>

      <section className="">
        <div className="mt-10! ml-5!">
            <p className="text-2xl ">Nossa proposta:</p>
            <p className="text-base mb-1.5! mt-1.5!">
              Como segunda proposta de nosso projeto, temos a gamificação. Ela tem como fundamento a adição de um sistema de missões à rede social da SoulUp, o qual recompensará o usuário que completar estas missões com pontos dentro do aplicativo e também fortalecerá o engajamento da plataforma.
            </p>
            <p className="text-base mb-1.5! mt-1.5!">
              Com o novo sistema gamificado de missões, os usuários se sentirão mais animados para passar mais tempo dentro do aplicativo, visto que ao completar as missões, os usuários serão recompensados com pontos, facilitando a aquisição destes. Os desafios são baseados em meios de interagir dentro da plataforma, como fazer postagens ou entrar em comunidades, aumentando a interatividade do app e possibilitando aos usuários a formação de novos laços e amizades. 
            </p>
            <p className="text-base mb-1.5! mt-1.5!">
              O sistema gamificado de missões é extremamente benéfico para a plataforma pois, graças ao incentivo a ações interativas como realizar postagens e entrar em comunidades, o engajamento dentro do aplicativo acaba sendo fomentado e, junto disso, os usuários acabam se afeiçoando mais ao aplicativo, propiciando a atração de um público maior.
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
    )
}