import { screen, render } from '@testing-library/react';

import TextIcon from '.';

describe('<TextIcon/>', () => {
  it('should render the heading', () => {
    const { container } = render(<TextIcon />);
    expect(
      screen.getByRole('heading', { name: /TextIcon/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

});
