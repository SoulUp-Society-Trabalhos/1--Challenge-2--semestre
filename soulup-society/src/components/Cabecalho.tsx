import "./Cabecalho.css"

function Cabecalho() {
  return (
    <header className="header__container">
      <a className="header__title">SoulUp Society</a>
      <button
        className="hamburger"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="header-nav"
      >
        <span className="hamburger__bar"></span>
        <span className="hamburger__bar"></span>
        <span className="hamburger__bar"></span>
      </button>
      <nav className="header__nav" id="header-nav">
        <ul className="header__ul">
          <li className="header__li">
            <a href="../index.html">Início</a>
          </li>
          <li className="header__li dropdown _marcado">
            <button className="dropdown__btn">
              Soluções
              <i className="fa-solid fa-chevron-down"></i>
            </button>

            <ul className="dropdown__menu">
              <li>
                <a href="./pages/propostas.html">Integração</a>
              </li>
              <li>
                <a href="./pages/proposta2.html">Gamifição</a>
              </li>
            </ul>
          </li>
          <li className="header__li">
            <a href="./pages/integrantes.html">Integrantes</a>
          </li>
          <li className="header__li">
            <a href="./pages/sobre.html">Sobre</a>
          </li>
          <li className="header__li">
            <a href="./pages/contatos.html">Contatos</a>
          </li>
          <li className="header__li">
            <a href="./pages/faq.html">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
