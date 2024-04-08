import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';

function App() {
  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla />
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>+</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
