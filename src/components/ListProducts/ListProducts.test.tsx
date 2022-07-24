import { screen, waitFor } from '@testing-library/react';

import { ProductsContext } from 'context/ProductsContext';
import { renderWithTheme } from 'utils/tests/index';
import { mockProductsContext } from 'mocks/mockProductsContext';

import ListProducts from '.';

describe('Component <ListProducts/>', () => {
  it('Componente é renderizado corretamente', async () => {
    renderWithTheme(
      <ProductsContext.Provider value={mockProductsContext}>
        <ListProducts />
      </ProductsContext.Provider>
    );

    const listProductsElement = await waitFor(() => {
      return screen.queryByTestId('listProducts');
    });

    expect(listProductsElement).not.toBeNull();
  });

  it('Componente não é renderizado corretamente', async () => {
    renderWithTheme(
      <ProductsContext.Provider
        value={{
          ...mockProductsContext,
          productsContext: []
        }}
      >
        <ListProducts />
      </ProductsContext.Provider>
    );

    const listProductsElement = await waitFor(() => {
      return screen.queryByTestId('listProducts');
    });

    expect(listProductsElement).toBeNull();
  });

  it('Loading é renderizado corretamente', async () => {
    renderWithTheme(
      <ProductsContext.Provider
        value={{
          ...mockProductsContext,
          productsContext: []
        }}
      >
        <ListProducts />
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
