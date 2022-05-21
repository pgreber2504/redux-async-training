import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const cartItems = items.length > 0
    ? items.map(
      el => <CartItem
        key={el.id}
        item={{
          id: el.id,
          title: el.title,
          quantity: el.amount,
          total: el.total,
          price: el.price
        }}
      />)
    : '';

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;
