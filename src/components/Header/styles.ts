import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    border-top: 5px solid ${theme.colors.primaryDark};
    background-color: ${theme.colors.primary};
  `}
`;

export const Content = styled.section`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 2fr;

  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;

export const LogoArticle = styled.article``;

export const SearchArticle = styled.article``;
