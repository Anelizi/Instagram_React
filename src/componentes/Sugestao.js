export default function Sugestao(props) {
  return (
    <>
      <div class="sugestao">
        <div class="usuario">
          <img src={props.img} alt={props.usuario} />
          <div class="texto">
            <div class="nome">{props.usuario}</div>
            <div class="razao">{props.status}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      {/* <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/chibirdart.svg" alt="chibirdart" />
          <div class="texto">
            <div class="nome">chibirdart</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img
            src="assets/img/razoesparaacreditar.svg"
            alt="razoesparaacreditar"
          />
          <div class="texto">
            <div class="nome">razoesparaacreditar</div>
            <div class="razao">Novo no Instagram</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
          <div class="texto">
            <div class="nome">adorable_animals</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/smallcutecats.svg" alt="smallcutecats" />
          <div class="texto">
            <div class="nome">smallcutecats</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div> */}
    </>
  );
}
