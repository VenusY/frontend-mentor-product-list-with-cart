import '../styles/scss/Modal.scss';
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';
import ModalOrderItem from './ModalOrderItem';
import OrderTotal from './OrderTotal';
import ActionButton from './ActionButton';

export default function Modal() {
  const { addedItems, setAddedItems, setDisplayModal } =
    useContext(PageContext);
  const addedItemsArray = [...addedItems];
  const productImageMap = new Map([
    [
      'Waffle with Berries',
      require('../assets/images/image-waffle-thumbnail.jpg'),
    ],
    [
      'Vanilla Bean Crème Brûlée',
      require('../assets/images/image-creme-brulee-thumbnail.jpg'),
    ],
    [
      'Macaron Mix of Five',
      require('../assets/images/image-macaron-thumbnail.jpg'),
    ],
    [
      'Classic Tiramisu',
      require('../assets/images/image-tiramisu-thumbnail.jpg'),
    ],
    [
      'Pistachio Baklava',
      require('../assets/images/image-baklava-thumbnail.jpg'),
    ],
    [
      'Lemon Meringue Pie',
      require('../assets/images/image-meringue-thumbnail.jpg'),
    ],
    ['Red Velvet Cake', require('../assets/images/image-cake-thumbnail.jpg')],
    [
      'Salted Caramel Brownie',
      require('../assets/images/image-brownie-thumbnail.jpg'),
    ],
    [
      'Vanilla Panna Cotta',
      require('../assets/images/image-panna-cotta-thumbnail.jpg'),
    ],
  ]);

  function startNewOrder() {
    setDisplayModal(false);
    setAddedItems(new Map());
  }

  return (
    <div className='modal__background'>
      <section className='modal'>
        <img
          src={require('../assets/images/icon-order-confirmed.svg')}
          alt='Checkmark'
          className='modal__icon'
        />

        <h2 className='modal__heading'>Order Confirmed</h2>

        <p className='modal__message'>We hope you enjoy your food!</p>

        <div className='modal__order'>
          <div className='modal__order-list'>
            {addedItemsArray.map((item) => (
              <ModalOrderItem
                key={item[0]}
                image={productImageMap.get(item[0])}
                name={item[0]}
                price={item[1].price}
                quantity={item[1].quantity}
              />
            ))}
          </div>

          <OrderTotal />
        </div>

        <ActionButton
          buttonText='Start New Order'
          handleClick={startNewOrder}
        />
      </section>
    </div>
  );
}
