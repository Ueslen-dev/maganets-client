import { isEmpty } from 'lodash';

import Breadcrumb from 'components/Breadcrumb';
import Container from 'components/Container';
import Product from 'components/Product';
import Loading from 'components/Loading';

import useProducts from 'hooks/useProducts';

import routes from 'routes';

import * as S from './styles';

const ListProducts = () => {
  const { productsContext, handleProductWishlist, wishlist } = useProducts();

  const breadcrumbRoutes = [
    {
      id: 0,
      to: routes.home,
      name: 'Home'
    }
  ];

  return (
    <S.Wrapper>
      <Container>
        <Breadcrumb routes={breadcrumbRoutes} />
        {isEmpty(productsContext) ? (
          <Loading />
        ) : (
          <S.ProductGroup data-testid="listProducts">
            {productsContext.map((product) => {
              return (
                <Product
                  key={product.id}
                  img={product.image}
                  name={product.title}
                  price={product.price}
                  addWishlist={() => handleProductWishlist(product.sku)}
                  isAddedToWishlist={wishlist.some(
                    (productWishlist) =>
                      Number(productWishlist.sku) === product.sku
                  )}
                />
              );
            })}
          </S.ProductGroup>
        )}
      </Container>
    </S.Wrapper>
  );
};
export default ListProducts;
