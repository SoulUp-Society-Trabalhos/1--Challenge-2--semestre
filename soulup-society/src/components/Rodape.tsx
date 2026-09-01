import "./Rodape.css"

function Rodape() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__intro">
          <h3 className="footer__group-name">SoulUp Society</h3>

          <p className="footer__group-sub">FIAP - 2026</p>

          <p className="footer__group-descricao">
            Startup criada visando ao aperfeiçoamento da rede social SoulUp,
            focando em áreas como a sustentabilidade e a mobilidade.
          </p>
        </div>

        
      </div>

      <div className="footer_direitos">
        <p>© Todos os direitos reservados</p>
        <p>
          Breno Lobato, Gustavo Pontes, Christian Barbuto, Eduardo Pizzoli,
          Eduardo Nery
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
