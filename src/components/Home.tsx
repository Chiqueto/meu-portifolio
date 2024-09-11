const Home = () => {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center mt-24 mx-auto sm:px-28 gap-10 mb-24 px-5 max-w-screen-lg"
    >
      <figure>
        <img
          className="rounded-full"
          src="./prof_pic_2.jpeg"
          alt="Meu avatar"
          width={"216px"}
        />
      </figure>
      <h1 className="text-zinc-50 font-extrabold sm:text-4xl text-2xl text-balance text-center ">
        Olá, me chamo Luís Felipe e sou desenvolvedor
        <strong className="bg-gradient-to-tl to-amber-500 from-fuchsia-600 bg-clip-text text-transparent">
          {" "}
          Frontend
        </strong>
      </h1>
      <article className="text-zinc-400 text-justify sm:text-center text-pretty text-lg">
        Sou estudante de Engenharia de Software pela UNIFACEF - Franca, tenho 19
        anos e moro em São Joaquim da Barra. Minha paixão pela área de
        tecnologia surgiu durante o curso técnico em Desenvolvimento de
        Sistemas, onde descobri meu interesse por criar soluções inovadoras.
        Atualmente, estou me especializando em Desenvolvimento Web com React,
        além de estudar banco de dados e backend. Meu grande sonho é aplicar
        essas habilidades para desenvolver aplicações voltadas ao mundo do
        esporte.
      </article>
      <div className="flex items-center justify-center gap-x-3 sm:gap-x-5">
        <button className="border-2 bg-zinc-200 text-zinc-800 sm:px-6 py-4 px-3 font-semibold text-lg rounded-full hover:bg-zinc-50 hover:text-zinc-900 ">
          Entre em contato
        </button>
        <button className="border-2 border-zinc-300 text-zinc-300 py-4 sm:px-6 px-3  font-semibold text-lg rounded-full  hover:text-zinc-50 hover:border-zinc-50">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Home;
