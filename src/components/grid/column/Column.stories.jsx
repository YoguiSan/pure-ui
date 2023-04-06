import React from 'react';

import Column from '.';
import Title from '../../title';

import { GridExampleParameters, GridParameters } from '../storyParameters';

export default {
  title: 'Column component',
  component: Column,
  argTypes: {
    ...GridParameters,
    extraSmall: {
      control: {
        type: 'number',
      },
    },
    small: {
      control: {
        type: 'number',
      },
    },
    medium: {
      control: {
        type: 'number',
      },
    },
    large: {
      control: {
        type: 'number',
      },
    },
    extraLarge: {
      control: {
        type: 'number',
      },
    },
  },
};

function Template(args) {
  return (
    <Column
      {...args}
    >
      <Title
        text="This is a column"
      />
    </Column>
  );
}

export const column = Template.bind({});

column.args = {
  ...GridExampleParameters,
  extraSmall: 12,
  small: 0,
  medium: 0,
  large: 0,
  extraLarge: 0,
};
