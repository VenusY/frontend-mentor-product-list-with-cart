import OrderList from './OrderList';
import OrderTotal from './OrderTotal';
import OrderInfo from './OrderInfo';

export default function Order() {
  return (
    <div className='order'>
      <OrderList />
      <OrderTotal />
      <OrderInfo />
      <button className='order__confirm-button'>Confirm Order</button>
    </div>
  );
}
