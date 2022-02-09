import React from 'react';

import Form from '.';
import Image from '../figure';

import { childrenPositions, FormDefaultProps } from './assets/json';

import { variants } from '../button/assets/json';

import ThatsAllFolks from './assets/img/folks.jpg';
import { FlexDirectionOptions } from '../grid/assets/json';

export default {
  title: 'Form component',
  component: Form,
  argTypes: {
    inputs: {
      control: {
        type: 'array',
      },
    },
    childrenPosition: {
      control: {
        type: 'radio',
        options: childrenPositions,
      },
    },
    submitButtonVariant: {
      control: {
        type: 'radio',
        options: variants,
      },
    },
    cancelButtonVariant: {
      control: {
        type: 'radio',
        options: variants,
      },
    },
    direction: {
      control: {
        type: 'radio',
        options: FlexDirectionOptions,
      },
    },
  },
};

function Template(args) {
  return (
    <Form
      {...args}
      onSubmit={(data) => console.log('this is the data that would be sent: ', data)}
      onCancel={() => console.log('Submit has been cancelled')}
    >
      <Image
        src={ThatsAllFolks}
        alt="T-t-t-that's all folks!"
      />
    </Form>
  );
}

export const form = Template.bind({});

form.args = {
  ...FormDefaultProps,
  inputs: [
    {
      type: 'date',
      label: 'Date',
      name: 'date',
      variant: 'underlined',
      onChange: (event) => console.log('Date changed', event.target.value),
      required: true,
      errorMessage: 'You must provide a date',
    }, {
      type: 'text',
      label: 'Name',
      name: 'name',
      onChange: (event) => console.log('Name changed', event.target.value),
      required: true,
      errorMessage: 'Name is required',
    }, {
      type: 'number',
      label: 'Number',
      name: 'number',
      onChange: (event) => console.log('Number changed', event.target.value),
      errorMessage: 'We need a number for that',
    }, {
      type: 'email',
      label: 'Email',
      name: 'email',
      onChange: (event) => console.log('Email changed', event.target.value),
      required: true,
      errorMessage: 'How can we get in touch without an email?',
    }, {
      type: 'file',
      label: 'File (not required)',
      name: 'file',
      onChange: (event) => console.log('File changed', event.target.value),
      required: false,
    },
  ],
  childrenPosition: 'end',
  direction: 'row',
};
