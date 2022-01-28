import React from 'react';
import {
  number, string, element, objectOf,
} from 'prop-types';

import Image from '../figure';
import Title from '../title';
import Row from '../grid/row';

import Container from './Container';

import { CardDefaultProps } from './assets/json';

function Card({
  image = CardDefaultProps.image,
  imageWidth = CardDefaultProps.imageWidth,
  imageAlt = CardDefaultProps.imageAlt,
  title = CardDefaultProps.title,
  subtitle = CardDefaultProps.subtitle,
  titleAlign = CardDefaultProps.titleAlign,
  subtitleAlign = CardDefaultProps.subtitleAlign,
  text = CardDefaultProps.text,
  padding = CardDefaultProps.padding,
  unit = CardDefaultProps.unit,
  children = CardDefaultProps.children,
  styles = CardDefaultProps.styles,
}) {
  return (
    <Container
      padding={padding}
      unit={unit}
      styles={styles}
    >
      {
        image
          ? (
            <Row>
              <Image
                src={image}
                alt={imageAlt}
                width={imageWidth}
              />
            </Row>
          ) : ''
      }
      {
        title
          ? (
            <Row>
              <Title
                type="title"
                text={title}
                align={titleAlign}
              />
            </Row>
          ) : ''
      }
      {
        subtitle
          ? (
            <Row>
              <Title
                type="subtitle"
                text={subtitle}
                align={subtitleAlign}
              />
            </Row>
          ) : ''
      }
      {text
        ? (
          <Row>
            {text.split('\n').map((paragraph) => <p>{paragraph}</p>)}
          </Row>
        )
        : ''}
      {children || ''}
    </Container>
  );
}

Card.defaultProps = CardDefaultProps;

Card.propTypes = {
  image: string,
  imageAlt: string,
  imageWidth: number,
  padding: number,
  unit: number,
  title: string,
  subtitle: string,
  titleAlign: string,
  subtitleAlign: string,
  text: string,
  children: element,
  styles: objectOf(),
};

export default Card;
