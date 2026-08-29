export default function Faq() {
  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            FAQ
          </h1>

          <div className="text-2xl">
            <p>
              Veja as dúvidas mais recorrentes que giram em torno do nosso projeto.
            </p>
          </div>
        </div>
      </section>

      <section className="introducao">
        <div className="introducao__content">
          <h2 className="introducao__title">Introdução</h2>

          <p className="introducao__paragraph">
            A SoulUp Society é uma startup de cunho sustentável que tem o
            objetivo de ajudar no aprimoramento da rede social SoulUp,
            garantindo a ela novas funções que permitirão um aumento no número
            de usuários e também promoverão impactos ambientais positivos, como
            a diminuição na liberação de gases do efeito estufa como o CO2
            através do incentivo ao uso do transporte público.
          </p>

          <p className="introducao__paragraph">
            Além de seu ponto de vista ambiental, a SoulUp Society também conta
            com sua perspectiva social, uma vez que nossos serviços beneficiarão
            as pessoas que já utilizam o transporte público, fazendo com que a
            viagem se torne mais tranquila para o bolso do usuário da SoulUp
            Society.
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
