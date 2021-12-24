import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'components/basic/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    componentSubtitle: '기본 버튼',
  },
};

const Template:Story<ButtonProps> = (args:ButtonProps) => {
  const { children, ...others } = args;
  return <Button {...others}>{children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'primary',
  type: 'primary',
  onClick: action('액션1'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'secondary',
  type: 'secondary',
  onClick: action('액션2'),
};
