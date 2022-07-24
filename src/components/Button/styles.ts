import styled, { css } from 'styled-components';

import { tablet } from 'utils/devices';

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${({ theme }) => css`
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall};

    &:hover {
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.primaryDark};
      transition: 0.5s all;
    }
  `}

  @media (min-width: ${tablet}) {
    flex-direction: row;
  }
`;
