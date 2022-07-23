import { ImLocation2 as ImLocation2Icon } from 'react-icons/im';

import Logo from 'components/Logo';
import TextIcon from 'components/TextIcon';
import Container from 'components/Container';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.SectionLogo>
          <Logo />
        </S.SectionLogo>
        <S.SectionSearch>
          <TextIcon
            name="Cidade: São Paulo"
            icon={<ImLocation2Icon size={30} />}
          />
        </S.SectionSearch>
      </S.Content>
    </Container>
  </S.Wrapper>
);
export default Header;
