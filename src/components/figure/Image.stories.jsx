import React from 'react';

import Image from '.';
import Row from '../grid/row';
import Column from '../grid/column';

import SeuMadruga from './assets/img/madruga-large.jpg';
import MadrugaCard from './assets/img/seumadrugaxz2.jpg';
import Prerigo from './assets/img/prerigo.png';

import { ImageDefaultProps } from './assets/json';

export default {
  title: 'Image component',
  component: Image,
  argTypes: {
    alt: {
      control: {
        type: 'text',
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
    caption: {
      control: {
        type: 'text',
      },
    },
    captionBackground: {
      control: {
        type: 'text',
      },
    },
    captionColor: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    imageBackground: {
      control: {
        type: 'text',
      },
    },
    styles: {
      control: {
        type: 'object',
      },
    },
    classes: {
      control: {
        type: 'object',
      },
    },
    buttonText: {
      control: {
        type: 'text',
      },
    },
  },
};

function Template(args) {
  return (
    <Row>
      <Column
        medium={8}
      >
        <Image
          {...args}
        />
      </Column>
      <Column
        medium={4}
      >
        <Image
          {...args}
          src={MadrugaCard}
          alt="Mr. Dawn in attack mode"
          caption={undefined}
        />
      </Column>
    </Row>
  );
}

export const image = Template.bind({});

image.args = {
  ...ImageDefaultProps,
  alt: 'Seu Madruga, Madruguinha, or Don Ramón for non Brazilians',
  src: SeuMadruga,
  caption: 'Meet Mr. Madruga',
  captionBackground: 'black',
  captionColor: 'white',
  backgroundImage: Prerigo,
  buttonOnClick: () => alert('See? It works'),
};
