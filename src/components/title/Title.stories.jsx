import React from 'react';

import Title from '.';

import { tags } from './assets/json';

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
  },
};

function Template(args) {
  return (
    <>
      <Title
        {...args}
      />
      <Title
        text="Your subtitle here"
        type="subtitle"
      />
      <Title
        text="Even smaller subtitles?"
        type={3}
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
  text: 'Your ad here',
  type: 'title',
};
