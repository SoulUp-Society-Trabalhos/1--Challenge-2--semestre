
export default function Rodape() {
  return (
    <footer
      className="
        relative
        bg-[linear-gradient(180deg,#000_0%,#050505_40%,#111_75%,#1f1f1f_100%)]
        px-5 py-8
        font-['Montserrat',sans-serif]
        text-white
        before:absolute before:left-[5%] before:top-0
        before:h-px before:w-[90%] before:bg-white
        sm:px-[5%] sm:py-10
      "
    >
      
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">

        <div className="w-full md:w-[55%]">
          <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-[2.1rem]">
            SoulUp Society
          </h3>

          <p className="mb-3 text-xl text-[#d6d6d6] sm:text-2xl">
            FIAP - 2026
          </p>

          <p className="mb-4 max-w-3xl text-sm leading-6 text-[#d6d6d6] sm:text-base sm:leading-7">
            Startup criada visando ao aperfeiçoamento da rede social SoulUp,
            focando em áreas como a sustentabilidade e a mobilidade.
          </p>
        </div>

      </div>

      
      <div
        className="
          flex flex-col gap-3
          border-t border-[#8d8d8d]
          pt-4
          sm:flex-row sm:items-start sm:justify-between
          sm:gap-6
        "
      >
        <p className="text-xs leading-5 text-[#d6d6d6] sm:text-sm">
          © Todos os direitos reservados
        </p>

        <p className="max-w-full text-xs leading-5 text-[#d6d6d6] sm:max-w-87.5 sm:text-right sm:text-sm">
          Breno Lobato, Gustavo Pontes, Christian Barbuto, Eduardo Pizzoli,
          Eduardo Nery
        </p>
      </div>
    </footer>
  );
}
