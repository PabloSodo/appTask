import './App.css';
import fCCLogo from './imagenes/fCC-logo.png';
import ListaTareas from './componentes/ListaTareas';


function App() {
  return (
    <div className="App-tareas">
      {/*<div className="freecodecamp-logo-contenedor">
        <img
        src={ fCCLogo }
        className="freecodecamp-logo"
        alt="Logo"
        />
      </div>*/}
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaTareas/>
        
      </div>
    </div>
  );
}

export default App;
