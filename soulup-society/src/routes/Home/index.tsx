import { Link } from "react-router";
export default function Home() {
  return (
    <main>
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-bold mb-6">SoulUp Society - Fiap</h1>

          <p className="text-2xl">
            Uma breve apresentação de nossa proposta, girando em torno da
            empresa SoulUp.
          </p>
        </div>
      </section>

      <section className="bg-stone-300 py-8 px-[5%]">
        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Proposta</h2>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Integrantes</h2>
          <div>
            <div className="bg-">
              <img src="" alt="" />
              <h3>Breno</h3>
              <p>Aluno</p>
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Christian</h3>
              <p>Aluno</p>
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Gustavo P.</h3>
              <p>Aluno</p>
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Eduardo N.</h3>
              <p>Aluno</p>
            </div>
            <div className="">
              <img src="" alt="" />
              <h3>Eduardo P.</h3>
              <p>Aluno</p>
            </div>
          </div>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Sobre</h2>
          <div className="mt-5! ml-5!">
            <p className="text-2xl ">Conheça mais sobre nós!</p>
            <p className="text-base mb-1.5! mt-1.5!">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis corporis itaque commodi fugit tempore nulla laborum
              impedit inventore delectus, voluptatibus rerum soluta,
              necessitatibus incidunt unde odit! Explicabo cupiditate
              repellendus amet!
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
                Lorem ipsum dolor sit amet consectetur?
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                quod cupiditate voluptas tenetur deserunt ullam eveniet optio
                eaque, nostrum, ducimus neque iste quas? Explicabo libero ex,
                expedita, excepturi officia repellendus, maiores ipsum itaque
                fuga ab alias quia quos minima? Recusandae.
              </p>
            </div>
            <div className="mb-3!">
              <p className="text-2xl mb-1.5!">Lorem ipsum dolor sit amet?</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                asperiores quos ea itaque consequatur iste animi sequi quam,
                nihil debitis nobis aut totam, quidem quisquam modi libero ab?
                Pariatur, totam.
              </p>
            </div>
            <div className="mb-3!">
              <p className="text-2xl mb-1.5!">Lorem, ipsum dolor?</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quasi ipsa corrupti voluptas voluptatum saepe cum,
                eveniet aut praesentium expedita.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Contatos</h2>
        </div>
      </section>
    </main>
  );
}
