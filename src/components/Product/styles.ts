import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
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
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};
  `}
`;

export const Price = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondary};
  `}
`;
