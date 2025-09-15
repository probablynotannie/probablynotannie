import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Landing from "./componentes/Landing";
import Particulos from "./componentes/body/Particles";
import Footer from "./componentes/body/Footer";
function App() {
  return (
    <BrowserRouter>
      <Particulos />
      <Landing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
