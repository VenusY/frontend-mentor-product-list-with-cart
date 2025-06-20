import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';
import OrderItem from './OrderItem';

export default function OrderList() {
  const { addedItems } = useContext(PageContext);
  const addedItemsArray = [...addedItems];

  return (
    <div>
      {addedItemsArray.map((item) => (
        <OrderItem
          key={item[0].name}
          name={item[0].name}
          quantity={item[1]}
          price={item[0].price}
        />
      ))}
    </div>
  );
}
