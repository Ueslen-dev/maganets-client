import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/index';

import Search from '.';

describe('Component <Search/>', () => {
  it('Search recebe valor corretamente', async () => {
    renderWithTheme(<Search />);
    const searchElement = screen.getByPlaceholderText(/busca/i);

    await userEvent.type(searchElement, 'Camisa da nike');

    expect((searchElement as HTMLInputElement).value).toBe('Camisa da nike');
  });
});
