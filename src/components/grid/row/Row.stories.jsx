import React from 'react';

import Row from '.';
import Column from '../column';

import { GridParameters, GridExampleParameters } from '../storyParameters';

export default {
  title: 'Row component',
  component: Row,
  argTypes: { ...GridParameters },
};

function Template(args) {
  return (
    <>
      <Row
        {...args}
      >
        <h1>This is a row</h1>
      </Row>
      <Row
        {...args}
      >
        <Column extraSmall={12}>
          <h1>This is a row with columns</h1>
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
