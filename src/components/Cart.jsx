import '../styles/scss/Cart.scss';
import CartPlaceholder from './CartPlaceholder';
import Order from './Order';

export default function Cart({ addedItems }) {
  let quantity = 0;

  for (let [key, value] of addedItems) {
    quantity += value.quantity;
  }

  return (
    <section className='cart'>
      <h2
        className={`cart__heading ${quantity ? 'cart__heading--s-margin' : ''}`}
      >
        Your Cart ({quantity})
      </h2>

      {quantity ? <Order /> : <CartPlaceholder />}
    </section>
  );
}
