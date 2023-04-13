import './styles/catalogo.css';
import Libro from './components/catalogo';

function App() {

  const valores = {
     nombre : "",
     autor:"",
     precio: 0,
     edicion : "",
     stock:true
    }
  

  return (
   <>
    <h1 className='titulo'>Libros el perrito</h1>
    <div className="main">
     
     
   <Libro valores={valores}/>
    </div>
   </>
  );
}

export default App;

