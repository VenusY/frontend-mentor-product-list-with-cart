import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';
import OrderItem from './OrderItem';

export default function OrderList() {
  const { addedItems } = useContext(PageContext);
  const addedItemsArray = [...addedItems];

  return (
    <div className='order__list'>
      {addedItemsArray.map((item) => (
        <OrderItem
          key={item[0]}
          name={item[0]}
          quantity={item[1].quantity}
          price={item[1].price}
        />
      ))}
    </div>
  );
}
