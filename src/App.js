import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const modalIsActive = useSelector(state => state.isActive);

  const modal = modalIsActive && <Cart />

  return (
    <Fragment>
      <Layout>
        {modal}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
