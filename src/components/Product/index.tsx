import { ImHeart as ImHeartIcon } from 'react-icons/im';
import { IoIosCloseCircleOutline as IoIosCloseCircleOutlineIcon } from 'react-icons/io';

import * as S from './styles';

type Props = {
  img: string;
  name: string;
  price: string;
  addWishlist?: () => void;
  removeItemForWishlist?: () => void;
  isAddedToWishlist?: boolean;
  isActionAddWishlist?: boolean;
  isActionRemoveItemForWishlist?: boolean;
};

const Product = ({
  img,
  name,
  price,
  addWishlist,
  removeItemForWishlist,
  isActionAddWishlist = true,
  isAddedToWishlist = false,
  isActionRemoveItemForWishlist = false
}: Props) => {
  return (
    <S.Wrapper>
      {isActionAddWishlist && (
        <S.ButtonAddWishlist
          onClick={addWishlist}
          isAddedToWishlist={isAddedToWishlist}
          aria-label="Adicionar produto a lista de desejos"
        >
          <ImHeartIcon className="icon" />
        </S.ButtonAddWishlist>
      )}
      {isActionRemoveItemForWishlist && (
        <S.ButtonRemoveItemForWishlist
          onClick={removeItemForWishlist}
          aria-label="Remover produto da lista de desejos"
        >
          <IoIosCloseCircleOutlineIcon className="icon" />
        </S.ButtonRemoveItemForWishlist>
      )}
      <S.Figure>
        <img src={img} alt="foto do produto" />
      </S.Figure>
      <S.Name>{name}</S.Name>
      <S.Price>{price}</S.Price>
    </S.Wrapper>
  );
};
export default Product;
