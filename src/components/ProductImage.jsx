import AddButton from './AddButton';

export default function ProductImage({ name, image }) {
  return (
    <div className='product__image-container'>
      <img
        src={image[1]}
        alt={name}
        className='product__image product__mobile-image'
      />
      <img
        src={image[3]}
        alt={name}
        className='product__image product__desktop-image'
      />

      <AddButton />
    </div>
  );
}
