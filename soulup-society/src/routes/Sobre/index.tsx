import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";

export default function Sobre() {
  return (
    <main className="conteudo">
      <Hero
        titulo="Mais Sobre nós"
        descricao="qui você conhecerá um pouco mais sobre nós, nossa história e
              ideias."
      />

      <section className="sobre bg-stone-300 px-8 py-8">
        <div className="mt-10!">
          <h2 className="text-3xl text-center font-bold border-b-4 mb-5!">
            Sobre a SoulUp Society
          </h2>

          <p className="text-base mb-4! mt-1.5! text-left bg-white p-5! mr-10 rounded-lg shadow-lg">
            Criada em Abril de 2026, a SoulUp Society é uma startup focada em
            aprimorar a rede social SoulUp. Realizamos e construímos nossos
            projetos mirando a implementação de novas funcionalidades no
            aplicativo, também beneficiando o meio ambiente e facilitando a
            rotina dos usuários da plataforma.
          </p>

          <p className="text-base mb-4! mt-1.5! text-left bg-white p-5! mr-10 rounded-lg shadow-lg">
            Atualmente, nossos projetos estão centrados em questões de
            mobilidade, tendo como objetivo a conexão do sistema de pontos da
            SoulUp com os sistemas do transporte público. Além disso, também
            trabalhamos na adição de um sistema de missões para o aplicativo,
            para que os usuários consigam usufruir de uma experiência mais
            divertida e gratificante durante a utilização da plataforma.
          </p>

          <p className="text-base mb-4! mt-1.5! text-left bg-white p-5! mr-10 rounded-lg shadow-lg">
            A SoulUp Society também possui ideais sustentáveis. Nossos projetos,
            além de gerarem uma economia para os usuários, também incentivam o
            uso do transporte público, visando principalmente à diminuição das
            emissões de dióxido de carbono na atmosfera e desacelerando o efeito
            estufa. Acreditamos que o meio ambiente é uma parte essencial de
            nossa vida, portanto precisamos cuidar bem dele.
          </p>
        </div>
      </section>

      <Newsletter/>
    </main>
  );
}
