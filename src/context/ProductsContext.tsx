import { useCallback, useMemo, useState } from 'react';
import { createContext } from 'react';
import ProductsInterface from 'interfaces/Products';

type Provider = {
  children: React.ReactNode;
};

interface ProductsContextInterface {
  setAllProductsInContext: (products: ProductsInterface[]) => void;
  addProductInWishlist: (sku: string) => void;
  productsContext: ProductsInterface[];
  productWishlist: string[];
}

const ProductsContext = createContext<ProductsContextInterface>(
  {} as ProductsContextInterface
);

const INITIAL_STATE = [
  {
    id: 0,
    sku: 0,
    title: '',
    price: '',
    image: ''
  }
];

const ProductsProvider = ({ children }: Provider) => {
  const [productsContext, setProductsContext] =
    useState<ProductsInterface[]>(INITIAL_STATE);
  const [productWishlist, setProductWishlist] = useState<string[]>([]);

  const setAllProductsInContext = useCallback(
    (products: ProductsInterface[]) => {
      setProductsContext(products);
    },
    []
  );

  const addProductInWishlist = useCallback((sku: string) => {
    return setProductWishlist((prevState) => {
      return [...prevState, sku];
    });
  }, []);

  const state = useMemo(
    () => ({
      setAllProductsInContext,
      addProductInWishlist,
      productsContext,
      productWishlist
    }),
    [
      setAllProductsInContext,
      addProductInWishlist,
      productsContext,
      productWishlist
    ]
  );

  return (
    <ProductsContext.Provider value={state}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
