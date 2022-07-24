import Link from 'next/link';

import * as S from './styles';

type Props = {
  routes: { id: number; to: string; name: string }[];
};
const Breadcrumb = ({ routes }: Props) => {
  const arrow = '>';
  return (
    <S.Wrapper>
      {routes?.map((route) => (
        <S.Routes key={route.id} data-testid="breadcrumb">
          <Link href={route.to}>
            <a>{route.name}</a>
          </Link>
          <span>{arrow}</span>
        </S.Routes>
      ))}
    </S.Wrapper>
  );
};
export default Breadcrumb;
