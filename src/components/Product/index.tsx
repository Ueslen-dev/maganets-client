import * as S from './styles';

type Props = {
  img: string;
  name: string;
  price: string;
};

const Product = ({ img, name, price }: Props) => (
  <S.Wrapper>
    <S.Figure>
      <img src={img} alt="foto do produto" />
    </S.Figure>
    <S.Name>{name}</S.Name>
    <S.Price>{price}</S.Price>
  </S.Wrapper>
);
export default Product;
