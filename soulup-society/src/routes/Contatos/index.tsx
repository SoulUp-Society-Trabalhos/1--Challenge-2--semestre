import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contatos() {
  type ContatosForm = {
    nome: string;
    email: string;
    msg: string;
  };

  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContatosForm>();

  return (
    <main className="conteudo">
      <section className="min-h-[90vh] bg-stone-100 font-montserrat flex flex-col items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-montserrat font-bold mb-6">
            Nossos contatos
          </h1>

          <div className="text-2xl">
            <p>Aqui você conseguirá entrar em contato com a gente!</p>
          </div>
        </div>
      </section>

      <section className="bg-stone-300 py-8 px-[5%]">
        <h2 className="text-3xl text-center font-bold border-b-4 mb-5!">
          Nosso formulário!
        </h2>

        <div>
          <dialog
            id="modal__aviso"
            className="rounded-[10px] bg-black text-white text-center m-auto w-[28%] h-[15%] py-6 backdrop:bg-black/45"
          >
            <h3>Ótimo!</h3>
            <p>Mensagem enviada com sucesso!</p>

            <button
              id="fechar__modal"
              className="absolute top-2 right-2 w-12 text-white cursor-pointer border-0 bg-transparent"
            >
              X
            </button>
          </dialog>

          <dialog
            id="modal__falha"
            className="rounded-[10px] bg-black text-white text-center m-auto w-[28%] h-[19%] py-6 backdrop:bg-black/45"
          >
            <h3>Houve um erro.</h3>
            <p>Preencha todos os campos para poder enviar a mensagem.</p>

            <button
              id="fechar__modalFalha"
              className="absolute top-2 right-2 w-12 text-white cursor-pointer border-0 bg-transparent"
            >
              X
            </button>
          </dialog>

          {!enviado ? (
            <form
              className="w-full max-w-250 mx-auto p-8 flex flex-col gap-6 bg-[#ffffff] border border-[#2a2a2a] rounded-3xl"
              onSubmit={handleSubmit((data) => {
                console.log(data);
                setEnviado(true);
              })}
            >
              <div className="flex flex-col gap-[0.6rem]">
                <label
                  htmlFor="nome"
                  className="text-black text-[0.95rem] font-semibold"
                >
                  Nome
                </label>

                <input
                  type="text"
                  id="nome"
                  {...register("nome", {
                    required: "O nome é obrigatório.",
                  })}
                  placeholder="Digite seu nome."
                  className="w-full p-4 border-0 rounded-[0.8rem] bg-[#d7d3d0] text-black text-[0.95rem] placeholder:text-[#888]"
                />

                {errors.nome && (
                  <p className="text-sm text-red-600">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-[0.6rem]">
                <label
                  htmlFor="email"
                  className="text-black text-[0.95rem] font-semibold"
                >
                  E-mail
                </label>

                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "O e-mail é obrigatório.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Digite um e-mail válido.",
                    },
                  })}
                  placeholder="Digite seu E-mail."
                  className="w-full p-4 border-0 rounded-[0.8rem] bg-[#d7d3d0] text-white text-[0.95rem] placeholder:text-[#888]"
                />

                {errors.email && (
                  <p className="text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-[0.6rem]">
                <label
                  htmlFor="msg"
                  className="text-black text-[0.95rem] font-semibold"
                >
                  Mensagem
                </label>

                <textarea
                  id="msg"
                  {...register("msg", {
                    required: "A mensagem é obrigatória.",
                  })}
                  placeholder="Digite sua mensagem."
                  className="w-full p-4 border-0 rounded-[0.8rem] bg-[#d7d3d0] text-white text-[0.95rem] placeholder:text-[#888] min-h-37.5 resize-y"
                />

                {errors.msg && (
                  <p className="text-sm text-red-600">
                    {errors.msg.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                id="Btn_enviar"
                className="p-4 border-0 rounded-[0.8rem] bg-[#222] text-white text-base font-semibold cursor-pointer transition duration-300 hover:bg-[#333] hover:-translate-y-0.5"
              >
                Enviar mensagem
              </button>
            </form>
          ) : (
            <div className="w-full max-w-250 mx-auto p-8 bg-[#ffffff] border border-[#2a2a2a] rounded-3xl text-center">
              <h3 className="text-3xl font-bold mb-4">
                Mensagem enviada com sucesso!
              </h3>

              <p className="text-lg">
                Obrigado pelo contato. Recebemos sua mensagem!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}