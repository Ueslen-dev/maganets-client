import Logo from 'components/Logo';
import Container from 'components/Container';
import Search from 'components/Search';
import Menu from 'components/Menu';

import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper data-testid="header">
      <Container>
        <S.Content>
          <S.LogoArticle>
            <Logo />
          </S.LogoArticle>
          <S.SearchArticle>
            <Menu />
            <Search placeholder="Busca" />
          </S.SearchArticle>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};
export default Header;
