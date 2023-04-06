import React from 'react';
import {
  number, string, element, arrayOf, func,
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
  classes = CardDefaultProps.classes,
  onClick = CardDefaultProps.onClick,
}) {
  return (
    <Container
      padding={padding}
      unit={unit}
      className={classes.join(' ')}
      onClick={onClick}
    >
      {
        image
          ? (
            <Row>
              <Image
                src={image}
                alt={imageAlt}
                width={imageWidth}
                unit={unit}
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
  classes: arrayOf(string),
  onClick: func,
};

export default Card;
