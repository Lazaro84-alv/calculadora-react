import './App.css';
import Boton from './componentes/Boton';
import KemetecLogo from "./imagenes/kemetec-logo.png";

function App() {
  return (
    <div className="App">
      <div className="kemetec-logo-contenedor">
        <img 
          src={KemetecLogo}
          className="kemetec-logo"
          alt="Logo de kemetec"
        />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
