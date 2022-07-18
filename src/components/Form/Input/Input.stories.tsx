import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Input from './Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'some@example.com',
  description: 'Enter your email address'
};
export const Error = Template.bind({});
Error.args = {
  label: 'Email',
  placeholder: 'some@example.com',
  errorMessage: 'Please enter a valid email address.'
};