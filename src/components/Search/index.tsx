import { ChangeEvent } from 'react';
import * as S from './styles';
import { ImSearch as ImSearchIcon } from 'react-icons/im';

type Props = {
  placeholder?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Search = ({ placeholder, value, onChange }: Props) => {
  const iconSize = 20;

  return (
    <S.Wrapper>
      <S.Icon>
        <ImSearchIcon className="icon" size={iconSize} />
      </S.Icon>
      <S.Search placeholder={placeholder} value={value} onChange={onChange} />
    </S.Wrapper>
  );
};
export default Search;
