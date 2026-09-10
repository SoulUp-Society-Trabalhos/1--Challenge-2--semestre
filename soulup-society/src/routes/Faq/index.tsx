import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que é a SoulUp Society?",
    answer: "A SoulUp Society é uma startup criada em 2026, cujo principal objetivo é implementar melhorias na rede social SoulUp, aprimorando seus recursos e oferecendo uma experiência mais agradável ao usuário, que poderá usufruir de um leque variado de benefícios ao utilizar o aplicativo.",
  },
  {
    question: "Quais são os trabalhos atuais da SoulUp Society?",
    answer: "Atualmente, a SoulUp Society trabalha na implementação de um sistema que troca pontos obtidos no aplicativo SoulUp por passagens e/ou descontos no transporte público, além do desenvolvimento de um sistema de missões e de uma aba de microblogging, focada na postagem de textos curtos.",
  },
  {
    question: "Como o sistema de pontos funciona?",
    answer: "Os pontos podem ser acumulados no aplicativo SoulUp com o cumprimento de missões de engajamento e visualização de anúncios, podendo assim serem usados para o pagamento de passagens no transporte público ou da conta de luz.",
  },
  {
    question: "O projeto possui integração com o sistema de transporte?",
    answer: "Sim. Com a ajuda de parcerias com empresas como SPTrans e outras companhias relacionadas ao transporte público, a SoulUp Society foi capaz de integrar o sistema de pontos da SoulUp com o bilhete único.",
  },
  {
    question: "Quais são os objetivos da SoulUp Society?",
    answer: "A SoulUp Society tem como principais objetivos o aprimoramento da rede social SoulUp. Por meio de nossas melhorias dentro do aplicativo, poderemos beneficiar a rotina do usuário, fazendo-o economizar com o transporte e melhorando sua experiência com o mesmo. Além disso, buscamos também contribuir com o meio ambiente incentivando o uso de transportes coletivos.",
  },
  {
    question: "O que é o sistema de missões?",
    answer: "As missões são um recurso dentro da SoulUp que será responsável por fomentar o engajamento do aplicativo e facilitar a aquisição de pontos pelo usuário através do cumprimento de tarefas no aplicativo.",
  },
];

export default function Faq() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (email) {
      setModalMessage(`Obrigado por se cadastrar, ${email}!`);
      setShowModal(true);
      e.currentTarget.reset();
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-white font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">FAQ</h1>

          <div className="text-2xl">
            <p>
              Veja as dúvidas mais recorrentes que giram em torno do nosso
              projeto.
            </p>
          </div>
        </div>
      </section>

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

      <section className="bg-stone-300 py-8 px-[5%] min-h-[30vh]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl text-center font-bold border-b-4 border-black inline-block w-full mb-10">
            Nosso Newsletter!
          </h2>

          <div className="bg-white text-black p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
              Receba novidades do nosso projeto!
            </h2>

            <form className="formulario__newsletter" onSubmit={handleSubmit}>
              <fieldset className="newsletter__fieldset">
                <label htmlFor="idEmail" className="sr-only">
                  Email
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    id="idEmail"
                    name="email"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:border-black"
                    placeholder="Digite seu Email."
                    required
                    aria-describedby="email-help"
                  />
                  <button
                    type="submit"
                    id="btnEnviar"
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Enviar
                  </button>
                </div>
                <p id="email-help" className="sr-only">
                  Insira seu email para receber novidades
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </section>

      {showModal && (
        <dialog id="modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={closeModal}>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Confirmação</h3>
              <button
                aria-label="Fechar a Janela"
                id="btnFecharModal"
                onClick={closeModal}
                className="text-2xl text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div id="msg">
              <p>{modalMessage}</p>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              OK
            </button>
          </div>
        </dialog>
      )}
    </main>
  );
}