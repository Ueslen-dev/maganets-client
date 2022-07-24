import Link from 'next/link';
import routes from 'routes';

import * as S from './styles';

const Logo = () => (
  <S.Wrapper>
    <Link href={routes.home}>
      <a>
        <h1>MagaNets</h1>
      </a>
    </Link>
  </S.Wrapper>
);
export default Logo;
