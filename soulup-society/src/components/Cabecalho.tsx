
import { useState } from "react";
import { Link } from "react-router";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [solucoesAbertas, setSolucoesAbertas] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
    setSolucoesAbertas(false);
  }

  return (
    <header className="relative z-50 flex w-full items-center justify-between bg-black px-5 py-4 text-white sm:px-[5%] sm:py-5">

      {/* Logo */}
      <Link
        className="font-[Montserrat] text-xl font-bold text-white no-underline sm:text-2xl"
        to="/"
        onClick={fecharMenu}
      >
        SoulUp Society
      </Link>

      {/* Menu desktop */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-1 xl:gap-3">
          <li>
            <Link
              className="rounded-full px-3 py-3 font-[Montserrat] text-sm font-medium text-white transition hover:bg-white hover:text-black xl:px-4 xl:text-base"
              to="/"
            >
              Início
            </Link>
          </li>

          {/* Submenu Soluções */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setSolucoesAbertas(!solucoesAbertas)}
              aria-expanded={solucoesAbertas}
              className="rounded-full px-3 py-3 font-[Montserrat] text-sm font-medium text-white transition hover:bg-white hover:text-black xl:px-4 xl:text-base"
            >
              Soluções {solucoesAbertas ? "▴" : "▾"}
            </button>

            {solucoesAbertas && (
              <ul className="absolute left-1/2 top-full z-50 mt-2 min-w-48 -translate-x-1/2 rounded-xl border border-[#333] bg-black p-2 shadow-lg">
                <li>
                  <Link
                    className="block rounded-lg px-4 py-3 text-sm text-white hover:bg-white hover:text-black"
                    to="/proposta"
                    onClick={() => setSolucoesAbertas(false)}
                  >
                    Integração
                  </Link>
                </li>

                <li>
                  <Link
                    className="block rounded-lg px-4 py-3 text-sm text-white hover:bg-white hover:text-black"
                    to="/proposta2"
                    onClick={() => setSolucoesAbertas(false)}
                  >
                    Gamificação
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              className="rounded-full px-3 py-3 font-[Montserrat] text-sm font-medium text-white transition hover:bg-white hover:text-black xl:px-4 xl:text-base"
              to="/integrantes"
            >
              Integrantes
            </Link>
          </li>

          <li>
            <Link
              className="rounded-full px-3 py-3 font-[Montserrat] text-sm font-medium text-white transition hover:bg-white hover:text-black xl:px-4 xl:text-base"
              to="/sobre"
            >
              Sobre
            </Link>
          </li>

          <li>
            <Link
              className="rounded-full px-3 py-3 font-[Montserrat] text-sm font-medium text-white transition hover:bg-white hover:text-black xl:px-4 xl:text-base"
              to="/contatos"
            >
              Contatos
            </Link>
          </li>

          <li>
            <Link
              className="rounded-full px-3 py-3 font-[Montserrat] text-sm font-medium text-white transition hover:bg-white hover:text-black xl:px-4 xl:text-base"
              to="/faq"
            >
              FAQ
            </Link>
          </li>

          <li>
            <Link
              className="rounded-full px-3 py-3 font-[Montserrat] text-sm font-medium text-white transition hover:bg-white hover:text-black xl:px-4 xl:text-base"
              to="/app"
            >
              Protótipo
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botão do menu mobile e tablet */}
      <button
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        className="ml-auto text-3xl text-white lg:hidden"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuAberto}
      >
        {menuAberto ? "✕" : "☰"}
      </button>

      {/* Menu mobile e tablet */}
      {menuAberto && (
        <nav className="absolute left-0 top-full z-50 w-full border-t border-[#333] bg-black shadow-lg lg:hidden">
          <ul className="flex flex-col gap-2 px-5 py-5">

            <li>
              <Link
                className="block rounded-lg px-4 py-3 text-white hover:bg-white hover:text-black"
                to="/"
                onClick={fecharMenu}
              >
                Início
              </Link>
            </li>

            
            <li>
              <button
                type="button"
                onClick={() => setSolucoesAbertas(!solucoesAbertas)}
                aria-expanded={solucoesAbertas}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-white hover:bg-white hover:text-black"
              >
                Soluções
                <span>{solucoesAbertas ? "−" : "+"}</span>
              </button>

              {solucoesAbertas && (
                <ul className="ml-4 mt-1 flex flex-col gap-1 border-l border-[#444] pl-3">
                  <li>
                    <Link
                      className="block rounded-lg px-4 py-3 text-sm text-gray-300 hover:bg-white hover:text-black"
                      to="/proposta"
                      onClick={fecharMenu}
                    >
                      Integração
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="block rounded-lg px-4 py-3 text-sm text-gray-300 hover:bg-white hover:text-black"
                      to="/proposta2"
                      onClick={fecharMenu}
                    >
                      Gamificação
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                className="block rounded-lg px-4 py-3 text-white hover:bg-white hover:text-black"
                to="/integrantes"
                onClick={fecharMenu}
              >
                Integrantes
              </Link>
            </li>

            <li>
              <Link
                className="block rounded-lg px-4 py-3 text-white hover:bg-white hover:text-black"
                to="/sobre"
                onClick={fecharMenu}
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                className="block rounded-lg px-4 py-3 text-white hover:bg-white hover:text-black"
                to="/contatos"
                onClick={fecharMenu}
              >
                Contatos
              </Link>
            </li>

            <li>
              <Link
                className="block rounded-lg px-4 py-3 text-white hover:bg-white hover:text-black"
                to="/faq"
                onClick={fecharMenu}
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                className="block rounded-lg px-4 py-3 text-white hover:bg-white hover:text-black"
                to="/app"
                onClick={fecharMenu}
              >
                Protótipo
              </Link>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
}
