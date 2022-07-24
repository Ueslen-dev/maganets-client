import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/index';
import { mockProductItem } from 'mocks/mockProductItem';

import Product from '.';

const productActions = {
  addWishlist: jest.fn(),
  removeItemForWishlist: jest.fn()
};

jest.spyOn(productActions, 'addWishlist');
jest.spyOn(productActions, 'removeItemForWishlist');

const addWishlist = () => productActions.addWishlist();
const removeItemForWishlist = () => productActions.removeItemForWishlist();

describe('Component <Product/>', () => {
  it('ButtonAddWishlist é renderizado corretamente', () => {
    renderWithTheme(<Product {...mockProductItem} />);

    const buttonAddWishlist = screen.getByLabelText(
      /Adicionar produto a lista de desejos/i
    );

    expect(buttonAddWishlist).not.toBeNull();
  });

  it('ButtonAddWishlist não é renderizado corretamente', () => {
    renderWithTheme(
      <Product {...mockProductItem} isActionAddWishlist={false} />
    );

    const buttonAddWishlist = screen.queryByLabelText(
      /Adicionar produto a lista de desejos/i
    );

    expect(buttonAddWishlist).toBeNull();
  });

  it('ButtonAddWishlist aciona o onClick corretamente', async () => {
    renderWithTheme(<Product {...mockProductItem} />);

    const buttonAddWishlist = screen.getByLabelText(
      /Adicionar produto a lista de desejos/i
    );

    await userEvent.click(buttonAddWishlist);

    addWishlist();

    expect(productActions.addWishlist).toHaveBeenCalled();
  });

  it('ButtonRemoveItemForWishlist é renderizado corretamente', () => {
    renderWithTheme(
      <Product {...mockProductItem} isActionRemoveItemForWishlist />
    );

    const buttonRemoveItemForWishlist = screen.getByLabelText(
      /Remover produto da lista de desejos/i
    );

    expect(buttonRemoveItemForWishlist).not.toBeNull();
  });

  it('ButtonRemoveItemForWishlist não é renderizado corretamente', () => {
    renderWithTheme(<Product {...mockProductItem} />);

    const buttonRemoveItemForWishlist = screen.queryByLabelText(
      /Remover produto da lista de desejos/i
    );

    expect(buttonRemoveItemForWishlist).toBeNull();
  });

  it('ButtonRemoveItemForWishlist aciona o onClick corretamente', async () => {
    renderWithTheme(
      <Product {...mockProductItem} isActionRemoveItemForWishlist />
    );

    const buttonRemoveItemForWishlist = screen.getByLabelText(
      /Remover produto da lista de desejos/i
    );

    await userEvent.click(buttonRemoveItemForWishlist);

    removeItemForWishlist();

    expect(productActions.removeItemForWishlist).toHaveBeenCalled();
  });
});
