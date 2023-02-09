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
    </>
  );
}
