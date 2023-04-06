import React from 'react';
import Card from '.';
import { Units } from '../assets/json';

import { Row, Column } from '../grid';

import { align } from '../title/assets/json';

import AceCard from './assets/img/ace-card.png';

import { CardDefaultProps } from './assets/json';

export default {
  title: 'Card component',
  component: Card,
  argTypes: {
    image: {
      control: {
        type: 'text',
      },
    },
    imageAlt: {
      control: {
        type: 'text',
      },
    },
    imageWidth: {
      control: {
        type: 'number',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    padding: {
      control: {
        type: 'number',
      },
    },
    unit: {
      control: {
        type: 'radio',
        options: Units,
      },
    },
    titleAlign: {
      control: {
        type: 'radio',
        options: align,
      },
    },
    subtitleAlign: {
      control: {
        type: 'radio',
        options: align,
      },
    },
  },
};

function Template(args) {
  const multilineTtext = `
  This is a multiline text.

  It's here to illustrate that these cards can handle multiline texts in their own way.

  Don't believe me? Check it out.
  `;

  const longText = 'This is a really long text. Of course most of this is absolutely, utterly and ultimately unnecessary, however it is made solely with the intent of demonstrating the functionalities of the component, and how it can deal with absurdly, ludicrously and ambitiously long strings';

  return (
    <Row>
      <Column
        condensed
        extraSmall={5}
      >
        <Card
          {...args}
        />
      </Column>
      <Column
        condensed
        extraSmall={4}
      >
        <Card
          text={multilineTtext}
        />
      </Column>
      <Column
        condensed
        extraSmall={3}
      >
        <Card
          text={longText}
        />
      </Column>
      <Column
        condensed
        extraSmall={12}
      >
        <Card
          text="This one has custom classes"
          classes={['class-one', 'class-two', 'very-originally-named-class-three']}
        />
      </Column>
    </Row>
  );
}

export const card = Template.bind({});

card.args = {
  ...CardDefaultProps,
  image: AceCard,
  imageAlt: 'This is a card. Get it?',
  imageWidth: 100,
  unit: '%',
  title: 'A card',
  subtitle: 'Just a regular card',
  titleAlign: 'center',
  subtitleAlign: 'center',
  text: 'This is a card. Get it?',
  onClick: () => alert('I can handle functions too'),
};
