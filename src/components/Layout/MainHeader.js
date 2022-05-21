import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const numberOfProducts = cartItems.reduce((acc, val) => acc + val.amount, 0);

  const showCartHandler = () => {
    dispatch(cartActions.cartShow())
  }


  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={showCartHandler} amount={numberOfProducts} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
