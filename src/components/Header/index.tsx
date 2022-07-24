import { ImLocation2 as ImLocation2Icon } from 'react-icons/im';

import Logo from 'components/Logo';
import TextIcon from 'components/TextIcon';
import Container from 'components/Container';
import Search from 'components/Search';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.LogoArticle>
          <Logo />
        </S.LogoArticle>
        <S.SearchArticle>
          <TextIcon
            name="Cidade: São Paulo"
            icon={<ImLocation2Icon size={30} />}
          />
          <Search placeholder="Busca" />
        </S.SearchArticle>
      </S.Content>
    </Container>
  </S.Wrapper>
);
export default Header;
