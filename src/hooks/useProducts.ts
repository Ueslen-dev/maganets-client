import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'context/ProductsContext';

import ProductsInterface from 'interfaces/Products';

const useProducts = () => {
  const context = useContext(ProductsContext);
  const [wishlist, setWishlist] = useState<ProductsInterface[]>([]);

  const {
    setAllProductsInContext,
    productsContext,
    handleProductWishlist,
    productsWishlist
  } = context;

  const getProductsWishlist = useCallback(() => {
    const wishlistLocalStorage = localStorage.getItem('wishlist');

    const skusWishlist = wishlistLocalStorage
      ? wishlistLocalStorage.split(',').map((sku: string) => Number(sku))
      : productsWishlist;

    return skusWishlist;
  }, [productsWishlist]);

  const setProductsWishlist = useCallback(() => {
    const allProductsWishlist = getProductsWishlist();

    const filterProductsWishlist = productsContext.filter((product) => {
      return allProductsWishlist.includes(product.sku);
    });

    return setWishlist(filterProductsWishlist);
  }, [productsContext, getProductsWishlist]);

  useEffect(() => {
    return setProductsWishlist();
  }, [setProductsWishlist]);

  return {
    setAllProductsInContext,
    productsContext,
    handleProductWishlist,
    wishlist
  };
};

export default useProducts;
