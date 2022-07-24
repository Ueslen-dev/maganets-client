import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/index';

import Breadcrumb from '.';

describe('Component <Breadcrumb/>', () => {
  it('Componente renderiza corretamente', () => {
    const routes = [
      {
        id: 0,
        to: '/',
        name: 'home'
      }
    ];

    renderWithTheme(<Breadcrumb routes={routes} />);

    const breadcrumbelement = screen.getByRole('listitem');
    expect(breadcrumbelement).not.toBeNull();
  });
});
