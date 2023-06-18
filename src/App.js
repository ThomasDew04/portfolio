import Navbar from './other/Navbar';
import Home from "./segments/Home";
import About from "./segments/About";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
