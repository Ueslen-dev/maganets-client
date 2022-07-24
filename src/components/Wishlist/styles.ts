import styled, { css } from 'styled-components';
import { tablet } from 'utils/devices';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;

export const ProductGroup = styled.section`
  display: grid;

  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    gap: ${theme.spacings.small};
  `}

  @media (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
