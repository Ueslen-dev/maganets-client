import { ReactElement, useEffect } from 'react';
import { GetStaticProps } from 'next';

import Header from 'components/Header';
import ListProducts from 'components/ListProducts';

import { fetchGetAllProducts } from 'services/magaNetsBff';
import ProductsInterface from 'interfaces/Products';

import useProducts from 'hooks/useProducts';

const Home = ({ products }: { products: ProductsInterface[] }) => {
  const { setAllProductsInContext } = useProducts();

  useEffect(() => {
    setAllProductsInContext(products);
  }, [products, setAllProductsInContext]);

  return <ListProducts />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchGetAllProducts();
  const hour = 60 * 60 * 4; //4 hour

  return {
    props: {
      products
    },
    revalidate: hour
  };
};

export default Home;
