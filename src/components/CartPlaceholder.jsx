import '../styles/scss/CartPlaceholder.scss';

export default function CartPlaceholder() {
  return (
    <div className='cart-placeholder'>
      <img
        src={require('../assets/images/illustration-empty-cart.svg')}
        alt='Cake'
        className='cart-placeholder__image'
      />
      <p className='cart-placeholder__text'>
        Your added items will appear here
      </p>
    </div>
  );
}
