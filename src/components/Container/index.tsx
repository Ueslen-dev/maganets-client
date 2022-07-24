import styled, { css } from 'styled-components';
import { tablet } from 'utils/devices';

const Container = styled.section`
  @media (min-width: ${tablet}) {
    ${({ theme }) => css`
      width: 90vw;
      max-width: ${theme.grid.container};
      margin: 0 auto;
    `}
  }
`;

export default Container;
