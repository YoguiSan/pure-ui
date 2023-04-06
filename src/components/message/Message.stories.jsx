import React from 'react';

import { TypeOptions, PositionOptions, AnimationOptions } from './assets/json';

import Message from '.';

export default {
  title: 'Message component',
  component: Message,
  argTypes: {
    show: {
      options: [true, false],
      control: { type: 'radio' },
    },
    type: {
      options: TypeOptions,
      control: { type: 'radio' },
    },
    openAnimation: {
      options: AnimationOptions.open,
      control: { type: 'radio' },
    },
    closeAnimation: {
      options: AnimationOptions.close,
      control: { type: 'radio' },
    },
    position: {
      options: PositionOptions,
      control: { type: 'radio' },
    },
    handleClose: {
      control: {
        type: 'string',
      },
    },
    classes: {
      control: {
        type: 'array',
      },
    },
    openDelay: {
      control: {
        type: 'number',
      },
    },
    closeDelay: {
      control: {
        type: 'number',
      },
    },
  },
};

function Template(args) {
  return (
    <Message
      {...args}
    />
  );
}

export const message = Template.bind({});

message.args = {
  openAnimation: 'fadeIn',
  closeAnimation: 'fadeOut',
  text: 'Sample message',
  position: 'top-right',
  type: 'fatal',
  timeout: 50000,
  classes: [],
  handleClose: null,
  closeButtonIcon: null,
  openDelay: 500,
  closeDelay: 500,
  show: false,
};
