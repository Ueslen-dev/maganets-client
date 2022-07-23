import * as S from './styles';

type Props = {
  name: string;
  icon?: React.ReactNode;
};
const TextIcon = ({ name, icon }: Props) => (
  <S.Wrapper>
    {icon}
    <span>{name}</span>
  </S.Wrapper>
);
export default TextIcon;
