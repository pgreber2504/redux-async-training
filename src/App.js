import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, fetchData } from './store/cartActions'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInit = true;

function App() {
  const isSending = useSelector(state => state.ui.isSending)
  const items = useSelector(state => state.cart.items);
  const isChanged = useSelector(state => state.cart.isChanged);
  const modalIsActive = useSelector(state => state.cart.isActive);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return
    }

    if (isChanged) dispatch(fetchCart(items))
  }, [items, dispatch])

  const modal = modalIsActive && <Cart />


  return (
    <Fragment>
      {!isInit && <Notification message={isSending.message} title={isSending.title} status={isSending.status} />}
      <Layout>
        {modal}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
