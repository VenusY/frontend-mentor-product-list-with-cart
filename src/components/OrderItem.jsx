export default function OrderItem({ name, quantity, price }) {
  return (
    <div className='order-item'>
      <div className='order-item__info'>
        <p className='order-item__name'>{name}</p>

        <div className='order-item__container'>
          <p className='order-item__quantity'>{quantity}x</p>
          <p className='order-item__price'>@ ${price.toFixed(2)}</p>
          <p className='order-item__total'>${(price * quantity).toFixed(2)}</p>
        </div>
      </div>

      <button className='order-item__remove-button'>
        <img
          src={require('../assets/images/icon-remove-item.svg')}
          alt='Remove'
          className='order-item__remove-icon'
        />
      </button>
    </div>
  );
}
