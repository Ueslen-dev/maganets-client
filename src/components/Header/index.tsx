import Logo from 'components/Logo';
import TextIcon from 'components/TextIcon';
import { ImLocation2 as ImLocation2Icon } from 'react-icons/im';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <section>
      <Logo />
    </section>
    <section>
      <TextIcon name="Cidade: São Paulo" icon={<ImLocation2Icon size={30} />} />
      <h1>input de busca</h1>
    </section>
  </S.Wrapper>
);
export default Header;
