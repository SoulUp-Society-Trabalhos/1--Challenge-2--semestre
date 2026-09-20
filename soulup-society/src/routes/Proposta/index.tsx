import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";

export default function Proposta() {
  return (
    <main className="conteudo">
      <Hero
        titulo="Integração"
        descricao="qui você entenderá mais sobre nossa primeira proposta, a
              Integração!"
      />

      <section className="bg-stone-300 py-8! px-[5%]!">
        <h2 className="text-3xl text-center font-bold mb-6">Nossa proposta</h2>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-6! rounded-xl shadow-md">
            <p className="text-base">
              Como primeira proposta de nosso projeto, temos a Integração. Ela
              se baseia na conexão entre o sistema de pontos do aplicativo da
              SoulUp junto dos sistemas do transporte público, incluindo o
              bilhete único para metrô, trens e ônibus. A realização desta
              proposta é possível graças a parcerias com empresas de transporte,
              como a SPTrans e a Motiva.
            </p>
          </div>

          {/* Caixa 2 */}
          <div className="bg-white p-6! rounded-xl shadow-md">
            <p className="text-base">
              Por meio dessa proposta, os usuários da SoulUp poderão utilizar os
              pontos que possuem dentro do aplicativo para financiar passagens
              para o transporte público. Eles poderão converter os pontos
              diretamente em saldo para o bilhete único ou gastar uma
              determinada quantidade para adquirir uma passagem diretamente,
              tendo um limite de 10 passagens por mês. Quando este limite for
              atingido, o usuário será capaz de transformar seus pontos em vales
              de desconto, que darão 20% de desconto na próxima passagem.
            </p>
          </div>

          <div className="bg-white p-6! rounded-xl shadow-md">
            <p className="text-base">
              A integração será bastante benéfica para os usuários, que poderão
              economizar uma quantia considerável por mês com o transporte. Além
              disso, a integração também tem como meta incentivar o uso do
              transporte público, desta forma diminuindo as emissões de gás
              carbônico na atmosfera. Desta forma, não apenas o meio ambiente
              irá se beneficiar com a diminuição da emissão de gases do efeito
              estufa, como também a reputação da SoulUp crescerá como empresa
              que se importa e se dedica aos cuidados com a natureza.
            </p>
          </div>
        </div>
      </section>

      <Newsletter/>
    </main>
  );
}
