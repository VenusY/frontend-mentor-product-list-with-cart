import './styles/reset.css';
import './styles/scss/App.scss';
import { useState } from 'react';
import { PageContext } from './contexts/PageContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Modal from './components/Modal';

export default function App() {
  const [addedItems, setAddedItems] = useState(new Map());
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <PageContext.Provider
      value={{
        addedItems,
        setAddedItems,
        displayModal,
        setDisplayModal,
      }}
    >
      <ProductList />
      <Cart addedItems={addedItems} />
      {displayModal && <Modal />}
    </PageContext.Provider>
  );
}
