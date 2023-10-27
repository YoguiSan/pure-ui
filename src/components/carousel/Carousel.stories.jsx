import React from 'react';

import Carousel from '.';
import Grid, { Row, Column } from '../grid';

import Target1 from './assets/img/Screenshot_1.jpg';
import Target2 from './assets/img/Screenshot_2.jpg';
import Target3 from './assets/img/Screenshot_3.jpg';
import Bystander1 from './assets/img/Screenshot_4.jpg';
import Bystander2 from './assets/img/Screenshot_5.jpg';
import Bystander3 from './assets/img/Screenshot_6.jpg';

import { CarouselDefaultProps } from './assets/json';

export default {
  title: 'Carousel component',
  component: Carousel,
  argTypes: {
    images: {
      control: {
        type: 'object',
      },
    },
    current: {
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
        <Column extraSmall={0} medium={3} />
        <Column extraSmall={12} medium={6}>
          <Carousel
            {...args}
          />
        </Column>
        <Column extraSmall={0} medium={3} />
      </Row>
    </Grid>
  );
}

export const carousel = Template.bind({});

carousel.args = {
  ...CarouselDefaultProps,
  images: [
    {
      src: Target1,
      alt: 'Thug 1',
      caption: 'Thug 1',
      buttonText: 'Shoot Me!',
      buttonOnClick: () => 'Got \'em!',
    }, {
      src: Target2,
      alt: 'Thug 2',
      caption: 'Thug 2',
      buttonText: 'Shoot Me!',
      buttonOnClick: () => 'Got \'em!',
    }, {
      src: Target3,
      alt: 'Thug 3',
      caption: 'Thug 3',
      buttonText: 'Shoot Me!',
      buttonOnClick: () => 'Got \'em!',
    }, {
      src: Bystander1,
      alt: 'Lady',
      caption: 'Lady',
    }, {
      src: Bystander2,
      alt: 'Professor',
      caption: 'Professor',
    }, {
      src: Bystander3,
      alt: 'Officer',
      caption: 'Officer',
    },
  ],
  current: 0,
};
