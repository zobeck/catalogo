import './styles/catalogo.css';
import Libro from './components/catalogo';

function App() {
  return (
    <div className="main">
    <Libro title="Nieve" 
    author="Orhan Pamuk"
    description="En mitad de una tormenta de nieve..." 
    price= {399} 
    stock={true} />

<Libro title="Soy un gato" 
    author="Natsume Soseki"
    description="«Soy un gato, aunque todavía no tengo nombre.»" 
    price= {560} 
    stock={false} />

     <Libro title="Lo bello y lo triste" 
    author="Yasunari Kawabata"
    description="En mitad de una tormenta de nieve..." 
    price= {260} 
    stock={true} />

    </div>
  );
}

export default App;

