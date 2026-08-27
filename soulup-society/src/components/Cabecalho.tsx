import { Link } from "react-router";
import "./Cabecalho.css"
function Cabecalho() {
  return (
    <header className="header__container">
      <Link className="header__title" to="/">
        SoulUp Society
      </Link>

      <nav className="header__nav" id="header-nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link to="/">Início</Link>
          </li>

          <li className="header__li dropdown _marcado">
            <button className="dropdown__btn">
              Soluções
            </button>

            <ul className="dropdown__menu">
              <li>
                <Link to="/proposta">Integração</Link>
              </li>

              <li>
                <Link to="/proposta2">Gamificação</Link>
              </li>
            </ul>
          </li>

          <li className="header__li">
            <Link to="/integrantes">Integrantes</Link>
          </li>

          <li className="header__li">
            <Link to="/sobre">Sobre</Link>
          </li>

          <li className="header__li">
            <Link to="/contatos">Contatos</Link>
          </li>

          <li className="header__li">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
