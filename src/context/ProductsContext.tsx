import { useCallback, useMemo, useState } from 'react';
import { createContext } from 'react';
import ProductsInterface from 'interfaces/Products';

type Provider = {
  children: React.ReactNode;
};

interface ProductsContextInterface {
  setAllProductsInContext: (products: ProductsInterface[]) => void;
  handleProductWishlist: (sku: number) => void;
  productsContext: ProductsInterface[];
  productsWishlist: number[];
}

const ProductsContext = createContext<ProductsContextInterface>(
  {} as ProductsContextInterface
);

const ProductsProvider = ({ children }: Provider) => {
  const [productsContext, setProductsContext] = useState<ProductsInterface[]>(
    []
  );
  const [productsWishlist, setProductsWishlist] = useState<number[]>([]);

  const setAllProductsInContext = useCallback(
    (products: ProductsInterface[]) => {
      setProductsContext(products);
    },
    []
  );

  const handleProductWishlist = useCallback((sku: number) => {
    return setProductsWishlist((prevState) => {
      const skuIsExist = prevState.some((state) => state === sku);

      if (skuIsExist) {
        const filterWishlist = prevState.filter((state) => state !== sku);
        localStorage.setItem('wishlist', filterWishlist.toString());

        return filterWishlist;
      } else {
        const wishlist = [...prevState, sku];
        localStorage.setItem('wishlist', wishlist.toString());

        return wishlist;
      }
    });
  }, []);

  const state = useMemo(
    () => ({
      setAllProductsInContext,
      handleProductWishlist,
      productsContext,
      productsWishlist
    }),
    [
      setAllProductsInContext,
      handleProductWishlist,
      productsContext,
      productsWishlist
    ]
  );

  return (
    <ProductsContext.Provider value={state}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
