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
      <div className="bg-neutral-800 px-5 py-4 max-w-screen-sm mx-5">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7239307519758663680?compact=1"
          frameborder="0"
          allowfullscreen=""
          title="Publicação incorporada"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
