import { Link } from "react-router";

export default function Cabecalho() {
  return (
    <header
      className="
        bg-black text-white flex items-center relative z-9999
        w-full py-8 px-[5%]
      "
    >
      <Link
        className="
          text-[2.1rem] font-bold m-0
          font-[Montserrat] text-white no-underline
        "
        to="/"
      >
        SoulUp Society
      </Link>

      <nav
        className="
          absolute left-1/2 -translate-x-1/2
        "
        id="header-nav"
      >
        <ul
          className="
            flex items-center justify-center
            gap-[clamp(1.5rem,2vw,3rem)]
            list-none m-0 p-0
          "
        >
          <li
            className="
              flex items-center relative
              font-[Montserrat] font-medium
            "
          >
            <Link
              className="
                text-white no-underline bg-transparent
                border-0 cursor-pointer
                py-4 px-6 rounded-full
                transition-all duration-300
                text-base
                hover:bg-white hover:text-black
              "
              to="/"
            >
              Início
            </Link>
          </li>

          <li
            className="
              flex items-center relative
              font-[Montserrat] font-medium
              group
            "
          >
            <button
              className="
                text-white bg-transparent
                border-0 cursor-pointer
                py-4 px-6 rounded-full
                transition-all duration-300
                text-base font-inherit
                hover:bg-white hover:text-black
              "
            >
              Soluções
            </button>

            <ul
              className="
                absolute top-[calc(100%+10px)] left-1/2
                -translate-x-1/2
                min-w-50
                bg-black border border-[#333]
                rounded-xl p-2
                list-none
                hidden group-hover:block
                z-9999
              "
            >
              <li className="w-full">
                <Link
                  className="
                    block w-full
                    py-3 px-4
                    rounded-lg
                    text-white no-underline
                    text-[0.95rem]
                    hover:bg-white hover:text-black
                  "
                  to="/proposta"
                >
                  Integração
                </Link>
              </li>

              <li className="w-full">
                <Link
                  className="
                    block w-full
                    py-3 px-4
                    rounded-lg
                    text-white no-underline
                    text-[0.95rem]
                    hover:bg-white hover:text-black
                  "
                  to="/proposta2"
                >
                  Gamificação
                </Link>
              </li>
            </ul>
          </li>

          <li
            className="
              flex items-center relative
              font-[Montserrat] font-medium
            "
          >
            <Link
              className="
                text-white no-underline bg-transparent
                border-0 cursor-pointer
                py-4 px-6 rounded-full
                transition-all duration-300
                text-base
                hover:bg-white hover:text-black
              "
              to="/integrantes"
            >
              Integrantes
            </Link>
          </li>

          <li
            className="
              flex items-center relative
              font-[Montserrat] font-medium
            "
          >
            <Link
              className="
                text-white no-underline bg-transparent
                border-0 cursor-pointer
                py-4 px-6 rounded-full
                transition-all duration-300
                text-base
                hover:bg-white hover:text-black
              "
              to="/sobre"
            >
              Sobre
            </Link>
          </li>

          <li
            className="
              flex items-center relative
              font-[Montserrat] font-medium
            "
          >
            <Link
              className="
                text-white no-underline bg-transparent
                border-0 cursor-pointer
                py-4 px-6 rounded-full
                transition-all duration-300
                text-base
                hover:bg-white hover:text-black
              "
              to="/contatos"
            >
              Contatos
            </Link>
          </li>

          <li
            className="
              flex items-center relative
              font-[Montserrat] font-medium
            "
          >
            <Link
              className="
                text-white no-underline bg-transparent
                border-0 cursor-pointer
                py-4 px-6 rounded-full
                transition-all duration-300
                text-base
                hover:bg-white hover:text-black
              "
              to="/faq"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}



