import './App.css';
import Hola from './components/saludo';
import Fruteria from './components/fruteria';
function App() {
  return (
    <div className="App">
      <Hola name="" edad = {69} pais="" />  
      <hr></hr>
    <Fruteria name=" Melon" precio={10} stock="true" />
    </div>
  );
}

export default App;

