import styled, { css } from 'styled-components';

const Container = styled.section`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;

export default Container;
