import '../styles/scss/OrderTotal.scss';
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

export default function OrderTotal() {
  const { addedItems } = useContext(PageContext);
  let total = 0;

  for (let [key, value] of addedItems) {
    const cost = key.price * value;
    total += cost;
  }

  return (
    <section className='order-total'>
      <h3 className='order-total__heading'>Order Total</h3>
      <p className='order-total__total'>${total.toFixed(2)}</p>
    </section>
  );
}
