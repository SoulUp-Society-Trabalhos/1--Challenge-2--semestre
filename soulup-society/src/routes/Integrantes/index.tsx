import CardIntegrantes from "../../components/CardIntegrantes";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";

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
      <Hero
        titulo="Integrantes"
        descricao="Conheça os membros do nosso grupo."
      />

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

      <Newsletter/>
    </main>
  );
}
