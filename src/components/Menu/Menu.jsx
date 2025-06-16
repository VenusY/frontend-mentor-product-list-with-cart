import menu from './data.json';
import Product from '../Product';

export default function Menu() {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <Product
          key={item.name}
          name={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  );
}
