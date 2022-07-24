import { Story, Meta } from '@storybook/react/types-6-0';

import Product from '.';

export default {
  title: 'Product',
  component: Product,
} as Meta;

export const Basic: Story = (args) => <Product />;
