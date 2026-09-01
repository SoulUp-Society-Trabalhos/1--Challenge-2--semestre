export default function Integrantes() {
  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            Integrantes
          </h1>

          <div className="text-2xl">
            <p>
              Apresentação geral dos membros da nossa equipe.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-10! ml-5! h-80 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5">
          <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="/img/foto-breno.jpg"
                alt=""
                className=" mx-auto w-48 h-48 object-cover rounded-full m-3!"
              />
              <div className="mt-4!">
                <h3 className="text-lg font-bold p-1!">Breno Elísio Lobato</h3>
                <p className="mt-1 text-sm text-gray-500">Aluno</p>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="public\img\foto-christian.png"
                alt=""
                className="w-48 h-48 object-cover rounded-full m-3!"
              />
              <div className="mt-4!">
                <h3 className="text-lg font-bold">
                  Chrisitian Verzellesi
                </h3>
                <p className="mt-1 text-sm text-gray-500 ">Aluno</p>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="public\img\foto-gustavo.png"
                alt=""
                className="w-48 h-48 object-cover rounded-full m-3!"
              />
              <div className="mt-4!">
                <h3 className="text-lg font-bold">Gustavo Lizier Pontes</h3>
                <p className="mt-1 text-sm text-gray-500">Aluno</p>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="public\img\foto-eduardo.png"
                alt=""
                className="w-48 h-48 object-cover rounded-full m-3!"
              />
              <div className="mt-4!">
                <h3 className="text-lg font-bold ">Eduardo Nery Kurahara</h3>
                <p className="mt-1 text-sm text-gray-500 ">Aluno</p>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="public\img\foto-eduardop.jpg"
                alt=""
                className="w-48 h-48 object-cover rounded-full m-3!"
              />
              <div className="mt-4!">
                <h3 className="text-lg font-bold">Eduardo Pizzoli Junior</h3>
                <p className="mt-1 text-sm text-gray-500">Aluno</p>
              </div>
          </div>
      </div>
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
