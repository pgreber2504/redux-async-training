import ProductItem from './ProductItem';
import classes from './Products.module.css';

const productItems = [
  {
    id: 'efgh',
    title: 'Test22',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: 'asd',
    title: 'Test1',
    price: 7,
    description: 'This is a first product - amazing!'
  },
]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map(el => <ProductItem key={el.id} id={el.id} title={el.title} price={el.price} description={el.description} />)}
      </ul>
    </section>
  );
};

export default Products;
