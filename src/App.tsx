import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Knowlodges from "./components/Knowlodges";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Knowlodges />
      <Projects />
      <Experience />
      <Contact />
      <div className="bg-neutral-800 max-w-fit px-5 py-4 -sm mx-auto rounded-2xl">
        <iframe
          className="mx-auto w-[320px] h-[180px] sm:w-[720px] sm:h-[405px]"
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7239307519758663680?compact=1"
          title="Publicação incorporada"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
