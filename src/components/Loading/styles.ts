import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  text-align: center;

  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`;
