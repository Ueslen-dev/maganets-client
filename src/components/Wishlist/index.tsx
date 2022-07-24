import Breadcrumb from 'components/Breadcrumb';
import Container from 'components/Container';

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
        <h1>Wishlist</h1>
      </Container>
    </S.Wrapper>
  );
};
export default Wishlist;
