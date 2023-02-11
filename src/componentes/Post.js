import { useState } from "react";

export default function Post(props) {
  const [salva,setSalva] = useState(false);
  const [curtida, setCurtida] = useState(parseFloat(props.curtidas));
  const [likes, setLikes] = useState(false);

  function curtir() {
    if (likes === false){
      setCurtida(curtida + 1);
    }else{
      setCurtida(curtida - 1);
    }
    setLikes(!likes);
  }

  function doubleClick() {
    if (likes === false){
      setCurtida(curtida + 1);
    }
    setLikes(true);
  }

  return (
    <>
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.imgUsuario} alt={props.nomeUsuario} />
            {props.nomeUsuario}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={props.conteudo} onDoubleClick={doubleClick} alt="gato-telefone" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name={likes ? "heart" : "heart-outline"} id={likes ? "corRed" : ""} onClick={curtir}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={salva ? "bookmark" : "bookmark-outline" } id={salva ? "corAzul" : ""} onClick={() => setSalva(!salva)}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.imgUsuarioCurtiu} alt={props.nomeUsuarioCurtiu} />
            <div className="texto">
              Curtido por <strong>{props.nomeUsuarioCurtiu}</strong> e{" "}
              <strong>outras {curtida} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
