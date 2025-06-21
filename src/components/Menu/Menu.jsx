import menu from './data.json';
import Product from '../Product';

export default function Menu() {
  return (
    <div className='menu'>
      {menu.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
}
