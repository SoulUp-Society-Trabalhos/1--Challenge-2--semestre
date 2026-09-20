
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que é a SoulUp Society?",
    answer:
      "A SoulUp Society é uma startup criada em 2026, cujo principal objetivo é implementar melhorias na rede social SoulUp, aprimorando seus recursos e oferecendo uma experiência mais agradável ao usuário, que poderá usufruir de um leque variado de benefícios ao utilizar o aplicativo.",
  },
  {
    question: "Quais são os trabalhos atuais da SoulUp Society?",
    answer:
      "Atualmente, a SoulUp Society trabalha na implementação de um sistema que troca pontos obtidos no aplicativo SoulUp por passagens e/ou descontos no transporte público, além do desenvolvimento de um sistema de missões e de uma aba de microblogging, focada na postagem de textos curtos.",
  },
  {
    question: "Como o sistema de pontos funciona?",
    answer:
      "Os pontos podem ser acumulados no aplicativo SoulUp com o cumprimento de missões de engajamento e visualização de anúncios, podendo assim serem usados para o pagamento de passagens no transporte público ou da conta de luz.",
  },
  {
    question: "O projeto possui integração com o sistema de transporte?",
    answer:
      "Sim. Com a ajuda de parcerias com empresas como SPTrans e outras companhias relacionadas ao transporte público, a SoulUp Society foi capaz de integrar o sistema de pontos da SoulUp com o bilhete único.",
  },
  {
    question: "Quais são os objetivos da SoulUp Society?",
    answer:
      "A SoulUp Society tem como principais objetivos o aprimoramento da rede social SoulUp. Por meio de nossas melhorias dentro do aplicativo, poderemos beneficiar a rotina do usuário, fazendo-o economizar com o transporte e melhorando sua experiência com o mesmo. Além disso, buscamos também contribuir com o meio ambiente incentivando o uso de transportes coletivos.",
  },
  {
    question: "O que é o sistema de missões?",
    answer:
      "As missões são um recurso dentro da SoulUp que será responsável por fomentar o engajamento do aplicativo e facilitar a aquisição de pontos pelo usuário através do cumprimento de tarefas no aplicativo.",
  },
];

export default function Faq() {
  
  

  return (
    <main className="conteudo">
      <Hero
              titulo="FAQ"
              descricao="Veja as dúvidas mais recorrentes que giram em torno do nosso
              projeto."
            />
      <section className="bg-stone-300 py-8 px-[5%]">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-lg">
              <p className="text-2xl mb-1.5 font-bold">{item.question}</p>
              <p className="text-base">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter/>
    </main>
  );
}
