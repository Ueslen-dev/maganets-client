import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  a {
    text-decoration: none;
  }
  ${({ theme }) => css`
    h1 {
      font-weight: ${theme.font.bold};
      letter-spacing: -0.2rem;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;
