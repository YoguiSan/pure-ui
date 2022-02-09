import React from 'react';

import Row from '.';
import Title from '../../title';
import Column from '../column';

import { FlexDirectionOptions } from '../assets/json';
import { GridParameters, GridExampleParameters } from '../storyParameters';

export default {
  title: 'Row component',
  component: Row,
  argTypes: {
    ...GridParameters,
    flexDirection: {
      control: {
        type: 'radio',
        options: FlexDirectionOptions,
      },
    },
  },
};

function Template(args) {
  return (
    <>
      <Row
        {...args}
      >
        <Title text="This is a row" />
        <Title type="subtitle" text="You can use columns inside of it (oh really?)" />
      </Row>
      <Row
        {...args}
      >
        <Column extraSmall={12}>
          <Title text="This is a row with columns" />
        </Column>
        <Column
          extraSmall={5}
        >
          Column 1
        </Column>
        <Column
          extraSmall={4}
        >
          Column 2
        </Column>
        <Column
          extraSmall={3}
        >
          Column 3
        </Column>
      </Row>
    </>
  );
}

export const row = Template.bind({});

row.args = { ...GridExampleParameters };
