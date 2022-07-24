import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/index';

import Header from '.';

describe('Component <Header/>', () => {
  it('Componente é renderizado corretamente', () => {
    renderWithTheme(<Header />);
    const headerElement = screen.getByTestId('header');

    expect(headerElement).not.toBeNull();
  });

  it('Search recebe valor corretamente', async () => {
    renderWithTheme(<Header />);
    const searchElement = screen.getByPlaceholderText(/busca/i);

    await userEvent.type(searchElement, 'Camisa da nike');

    expect((searchElement as HTMLInputElement).value).toBe('Camisa da nike');
  });
});
