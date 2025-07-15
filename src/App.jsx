import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Landing from "./componentes/Landing";
import Particulos from "./componentes/body/Particles";
function App() {
  return (
    <BrowserRouter>
      <Particulos />
      <Landing />
    </BrowserRouter>
  );
}

export default App;
