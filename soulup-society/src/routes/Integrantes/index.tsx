export default function Integrantes() {
  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            Integrantes
          </h1>

          <div className="text-2xl">
            <p>Apresentação geral dos membros da nossa equipe.</p>
          </div>
        </div>
      </section>
      <section className="bg-stone-300 p-10!">
        <div className="mt-10!  h-80 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 ">
          <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src="/img/foto-breno.jpg"
              alt=""
              className=" mx-auto w-48 h-48 object-cover rounded-full m-3!"
            />
            <div className="mt-4!">
              <h3 className="text-lg font-bold p-1!">Breno Elísio Lobato</h3>
              <p className="mt-1 text-sm text-gray-500">Aluno - RM569961</p>
              <a
                href="https://github.com/Brenoell"
                target="_blank"
                className="integrantes__redes"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/breno-elisio-2b123a405/"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src="public\img\foto-christian.png"
              alt=""
              className="w-48 h-48 object-cover rounded-full m-3!"
            />
            <div className="mt-4!">
              <h3 className="text-lg font-bold">Chrisitian Verzellesi</h3>
              <p className="mt-1 text-sm text-gray-500 ">Aluno - RM568677</p>
              <a
                href="https://github.com/ChrisVerBarbuto"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/christian-verzellesi-barbuto-938463382/"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
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
              <p className="mt-1 text-sm text-gray-500">Aluno - RM573234</p>
              <a
                href="https://github.com/gustavopontes1104"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-pontes-07aa6a3b3?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
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
              <p className="mt-1 text-sm text-gray-500 ">Aluno - RM570916</p>
              <a
                href="https://github.com/edu64123"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-kurahara-786b003b9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <img
              src="img\foto-eduardop.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full m-3!"
            />
            <div className="mt-4!">
              <h3 className="text-lg font-bold">Eduardo Pizzoli Junior</h3>
              <p className="mt-1 text-sm text-gray-500">Aluno - RM569529</p>
              <a
                href="https://github.com/dudupizzoli"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-pizzoli-junior-a2964640b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                className="integrantes__redes"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 px-[5%]! min-h-[30vh] bg-stone-300">
        <div className="mt-10! flex justify-center">
          <section className="bg-white text-black p-8! rounded-xl shadow-lg w-full max-w-xl">
            <h2 className="text-2xl font-bold text-center mb-3 p-3! rounded-lg">
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
