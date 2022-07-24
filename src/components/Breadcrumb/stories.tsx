import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumb from '.';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
} as Meta;

export const Basic: Story = (args) => <Breadcrumb />;
