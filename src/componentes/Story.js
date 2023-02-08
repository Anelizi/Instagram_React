export default function Story(props) {
  return (
    <>
      <div class="story">
        <div class="imagem">
          <img src={props.img} alt={props.usuario} />
        </div>
        <div class="usuario">{props.usuario}</div>
      </div>

      {/* <div class="story">
        <div class="imagem">
          <img src="assets/img/meowed.svg" alt="meowed" />
        </div>
        <div class="usuario">meowed</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/img/barked.svg" alt="barked" />
        </div>
        <div class="usuario">barked</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img
            src="assets/img/nathanwpylestrangeplanet.svg"
            alt="nathanwpylestrangeplanet"
          />
        </div>
        <div class="usuario">nathanwpylestrangeplanet</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/img/wawawicomics.svg" alt="wawawicomics" />
        </div>
        <div class="usuario">wawawicomics</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/img/respondeai.svg" alt="respondeai" />
        </div>
        <div class="usuario">respondeai</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/img/filomoderna.svg" alt="filomoderna" />
        </div>
        <div class="usuario">filomoderna</div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="assets/img/memeriagourmet.svg" alt="memeriagourmet" />
        </div>
        <div class="usuario">memeriagourmet</div>
      </div> */}
    </>
  );
}
