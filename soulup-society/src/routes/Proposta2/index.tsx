import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";

export default function Proposta() {
  return (
    <main className="conteudo">
      <Hero
        titulo="Gamificação"
        descricao="Aqui você entenderá mais sobre nossa segunda proposta, a
              Gamificação!"
      />

      <section className="bg-stone-300 py-8! px-[5%]!">
        <h2 className="text-3xl text-center font-bold mb-6">Nossa proposta</h2>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-6! rounded-xl shadow-md">
            <p className="text-base text-left">
              Como segunda proposta de nosso projeto, temos a gamificação. Ela
              tem como fundamento a adição de um sistema de missões à rede
              social da SoulUp, o qual recompensará o usuário que completar
              estas missões com pontos dentro do aplicativo e também fortalecerá
              o engajamento da plataforma.
            </p>
          </div>

          <div className="bg-white p-6! rounded-xl shadow-md">
            <p className="text-base text-left">
              Com o novo sistema gamificado de missões, os usuários se sentirão
              mais animados para passar mais tempo dentro do aplicativo, visto
              que ao completar as missões, os usuários serão recompensados com
              pontos, facilitando a aquisição destes. Os desafios são baseados
              em meios de interagir dentro da plataforma, como fazer postagens
              ou entrar em comunidades, aumentando a interatividade do app e
              possibilitando aos usuários a formação de novos laços e amizades.
            </p>
          </div>

          <div className="bg-white p-6! rounded-xl shadow-md">
            <p className="text-base text-left">
              O sistema gamificado de missões é extremamente benéfico para a
              plataforma pois, graças ao incentivo a ações interativas como
              realizar postagens e entrar em comunidades, o engajamento dentro
              do aplicativo acaba sendo fomentado e, junto disso, os usuários
              acabam se afeiçoando mais ao aplicativo, propiciando a atração de
              um público maior.
            </p>
          </div>
        </div>
      </section>

      <Newsletter/>
    </main>
  );
}
