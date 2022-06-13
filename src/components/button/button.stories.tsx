import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select', options: Size } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  size: Size.medium,
};

export const Small = Template.bind({});
Small.args = {
  size: Size.small,
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: Size.medium,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: Size.large,
  label: 'Button',
};
