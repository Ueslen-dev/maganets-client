import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/index';

import Button from '.';

const history = {
  push: jest.fn()
};

jest.spyOn(history, 'push').mockReturnValue('/wishlist');
const redirectToPage = () => history.push();
describe('Component <Button/>', () => {
  it('Componente renderiza corretamente', () => {
    renderWithTheme(<Button name="Lista de desejos" />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).not.toBeNull();
  });

  it('onClick é acionado corretamente', async () => {
    const onClick = () => jest.fn();

    renderWithTheme(<Button name="Lista de desejos" onClick={onClick()} />);

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    redirectToPage();

    expect(history.push).toHaveBeenCalled();
  });
});
