import './styles/reset.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  const [emptyCart, setEmptyCart] = useState(true);
  const [addedItems, setAddedItems] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <ProductList />
      <Cart emptyCart={emptyCart} />
    </>
  );
}
