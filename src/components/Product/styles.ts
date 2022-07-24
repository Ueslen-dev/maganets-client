import styled, { css } from 'styled-components';

type BadgeProps = {
  isAddedToWishlist?: boolean;
};

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  background-color: #ffff;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    padding: ${theme.spacings.xxlarge} 0;
    transition: 0.5s all;

    &:hover {
      border: 1px solid ${theme.colors.secondary};
    }
  `}
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.gray};
    padding: ${theme.spacings.small};
  `}
`;

export const Price = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondary};
  `}
`;

export const ButtonAddWishlist = styled.button<BadgeProps>`
  width: 45px;
  height: 60px;
  clip-path: polygon(50% 0%, 100% 41%, 99% 100%, 0 100%, 0 40%);
  transform: rotate(180deg);
  border: none;
  cursor: pointer;
  margin: -56px 8px 0;

  ${({ theme, isAddedToWishlist }) => css`
    background-color: ${theme.colors.black};

    .icon {
      width: 20px;
      height: 20px;
      transform: rotate(180deg);
      position: relative;
      top: 7px;
      color: ${!isAddedToWishlist ? theme.colors.white : theme.colors.red};
    }
  `}
`;

export const ButtonRemoveItemForWishlist = styled.button`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  margin: -60px 0px 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    .icon {
      width: 30px;
      height: 30px;
      color: ${theme.colors.black};
      position: relative;
      top: 4px;
    }
  `}
`;
