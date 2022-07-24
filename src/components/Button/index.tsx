import * as S from './styles';

type Props = {
  name: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};
const Button = ({ name, icon, onClick }: Props) => (
  <S.Wrapper onClick={onClick}>
    {icon}
    <span>{name}</span>
  </S.Wrapper>
);
export default Button;
