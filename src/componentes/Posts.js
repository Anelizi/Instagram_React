import Post from "./Post";

export default function Posts() {
  const post = [
    {
      imgUsuario: "assets/img/meowed.svg",
      conteudo: "assets/img/gato-telefone.svg",
      nomeUsuario: "meowed",
      imgUsuarioCurtiu: "assets/img/respondeai.svg",
      nomeUsuarioCurtiu: "respondeai",
      curtidas: 101.523,
    },
    {
      imgUsuario: "assets/img/barked.svg",
      conteudo: "assets/img/dog.svg",
      nomeUsuario: "barked",
      imgUsuarioCurtiu: "assets/img/adorable_animals.svg",
      nomeUsuarioCurtiu: "adorable_animals",
      curtidas: 99.159,
    },
  ];

  return (
    <div className="posts">
      {post.map((p) => (
        <Post
          imgUsuario={p.imgUsuario}
          conteudo={p.conteudo}
          nomeUsuario={p.nomeUsuario}
          imgUsuarioCurtiu={p.imgUsuarioCurtiu}
          nomeUsuarioCurtiu={p.nomeUsuarioCurtiu}
          curtidas={p.curtidas}
        />
      ))}
    </div>
  );
}
