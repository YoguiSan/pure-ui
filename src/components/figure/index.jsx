import React from 'react';
import {
  number,
  string,
  shape,
  oneOf,
  arrayOf,
  func,
} from 'prop-types';

import Button from '../button';
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
  buttonText,
  buttonOnClick,
  buttonVariant,
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
      {(caption || buttonText) && (
        <figcaption>
          {caption || ''}
          {buttonText && (
            <Button
              text={buttonText}
              onClick={buttonOnClick}
              variant={buttonVariant}
            />
          )}
        </figcaption>
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
  buttonText: string,
  buttonOnClick: func,
  buttonVariant: string,
};

export default Image;
