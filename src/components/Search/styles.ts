import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
`;

export const Search = styled.input`
  width: 100%;
  border: none;
  height: 50px;
  margin-left: -35px;

  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};

    &:focus {
      border: 1px solid ${theme.colors.primaryDark};
      outline: none;
    }
  `}
`;

export const Icon = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  float: left;
  left: 5px;
  top: 6px;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};

    .icon {
      color: ${theme.colors.black};
    }
  `}
`;
