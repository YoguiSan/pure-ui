import React from 'react';
import {
  number, string, shape, oneOf, arrayOf,
} from 'prop-types';

import Container from './Container';

import { ImageDefaultProps } from './assets/json';

import { Units } from '../assets/json';

function Image({
  height,
  width,
  alt,
  src,
  caption,
  captionBackground = 'black',
  captionColor = 'white',
  backgroundImage,
  styles,
  unit = 'px',
  classes = [],
}) {
  return (
    <Container
      height={height}
      width={width}
      captionBackground={captionBackground}
      captionColor={captionColor}
      backgroundImage={backgroundImage}
      styles={styles}
      unit={unit}
      className={
        Array.isArray(classes)
          ? classes.join(' ')
          : classes
      }
    >
      <img alt={alt} src={src} />
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </Container>
  );
}

Image.defaultProps = ImageDefaultProps;

Image.propTypes = {
  height: number,
  width: number,
  alt: string.isRequired,
  caption: string,
  src: string.isRequired,
  captionBackground: string,
  captionColor: string,
  backgroundImage: string,
  styles: shape(),
  unit: oneOf(Units),
  classes: oneOf([
    string,
    arrayOf(string),
  ]),
};

export default Image;
