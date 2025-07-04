import type { Meta, StoryObj } from '@storybook/react';
import Services from './Services';

const meta: Meta<typeof Services> = {
  title: 'Components/Services',
  component: Services,
};

export default meta;

type Story = StoryObj<typeof Services>;

export const Default: Story = {
  render: () => <Services />,
};
