import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Button from './Button';
import { BtnSizeEnum } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select', options: BtnSizeEnum } }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'white',
  label: 'Test',
  onPress: () => alert('Button pressed!')
};

