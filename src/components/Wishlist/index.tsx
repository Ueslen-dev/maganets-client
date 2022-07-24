import Breadcrumb from 'components/Breadcrumb';
import Container from 'components/Container';
import Product from 'components/Product';

import routes from 'routes';

import * as S from './styles';

const Wishlist = () => {
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
        <S.ProductGroup>
          {[0, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Product
                key={item}
                img="https://via.placeholder.com/150"
                name="Produto de bebê"
                price="R$4,00"
              />
            );
          })}
        </S.ProductGroup>
      </Container>
    </S.Wrapper>
  );
};
export default Wishlist;
