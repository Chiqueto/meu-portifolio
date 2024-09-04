import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <section className="flex flex-col justify-center items-center mt-24 mx-auto px-96 gap-10">
        <figure>
          <img
            className="rounded-full"
            src="./avatar1.webp"
            alt="Meu avatar"
            width={"216px"}
          />
        </figure>
        <h1 className="text-zinc-50 font-extrabold text-5xl text-center">
          Me chamo Luís Felipe e sou desenvolvedor{" "}
          <strong className="bg-gradient-to-tl to-amber-500 from-fuchsia-600 bg-clip-text text-transparent">
            Frontend
          </strong>
        </h1>
      </section>
    </div>
  );
}

export default App;
