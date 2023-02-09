import Sugestao from "./Sugestao";

export default function Sugestoes() {

  const sugestao = [

    {img: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", status: "Segue você"},
    {img: "assets/img/chibirdart.svg", usuario: "chibirdart", status: "Segue você"},
    {img: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", status: "Novo no Instagram"},
    {img: "assets/img/adorable_animals.svg", usuario: "adorable_animals", status: "Segue você"},
    {img: "assets/img/smallcutecats.svg", usuario: "smallcutecats", status: "Segue você"},
  
  ]

  return (
    <>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
          {sugestao.map((s) => <Sugestao img={s.img} usuario={s.usuario} status={s.status}/>)}
        </div>
    </>
  );
}
