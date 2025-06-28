import '../styles/scss/Order.scss';
import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';
import OrderList from './OrderList';
import OrderTotal from './OrderTotal';
import OrderInfo from './OrderInfo';
import ActionButton from './ActionButton';

export default function Order() {
  const { setDisplayModal } = useContext(PageContext);

  function confirmOrder() {
    setDisplayModal(true);
  }

  return (
    <div className='order'>
      <OrderList />
      <OrderTotal modal={false} />
      <OrderInfo />
      <ActionButton buttonText='Confirm Order' handleClick={confirmOrder} />
    </div>
  );
}
