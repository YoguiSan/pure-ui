import React from 'react';

import Loader from '.';
import Title from '../title';

import { icons } from './assets/json';

export default {
  title: 'Loader component',
  component: Loader,
  argTypes: {
    icon: {
      control: {
        type: 'radio',
        options: [
          ...Object.keys(icons),
          undefined,
        ],
      },
    },
    blinking: {
      control: {
        type: 'boolean',
      },
    },
    modalBackground: {
      control: {
        type: 'text',
      },
    },
    iconBackground: {
      control: {
        type: 'text',
      },
    },
  },
};

function Template(args) {
  return (
    <>
      <Title>
        All loaders downloaded from
        {' '}
        <a href="https://icons8.com/">
          https://icons8.com/
        </a>
      </Title>
      <Title
        type="subtitle"
      >
        To test the "random" loader, please set it to
        {' '}
        <i>undefined</i>
        {' '}
        in the
        {' '}
        <b>icon</b>
        {' '}
        section
      </Title>
      <Loader
        {...args}
      />
    </>
  );
}

export const loader = Template.bind({});

loader.args = {
  open: true,
  spinning: true,
  blinking: false,
  icon: 'spinningLine',
  random: false,
  modalBackground: undefined,
  iconBackground: undefined,
};
