import { screen, render } from '@testing-library/react';

import ListProducts from '.';

describe('<ListProducts/>', () => {
  it('should render the heading', () => {
    const { container } = render(<ListProducts />);
    expect(
      screen.getByRole('heading', { name: /ListProducts/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

});
