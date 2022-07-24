import { createGlobalStyle, css } from 'styled-components';
import { tablet } from 'utils/devices';

const GlobalStyles = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.large};

    @media (min-width: ${tablet}) {
      margin-bottom: 0;
    }
  }
`}
`;

export default GlobalStyles;
