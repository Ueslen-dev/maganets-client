import { ReactElement, useEffect } from 'react';
import { GetStaticProps } from 'next';

import Header from 'components/Header';
import WishlistContent from 'components/Wishlist';

import { fetchGetAllProducts } from 'services/magaNetsBff';
import ProductsInterface from 'interfaces/Products';

import useProducts from 'hooks/useProducts';

const Wishlist = ({ products }: { products: ProductsInterface[] }) => {
  const { setAllProductsInContext } = useProducts();

  useEffect(() => {
    setAllProductsInContext(products);
  }, [products, setAllProductsInContext]);

  return <WishlistContent />;
};

Wishlist.getLayout = function getLayout(page: ReactElement) {
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

export default Wishlist;
