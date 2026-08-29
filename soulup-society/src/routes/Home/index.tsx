export default function Home() {
  return (
    <main>
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-bold mb-6">
            SoulUp Society - Fiap
          </h1>

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
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Sobre</h2>
        </div>

        <div className="py-8! px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">FAQ</h2>
        </div>

        <div className="py-8 px-[5%]! min-h-[30vh]">
          <h2 className="text-3xl">Contatos</h2>
        </div>
      </section>
    </main>
  );
}