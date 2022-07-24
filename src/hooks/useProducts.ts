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
    skusProductsWishlistContext
  } = context;

  const setProductsWishlist = useCallback(() => {
    const filterProductsWishlist = productsContext.filter((product) => {
      return skusProductsWishlistContext.includes(product.sku);
    });

    return setWishlist(filterProductsWishlist);
  }, [productsContext, skusProductsWishlistContext]);

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
