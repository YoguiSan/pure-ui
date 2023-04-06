import React from 'react';

import Accordion from '.';
import Title from '../title';
import Grid from '../grid';

import { AccordionDefaultProps } from './assets/json';

export default {
  title: 'Accordion component',
  component: Accordion,
  argTypes: {
    /*
    icon: {
      control: {
        type: 'text',
      },
    },
    onClick: {
      control: {
        type: 'text',
      },
    },
    */
  },
};

function Template(args) {
  return (
    <Grid>
      <Accordion
        {...args}
      >
        <Title
          type="h5"
          text="Accordion body"
        />
      </Accordion>
      <Accordion
        title="One more accordion"
      >
        <Title
          type="h5"
          text="Yes, I am another accordion"
        />
      </Accordion>
    </Grid>
  );
}

export const accordion = Template.bind({});

accordion.args = {
  ...AccordionDefaultProps,
  title: 'Accordion header',
};
