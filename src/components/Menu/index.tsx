import { useRouter } from 'next/router';
import {
  ImLocation2 as ImLocation2Icon,
  ImPhone as ImPhoneIcon,
  ImHeart as ImHeartIcon
} from 'react-icons/im';

import Button from 'components/Button';
import routes from 'routes';

import * as S from './styles';

const Menu = () => {
  const router = useRouter();

  const redirectTo = (path: string) => router.push(path);
  return (
    <S.Wrapper>
      <Button
        name="Cidade: São Paulo"
        icon={<ImLocation2Icon className="icon" />}
      />
      <Button
        name="Central de atendimento"
        icon={<ImPhoneIcon className="icon" />}
      />
      <Button
        name="Lista de desejos"
        icon={<ImHeartIcon className="icon" />}
        onClick={() => redirectTo(routes.wishlist)}
      />
    </S.Wrapper>
  );
};
export default Menu;
