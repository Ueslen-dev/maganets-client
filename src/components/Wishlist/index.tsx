import { isEmpty } from 'lodash';

import Breadcrumb from 'components/Breadcrumb';
import Container from 'components/Container';
import Product from 'components/Product';
import Loading from 'components/Loading';

import useProducts from 'hooks/useProducts';

import routes from 'routes';

import * as S from './styles';

const Wishlist = () => {
  const { wishlist, handleProductWishlist } = useProducts();

  const breadcrumbRoutes = [
    {
      id: 0,
      to: routes.home,
      name: 'Home'
    },
    {
      id: 1,
      to: routes.wishlist,
      name: 'Lista de desejos'
    }
  ];
  return (
    <S.Wrapper>
      <Container>
        <Breadcrumb routes={breadcrumbRoutes} />
        {isEmpty(wishlist) ? (
          <Loading title="Você não tem nenhum produto na lista de desejos" />
        ) : (
          <S.ProductGroup data-testid="wishlist">
            {wishlist.map((product) => {
              return (
                <Product
                  key={product.id}
                  img={product.image}
                  name={product.title}
                  price={product.price}
                  removeItemForWishlist={() =>
                    handleProductWishlist(product.sku)
                  }
                  isActionAddWishlist={false}
                  isActionRemoveItemForWishlist
                />
              );
            })}
          </S.ProductGroup>
        )}
      </Container>
    </S.Wrapper>
  );
};
export default Wishlist;
