import menu from './data.json';
import Product from '../Product';

export default function Menu() {
  const dessertNames = [
    'waffle',
    'creme-brulee',
    'macaron',
    'tiramisu',
    'baklava',
    'meringue',
    'cake',
    'brownie',
    'panna-cotta',
  ];

  return (
    <div className='menu'>
      {menu.map((product, index) => (
        <Product
          key={product.name}
          name={product.name}
          category={product.category}
          price={product.price}
          image={[
            require(`../../assets/images/image-${dessertNames[index]}-thumbnail.jpg`),
            require(`../../assets/images/image-${dessertNames[index]}-mobile.jpg`),
            require(`../../assets/images/image-${dessertNames[index]}-tablet.jpg`),
            require(`../../assets/images/image-${dessertNames[index]}-desktop.jpg`),
          ]}
        />
      ))}
    </div>
  );
}
