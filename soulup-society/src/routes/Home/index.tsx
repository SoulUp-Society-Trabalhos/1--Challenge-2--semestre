export default function Home() {
  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            SoulUp Society - Fiap
          </h1>

          <div className="text-2xl">
            <p>
              Uma breve apresentação de nossas proposta, girando em torno da
              empresa SoulUp.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-300 py-8 px-[5%]">
        <section className="py-8 px-[5%]">
          <h2>Proposta</h2>
        </section>
        <section className="py-8 px-[5%]">
          <h2>Integrantes</h2>
        </section>
        <section className="py-8 px-[5%]">
          <h2>Sobre</h2>
        </section>
        <section className="py-8 px-[5%]">
          <h2>Faq</h2>
        </section>
        <section className="py-8 px-[5%]">
          <h2>Sobre</h2>
        </section>
        <section className="py-8 px-[5%]">
          <h2>Contatos</h2>
        </section>
      </section>
    </main>
  );
}
