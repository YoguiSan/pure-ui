import React from 'react';

import Title from '.';

import { align, tags, TitleDefaultProps } from './assets/json';

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
};
