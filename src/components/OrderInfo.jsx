export default function OrderInfo() {
  return (
    <div className='order-info'>
      <img
        src={require('../assets/images/icon-carbon-neutral.svg')}
        alt='Tree'
        className='order-info__tree-icon'
      />

      <p className='order-info__message'>
        This is a{' '}
        <span className='order-info__message--bold'>carbon-neutral</span>{' '}
        delivery
      </p>
    </div>
  );
}
