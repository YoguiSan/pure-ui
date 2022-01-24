import React from 'react';
import { number, string } from 'prop-types';

import Container from './Container';

import { ImageDefaultProps } from './assets/json';

function Image({
  width,
  alt,
  src,
  caption,
  captionBackground = 'black',
  captionColor = 'white',
  backgroundImage,
}) {
  return (
    <Container
      width={width}
      captionBackground={captionBackground}
      captionColor={captionColor}
      backgroundImage={backgroundImage}
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
  width: number,
  alt: string.isRequired,
  caption: string,
  src: string.isRequired,
  captionBackground: string,
  captionColor: string,
  backgroundImage: string,
};

export default Image;
