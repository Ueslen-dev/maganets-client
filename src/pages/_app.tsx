import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ProductsProvider } from 'context/ProductsContext';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <>
      <ProductsProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>MagaNets - Loja Online</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="Aproveite as melhores ofertas em um só lugar!"
            />
          </Head>
          <GlobalStyles />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ProductsProvider>
    </>
  );
};

export default App;
