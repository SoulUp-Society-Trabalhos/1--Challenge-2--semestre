export default function Proposta(){
    return (
      <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            Integração
          </h1>

          <div className="text-2xl">
            <p>
              Aqui você entenderá mais sobre nossa primeira proposta, a Integração!
            </p>

        </div>
        </div>
        </section>

      <section className="">
        <div className="mt-10! ml-5!">
            <p className="text-2xl ">Nossa proposta:</p>
            <p className="text-base mb-1.5! mt-1.5!">
              Como primeira proposta de nosso projeto, temos a Integração. Ela se baseia na conexão entre o sistema de pontos do aplicativo da SoulUp junto dos sistemas do transporte público, incluindo o bilhete único para metrô, trens e ônibus. A realização desta proposta é possível graças a parcerias com empresas de transporte, como a SPTrans e a Motiva.
            </p>
            <p className="text-base mb-1.5! mt-1.5!">
              Por meio dessa proposta, os usuários da SoulUp poderão utilizar os pontos que possuem dentro do aplicativo para financiar passagens para o transporte público. Eles poderão converter os pontos diretamente em saldo para o bilhete único ou gastar uma determinada quantidade para adquirir uma passagem diretamente, tendo um limite de 10 passagens por mês. Quando este limite for atingido, o usuário será capaz de transformar seus pontos em vales de desconto, que darão 20% de desconto na próxima passagem.
            </p>
            <p className="text-base mb-1.5! mt-1.5!">
              A integração será bastante benéfica para os usuários, que poderão economizar uma quantia considerável por mês com o transporte. Além disso, a integração também tem como meta incentivar o uso do transporte público, desta forma diminuindo as emissões de gás carbônico na atmosfera. Desta forma, não apenas o meio ambiente irá se beneficiar com a diminuição da emissão de gases do efeito estufa, como também a reputação da SoulUp crescerá como empresa que se importa e se dedica aos cuidados com a natureza.
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