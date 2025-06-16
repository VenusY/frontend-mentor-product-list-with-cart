import ProductImage from './ProductImage';

export default function Product({ name, category, price, image }) {
  return (
    <article className='product'>
      <ProductImage />
      <p className='product__category'>{category}</p>
      <h3 className='product__name'>{name}</h3>
      <p className='product__price'>{price}</p>
    </article>
  );
}
