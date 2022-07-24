import {
  ImLocation2 as ImLocation2Icon,
  ImPhone as ImPhoneIcon,
  ImHeart as ImHeartIcon
} from 'react-icons/im';

import TextIcon from 'components/TextIcon';

import * as S from './styles';

const Menu = () => {
  return (
    <S.Wrapper>
      <TextIcon
        name="Cidade: São Paulo"
        icon={<ImLocation2Icon className="icon" />}
      />
      <TextIcon
        name="Central de atendimento"
        icon={<ImPhoneIcon className="icon" />}
      />
      <TextIcon
        name="Lista de desejos"
        icon={<ImHeartIcon className="icon" />}
      />
    </S.Wrapper>
  );
};
export default Menu;
