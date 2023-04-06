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
          extraSmall={3}
        >
          <Input
            {...args}
          />
        </Column>
        <Column
          condensed
          extraSmall={3}
        >
          <Input
            label="Underlined input"
            variant="underlined"
          />
        </Column>
        <Column
          condensed
          extraSmall={3}
        />
        <Column
          condensed
          extraSmall={3}
        />
      </Row>
    </Grid>
  );
}

export const input = Template.bind({});

input.args = {
  ...InputDefaultProps,
  label: 'Label',
  name: 'input name',
  value: undefined,
  onChange: (event) => console.log(`I can handle this event. The current value is: ${event.target.value}`),
  options: [
    {
      text: 'Ein',
      value: 1,
    }, {
      text: 'Dós',
      value: 2,
    }, {
      text: 'Three',
      value: 3,
    }, {
      text: 'Quatro',
      value: 4,
    },
  ],
};
