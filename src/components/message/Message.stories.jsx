import React from 'react';

import { TypeOptions, PositionOptions } from './json';

import Message from '.';

export default {
  title: 'Message component',
  component: Message,
  argTypes: {
    type: {
      options: TypeOptions,
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
  text: 'Sample message',
  position: 'top-right',
  type: 'fatal',
  timeout: 50000,
  classes: [],
  handleClose: null,
  closeButtonIcon: null,
  closeDelay: null,
};
