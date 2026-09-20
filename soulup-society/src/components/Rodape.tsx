
export default function Rodape() {
  return (
    <footer className="relative bg-[linear-gradient(180deg,#000_0%,#050505_40%,#111_75%,#1f1f1f_100%)] px-[5%] py-8 font-['Montserrat',sans-serif] text-white before:absolute before:top-0 before:left-[5%] before:h-px before:w-[90%] before:bg-white">
      <div className="flex items-start justify-between gap-16">
        <div className="w-[55%]">
          <h3 className="mb-4 text-[2.1rem] font-bold text-white">
            SoulUp Society
          </h3>

          <p className="mb-2 text-[1.8rem] text-[#d6d6d6]">
            FIAP - 2026
          </p>

          <p className="mb-8 max-w-187.5 text-[1.1rem] leading-[1.8rem] text-[#d6d6d6]">
            Startup criada visando ao aperfeiçoamento da rede social SoulUp,
            focando em áreas como a sustentabilidade e a mobilidade.
          </p>
        </div>
      </div>

      <div className="flex w-full items-start justify-between border-t border-[#8d8d8d] pt-4">
        <p className="max-w-87.5 text-[0.8rem] leading-6 text-[#d6d6d6]">
          © Todos os direitos reservados
        </p>

        <p className="max-w-87.5 text-[0.8rem] leading-6 text-[#d6d6d6]">
          Breno Lobato, Gustavo Pontes, Christian Barbuto, Eduardo Pizzoli,
          Eduardo Nery
        </p>
      </div>
    </footer>
  );
}


