import CartPlaceholder from './CartPlaceholder';
import CartItems from './CartItems';

export default function Cart({ emptyCart }) {
  return (
    <section className='cart'>
      <h2 className='cart__heading'>Your Cart</h2>

      {emptyCart ? <CartPlaceholder /> : <CartItems />}
    </section>
  );
}
