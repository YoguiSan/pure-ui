import React from 'react';

import Table from '.';
import Grid, { Row, Column } from '../grid';

import { TableDefaultProps } from './assets/json';

export default {
  title: 'Table component',
  component: Table,
  argTypes: {
    header: {
      control: {
        type: 'array',
      },
    },
    rows: {
      control: {
        type: 'array',
      },
    },
    fullHeight: {
      control: {
        type: 'boolean',
      },
    },
  },
};

function Template(args) {
  return (
    <Grid>
      <Row>
        <Column
          extraSmall={6}
        >
          <Table
            {...args}
          />
        </Column>
        <Column
          extraSmall={6}
        >
          <Table
            {...args}
            striped={false}
            title="This is a table too, but not striped (oh I could never tell)"
            headerBackground="black"
            headerColor="white"
          />
        </Column>
      </Row>
    </Grid>
  );
}

export const table = Template.bind({});

table.args = {
  ...TableDefaultProps,
  striped: true,
  title: 'This is a table (oh for real?)',
  header: {
    id: 'ID',
    name: 'Name',
    value: 'Value',
  },
  rows: [{
    name: 'One',
    value: 'one',
    id: 1,
  }, {
    value: 'you expected this to be two',
    id: 2,
    name: 'Zwei',
  }],
};
