import './styles/reset.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  const [emptyCart, setEmptyCart] = useState(true);

  return (
    <>
      <ProductList />
      <Cart emptyCart={emptyCart} />
    </>
  );
}
