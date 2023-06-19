import Navbar from './other/Navbar';
import Home from "./segments/Home";
import About from "./segments/About";
import Skills from "./segments/Skills";
import Work from "./segments/Work";
import Contact from "./segments/Contact";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
