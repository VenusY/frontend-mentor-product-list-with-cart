import '../styles/scss/ModalOrderItem.scss';

export default function ModalOrderItem({ image, name, price, quantity }) {
  return (
    <div className='modal-order-item'>
      <img src={image} alt={name} className='modal-order-item__image' />

      <div className='modal-order-item__text-section'>
        <p className='modal-order-item__name'>{name}</p>

        <div className='modal-order-item__info'>
          <p className='modal-order-item__quantity'>{quantity}x</p>
          <p className='modal-order-item__price'>@ ${price.toFixed(2)}</p>
        </div>
      </div>

      <p className='modal-order-item__total'>
        ${(price * quantity).toFixed(2)}
      </p>
    </div>
  );
}
