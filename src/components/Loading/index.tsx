import * as S from './styles';

type Props = {
  title?: string;
};

const Loading = ({ title = 'Buscando Produtos, aguarde...' }: Props) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
);
export default Loading;
