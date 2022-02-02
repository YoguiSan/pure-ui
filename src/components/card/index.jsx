import React from 'react';
import { number, string, element } from 'prop-types';

import Image from '../figure';
import Title from '../title';
import Row from '../grid/row';

import Container from './Container';

import { CardDefaultProps } from './assets/json';

function Card({
  image,
  imageWidth,
  imageAlt,
  title,
  subtitle,
  titleAlign,
  subtitleAlign,
  text,
  padding,
  unit = 'px',
  children = null,
}) {
  return (
    <Container
      padding={padding}
      unit={unit}
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
                type="h4"
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
                type="h5"
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
};

export default Card;
