import '../styles/scss/ChangeQuantityPanel.scss';
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

export default function ChangeQuantityPanel({ name }) {
  const { addedItems, setAddedItems } = useContext(PageContext);

  function increaseQuantity() {
    const updatedAddedItems = [...addedItems];
    const updatedMap = new Map(updatedAddedItems);

    updatedMap.set(name, {
      price: addedItems.get(name).price,
      quantity: ++addedItems.get(name).quantity,
    });

    setAddedItems(updatedMap);
  }

  function decreaseQuantity() {
    const updatedAddedItems = [...addedItems];
    const updatedMap = new Map(updatedAddedItems);

    if (addedItems.get(name).quantity === 1) {
      updatedMap.delete(name);
    } else {
      updatedMap.set(name, {
        price: addedItems.get(name).price,
        quantity: --addedItems.get(name).quantity,
      });
    }

    setAddedItems(updatedMap);
  }

  return (
    <div className='change-quantity-panel'>
      <button
        className='change-quantity-panel__button'
        onClick={decreaseQuantity}
      >
        <svg
          className='change-quantity-panel__icon'
          xmlns='http://www.w3.org/2000/svg'
          width='10'
          height='2'
          fill='none'
          viewBox='0 0 10 2'
        >
          <path fill='#fff' d='M0 .375h10v1.25H0V.375Z' />
        </svg>
      </button>

      <p className='change-quantity-panel__quantity'>
        {addedItems.get(name).quantity}
      </p>

      <button
        className='change-quantity-panel__button'
        onClick={increaseQuantity}
      >
        <svg
          className='change-quantity-panel__icon'
          xmlns='http://www.w3.org/2000/svg'
          width='10'
          height='10'
          fill='none'
          viewBox='0 0 10 10'
        >
          <path
            fill='#fff'
            d='M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z'
          />
        </svg>
      </button>
    </div>
  );
}
