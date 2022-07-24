import styled, { css } from 'styled-components';
import { tablet } from 'utils/devices';

export const Wrapper = styled.ul`
  display: flex;
  margin-top: 120px;

  li:last-child {
    span {
      display: none;
    }
  }

  ${({ theme }) => css`
    gap: ${theme.spacings.xxsmall};
  `}

  @media (min-width: ${tablet}) {
    margin: 0;
  }
`;

export const Routes = styled.li`
  list-style: none;

  ${({ theme }) => css`
    a {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.black};
      text-decoration: none;

      &:hover {
        color: ${theme.colors.primary};
        transition: 0.5s all;
      }
    }
    span {
      margin-left: ${theme.spacings.xxsmall};
      & + {
        display: none;
      }
    }
  `}
`;
