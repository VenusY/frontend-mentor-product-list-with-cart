import '../styles/scss/ProductList.scss';
import Menu from './Menu/Menu';

export default function ProductList() {
  return (
    <section className='product-list'>
      <h1 className='product-list__heading'>Desserts</h1>
      <Menu />
    </section>
  );
}
