import '../styles/scss/AddButton.scss';

export default function AddButton() {
  return (
    <button className='add-button'>
      <img
        src={require('../assets/images/icon-add-to-cart.svg')}
        alt='Cart'
        className='add-button__icon'
      />
      <span className='add-button__text'>Add to Cart</span>
    </button>
  );
}
