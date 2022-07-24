import Breadcrumb from 'components/Breadcrumb';
import Container from 'components/Container';

import routes from 'routes';

import * as S from './styles';

const ListProducts = () => {
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
        <h1>Página principal</h1>
      </Container>
    </S.Wrapper>
  );
};
export default ListProducts;
