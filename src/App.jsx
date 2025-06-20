import './styles/reset.css';
import './styles/scss/App.scss';
import { useState } from 'react';
import { PageContext } from './contexts/PageContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  const [emptyCart, setEmptyCart] = useState(true);
  const [addedItems, setAddedItems] = useState(new Map());
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <PageContext.Provider
      value={{
        emptyCart,
        setEmptyCart,
        addedItems,
        setAddedItems,
        displayModal,
        setDisplayModal,
      }}
    >
      <ProductList />
      <Cart emptyCart={emptyCart} addedItems={addedItems} />
    </PageContext.Provider>
  );
}
