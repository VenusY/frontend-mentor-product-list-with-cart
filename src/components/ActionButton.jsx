import '../styles/scss/ActionButton.scss';

export default function ActionButton({ buttonText, handleClick }) {
  return (
    <button className='action-button' onClick={handleClick}>
      {buttonText}
    </button>
  );
}
