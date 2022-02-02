import React from 'react';

import Title from '.';
import { Units } from '../assets/json';

import { align, iconPositions, tags, TitleDefaultProps } from './assets/json';

export default {
  title: 'Title component',
  component: Title,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'radio',
        options: Object.keys(tags),
      },
    },
    align: {
      control: {
        type: 'radio',
        options: align,
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
    iconWidth: {
      control: {
        type: 'number',
      },
    },
    iconHeight: {
      control: {
        type: 'number',
      },
    },
    iconPosition: {
      control: {
        type: 'radio',
        options: iconPositions,
      },
    },
    unit: {
      control: {
        type: 'radio',
        options: Units,
      },
    },
  },
};

function Template(args) {
  return (
    <>
      <Title
        {...args}
      />
      <Title
        text="Your subtitle here, aligned to the center"
        type="subtitle"
        align="center"
      />
      <Title
        text="Even smaller subtitles? This time aligned to the right"
        type={3}
        align="right"
      />
      <Title
        text="Really?"
        type={4}
      />
      <Title
        text="This is getting out of hand"
        type={5}
      />
      <Title
        text="Is this trip really necessary?"
        type={6}
      />
    </>
  );
}

export const title = Template.bind({});

title.args = {
  ...TitleDefaultProps,
  text: 'Your ad here',
  type: 'title',
  align: 'left',
  icon: 'http://simpleicon.com/wp-content/uploads/icon2.png',
  iconHeight: 1,
  iconWidth: 1,
  unit: 'rem',
};
