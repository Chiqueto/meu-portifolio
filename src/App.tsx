import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Knowlodges from "./components/Knowlodges";
import Contact from "./components/Contact";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Knowlodges />
      <Projects />
      <Experience />
      <Contact />
      <ContactUs />
    </div>
  );
}

export default App;
