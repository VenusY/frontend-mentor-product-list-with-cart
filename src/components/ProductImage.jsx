import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';
import AddButton from './AddButton';
import ChangeQuantityPanel from './ChangeQuantityPanel';

export default function ProductImage({ name, image }) {
  const { addedItems } = useContext(PageContext);

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

      {addedItems.has(name) ? (
        <ChangeQuantityPanel name={name} />
      ) : (
        <AddButton />
      )}
    </div>
  );
}
