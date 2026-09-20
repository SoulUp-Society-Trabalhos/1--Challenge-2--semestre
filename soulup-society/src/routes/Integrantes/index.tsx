import CardIntegrantes from "../../components/CardIntegrantes";

const integrantes = [
  {
    nome: "Breno Elísio Lobato",
    rm: "569961",
    turma: "1TDSPJ",
    foto: "/img/foto-breno.jpg",
    github: "https://github.com/Brenoell",
    linkedin: "https://www.linkedin.com/in/breno-elisio-2b123a405/",
  },
  {
    nome: "Chrisitian Verzellesi",
    rm: "568677",
    turma: "1TDSPJ",
    foto: "/img/foto-christian.png",
    github: "https://github.com/ChrisVerBarbuto",
    linkedin:
      "https://www.linkedin.com/in/christian-verzellesi-barbuto-938463382/",
  },
  {
    nome: "Gustavo Lizier Pontes",
    rm: "573234",
    turma: "1TDSPJ",
    foto: "/img/foto-gustavo.png",
    github: "https://github.com/gustavopontes1104",
    linkedin: "https://www.linkedin.com/in/gustavo-pontes-07aa6a3b3/",
  },
  {
    nome: "Eduardo Nery Kurahara",
    rm: "570916",
    turma: "1TDSPJ",
    foto: "/img/foto-eduardo.png",
    github: "https://github.com/edu64123",
    linkedin: "https://www.linkedin.com/in/eduardo-kurahara-786b003b9/",
  },
  {
    nome: "Eduardo Pizzoli Junior",
    rm: "569529",
    turma: "1TDSPJ",
    foto: "/img/foto-eduardop.jpg",
    github: "https://github.com/dudupizzoli",
    linkedin: "https://www.linkedin.com/in/eduardo-pizzoli-junior-a2964640b/",
  },
];

export default function Integrantes() {
  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
            Integrantes
          </h1>

          <p className="text-2xl">
            Apresentação geral dos membros da nossa equipe.
          </p>
        </div>
      </section>

      <section className="bg-stone-300 p-10!">
        <h2 className="text-3xl text-center font-bold border-b-4">
          Integrantes
        </h2>

        <div className="mt-10! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {integrantes.map((integrante) => (
            <CardIntegrantes
              key={integrante.rm}
              nome={integrante.nome}
              rm={integrante.rm}
              turma={integrante.turma}
              foto={integrante.foto}
              github={integrante.github}
              linkedin={integrante.linkedin}
            />
          ))}
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

            <form className="formulario__newsletter">
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
