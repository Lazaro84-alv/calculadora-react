import './App.css';
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

      </div>
    </div>
  );
}

export default App;
