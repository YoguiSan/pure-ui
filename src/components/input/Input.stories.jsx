import React from 'react';

import Input from '.';

import Grid, { Row, Column } from '../grid';

import { InputDefaultProps, types, variants } from './assets/json';

export default {
  title: 'Input component',
  component: Input,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'radio',
        options: types,
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: variants,
      },
    },
  },
};

function Template(args) {
  return (
    <Grid>
      <Row>
        <Column
          condensed
          extraSmall={5}
        >
          <Input
            {...args}
          />
        </Column>
      </Row>
    </Grid>
  );
}

export const input = Template.bind({});

input.args = {
  ...InputDefaultProps,
  name: 'sample-input',
  onChange: (event) => console.log(`I can handle this event. The current value is: ${event.target.value}`),
};
