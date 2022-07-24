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
        >
          <ImHeartIcon className="icon" />
        </S.ButtonAddWishlist>
      )}
      {isActionRemoveItemForWishlist && (
        <S.ButtonRemoveItemForWishlist onClick={removeItemForWishlist}>
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
