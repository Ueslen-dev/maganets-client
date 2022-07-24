import { screen, waitFor } from '@testing-library/react';

import { ProductsContext } from 'context/ProductsContext';
import { renderWithTheme } from 'utils/tests/index';
import { mockProductsContext } from 'mocks/mockProductsContext';

import Wishlist from '.';

describe('Component <Wishlist/>', () => {
  it('Componente é renderizado corretamente', async () => {
    renderWithTheme(
      <ProductsContext.Provider value={mockProductsContext}>
        <Wishlist />
      </ProductsContext.Provider>
    );

    const wishlistElement = await waitFor(() => {
      return screen.queryByTestId('wishlist');
    });

    expect(wishlistElement).not.toBeNull();
  });

  it('Componente não é renderizado corretamente', async () => {
    renderWithTheme(
      <ProductsContext.Provider
        value={{
          ...mockProductsContext,
          productsContext: []
        }}
      >
        <Wishlist />
      </ProductsContext.Provider>
    );

    const wishlistElement = await waitFor(() => {
      return screen.queryByTestId('wishlist');
    });

    expect(wishlistElement).toBeNull();
  });

  it('Loading é renderizado corretamente', async () => {
    renderWithTheme(
      <ProductsContext.Provider
        value={{
          ...mockProductsContext,
          productsContext: []
        }}
      >
        <Wishlist />
      </ProductsContext.Provider>
    );

    const loadingElement = await waitFor(() => {
      return screen.queryByRole('heading', {
        name: /Buscando Produtos, aguarde.../i
      });
    });

    expect(loadingElement).not.toBeNull();
  });
});
