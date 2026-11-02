import { useState } from "react";

export default function Newsletter() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);
    const email = formData.get("email");

    setModalMessage(
      `Email ${email} cadastrado com sucesso! Agora você receberá nossas novidades.`
    );

    setShowModal(true);

    form.reset();
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <section className="bg-stone-300 py-8 px-[5%] min-h-[30vh]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl text-center font-bold border-b-4 border-black inline-block w-full mb-10">
            Nosso Newsletter!
          </h2>

          <div className="bg-white text-black p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
              Receba novidades do nosso projeto!
            </h2>

            <form
              className="formulario__newsletter"
              onSubmit={handleSubmit}
            >
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
        <dialog
          open
          id="modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full h-full max-w-none max-h-none"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black p-6 rounded-xl shadow-lg max-w-md w-full mx-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">
                Confirmação
              </h3>

              <button
                type="button"
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
              type="button"
              onClick={closeModal}
              className="mt-4 w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              OK
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}