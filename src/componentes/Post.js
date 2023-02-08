export default function Post(props) {
  return (
    <>
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imgUsuario} alt={props.nomeUsuario} />
            {props.nomeUsuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.conteudo} alt="gato-telefone" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imgUsuarioCurtiu} alt={props.nomeUsuarioCurtiu} />
            <div class="texto">
              Curtido por <strong>{props.nomeUsuarioCurtiu}</strong> e{" "}
              <strong>outras {props.curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="assets/img/barked.svg" alt="barked" />
            barked
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="assets/img/dog.svg" alt="dog" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e{" "}
              <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
