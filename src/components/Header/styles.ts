import styled, { css } from 'styled-components';
import { tablet } from 'utils/devices';

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;

  ${({ theme }) => css`
    border-top: 5px solid ${theme.colors.primaryDark};
    background-color: ${theme.colors.primary};
  `}

  @media (min-width: ${tablet}) {
    position: static;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.xsmall} 0;
  `}

  @media (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: baseline;

    ${({ theme }) => css`
      padding: ${theme.spacings.medium};
    `}
  }
`;

export const LogoArticle = styled.article`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}

  @media (min-width: ${tablet}) {
    margin: 0;
  }
`;

export const SearchArticle = styled.article``;
