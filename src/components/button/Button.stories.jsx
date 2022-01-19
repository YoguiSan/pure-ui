import React from 'react';

import Button from '.';

import { variants } from './assets/json';

export default {
  title: 'Button component',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(variants),
      },
    },
    type: {
      control: {
        type: 'radio',
      },
    },
    color: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    /*
    icon: {
      control: {
        type: 'text',
      },
    },
    onClick: {
      control: {
        type: 'text',
      },
    },
    */
  },
};

function Template(args) {
  return (
    <Button
      {...args}
    />
  );
}

export const button = Template.bind({});

button.args = {
  variant: 'container',
  type: 'button',
  color: 'primary',
  text: 'I can read what\'s in that button',
  // icon,
  onClick: ({ target }) => alert(`Inner text is: ${target.innerHTML}`),
};
