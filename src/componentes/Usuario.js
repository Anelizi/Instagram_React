import { useState } from "react";

export default function Usuario() {
  const [nome, setNome] = useState("catanacomics");
  const [foto, setFoto] = useState("assets/img/catanacomics.svg")

  function trocarNome(){
    const nomeDoUsuario = prompt("Qual é seu nome?");
    if(nomeDoUsuario === ""){
      return nome;
    }
    setNome(nomeDoUsuario);
  }

  function trocarFoto(){
    const fotoDoUsuario = prompt("Link da foto");
    if(fotoDoUsuario === ""){
      return foto;
    }
    setFoto(fotoDoUsuario);
  }

  return (
    <>
      <div className="usuario">
        <img onClick={trocarFoto} src={foto} alt="imagem de perfil" />
        <div className="texto">
          <span>
            <strong>{nome}</strong>
            <ion-icon onClick={trocarNome} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}
