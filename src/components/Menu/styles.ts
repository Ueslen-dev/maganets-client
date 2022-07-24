import styled, { css } from 'styled-components';

import { tablet } from 'utils/devices';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;

  .icon {
    width: 25px;
    height: 25px;
  }

  span {
    display: none;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall};
  `}

  @media (min-width: ${tablet}) {
    position: static;
    justify-content: space-between;
    padding: 0;

    .icon {
      width: 20px;
      height: 20px;
    }

    span {
      display: block;
    }

    ${({ theme }) => css`
      margin-bottom: ${theme.spacings.small};
    `}
  }
`;
