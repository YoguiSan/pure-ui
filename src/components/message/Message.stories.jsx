import React from 'react';

import { TypeOptions, PositionOptions, AnimationOptions } from './json';

import Message from '.';

export default {
  title: 'Message component',
  component: Message,
  argTypes: {
    type: {
      options: TypeOptions,
      control: { type: 'radio' },
    },
    openAnimation: {
      options: AnimationOptions,
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
  openAnimation: 'fade',
  text: 'Sample message',
  position: 'top-right',
  type: 'fatal',
  timeout: 50000,
  classes: [],
  handleClose: null,
  closeButtonIcon: null,
  closeDelay: 500,
};
