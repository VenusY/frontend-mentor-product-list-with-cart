import '../styles/scss/OrderTotal.scss';
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

export default function OrderTotal({ modal }) {
  const { addedItems } = useContext(PageContext);
  let total = 0;

  for (let [key, value] of addedItems) {
    const cost = value.price * value.quantity;
    total += cost;
  }

  return (
    <section className={`order-total ${modal ? 'order-total--modal' : ''}`}>
      <h3 className='order-total__heading'>Order Total</h3>
      <p className='order-total__total'>${total.toFixed(2)}</p>
    </section>
  );
}
