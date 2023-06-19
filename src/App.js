import Navbar from './other/Navbar';
import Home from "./segments/Home";
import About from "./segments/About";
import Skills from "./segments/Skills";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
