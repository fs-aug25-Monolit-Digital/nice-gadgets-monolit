import './App.css';
import products from '../public/gadgets/phones.json';
import { CartPageTemplate } from './components/templates/CartPageTemplate';

function App() {
  return (
    <CartPageTemplate cartProducts={products} />
  )
}

export default App;