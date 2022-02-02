import React from 'react';

import ProgressBar from '.';
import Grid, { Row, Column } from '../grid';

import { types, variants, ProgressBarDefaultProps } from './assets/json';

export default {
  title: 'ProgressBar component',
  component: ProgressBar,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    progress: {
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
    transitionDuration: {
      control: {
        type: 'number',
      },
    },
  },
};

function Template(args) {
  return (
    <Grid>
      <Row>
        <Column extraSmall={12}>
          <ProgressBar
            {...args}
          />
        </Column>
        <Column extraSmall={3}>
          <ProgressBar
            type="success"
            progress={args.progress > 10 ? args.progress - (args.progress / 2) : 10}
          />
        </Column>
        <Column extraSmall={3}>
          <ProgressBar
            type="info"
            progress={args.progress > 20 ? args.progress - (args.progress / 3) : 20}
          />
        </Column>
        <Column extraSmall={3}>
          <ProgressBar
            type="warning"
            progress={args.progress > 30 ? args.progress - (args.progress / 4) : 30}
          />
        </Column>
        <Column extraSmall={3}>
          <ProgressBar
            type="error"
            progress={args.progress > 40 ? args.progress - (args.progress / 5) : 40}
          />
        </Column>
      </Row>
    </Grid>
  );
}

export const progressBar = Template.bind({});

progressBar.args = {
  ...ProgressBarDefaultProps,
  progress: 80,
};
