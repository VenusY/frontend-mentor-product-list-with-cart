import '../styles/scss/AddButton.scss';
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

export default function AddButton({ name, price }) {
  const { addedItems, setAddedItems } = useContext(PageContext);

  function addProduct() {
    let updatedAddedItems = [];

    for (let item of addedItems) {
      updatedAddedItems.push(item);
    }

    updatedAddedItems.push([name, { price: price, quantity: 1 }]);
    setAddedItems(new Map(updatedAddedItems));
  }

  return (
    <button className='add-button' onClick={addProduct}>
      <img
        src={require('../assets/images/icon-add-to-cart.svg')}
        alt='Cart'
        className='add-button__icon'
      />
      <span className='add-button__text'>Add to Cart</span>
    </button>
  );
}
