import Sugestao from "./Sugestao";

export default function Sugestoes() {
  return (
    <>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sugestao img="assets/img/bad.vibes.memes.svg" usuario="bad.vibes.memes" status="Segue você"/>
        <Sugestao img="assets/img/chibirdart.svg" usuario="chibirdart" status="Segue você"/>
        <Sugestao img="assets/img/razoesparaacreditar.svg" usuario="razoesparaacreditar" status="Novo no Instagram"/>
        <Sugestao img="assets/img/adorable_animals.svg" usuario="adorable_animals" status="Segue você"/>
        <Sugestao img="assets/img/smallcutecats.svg" usuario="smallcutecats" status="Segue você"/>
      </div>
    </>
  );
}
